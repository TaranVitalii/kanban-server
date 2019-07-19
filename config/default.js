module.exports = {
  secret: "omega",
  mongoose: {
    uri: "mongodb://localhost/kanban",
    options: {
      keepAlive: 1,
      poolSize: 5,
      useNewUrlParser: true
    },
    debug: true
  },
  crypto: {
    hash: {
      length: 128,
      iterations: process.env.NODE_ENV == "production" ? 12000 : 1
    }
  }
};