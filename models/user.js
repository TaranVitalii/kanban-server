const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('config');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username:String,
 	passwordHash: {
      type: String,
      required: true
    },
    salt: {
      required: true,
      type: String
    }
  	},
  {
    timestamps: true
  })

UserSchema
  .virtual("password")
  .set(function(password) {
    if (password !== undefined) {
      if (password.length < 6) {
        this.invalidate("password", "Пароль должен быть минимум 4 символа.");
      }
    }

    this._plainPassword = password;

    if (password) {
      this.salt = crypto
        .randomBytes(config.crypto.hash.length)
        .toString("base64");
      this.passwordHash = crypto.pbkdf2Sync(
        password,
        this.salt,
        config.crypto.hash.iterations,
        config.crypto.hash.length,
        "sha1"
      );
    } else {
      // remove password (unable to login w/ password any more, but can use providers)
      this.salt = undefined;
      this.passwordHash = undefined;
    }
  })
  .get(function() {
    return this._plainPassword;
  });

 UserSchema.methods.checkPassword = function(password) {
  if (!password) return false; // empty password means no login by password
  if (!this.passwordHash) return false; // this user does not have password (the line below would hang!)

  return (
    crypto.pbkdf2Sync(
      password,
      this.salt,
      config.crypto.hash.iterations,
      config.crypto.hash.length,
      "sha1"
    ) == this.passwordHash
  );
};

UserSchema.methods.getPublicFields = function() {
  return {
    username: this.username,
  };
};

module.exports = mongoose.model('UserSchema', UserSchema);

