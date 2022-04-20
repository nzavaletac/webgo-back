const mongoose = require("mongoose")

const connect = () => {
  try {
    mongoose.connect(
      `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0-shard-00-00.7fitn.mongodb.net:27017,cluster0-shard-00-01.7fitn.mongodb.net:27017,cluster0-shard-00-02.7fitn.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zzacy4-shard-0&authSource=admin&retryWrites=true&w=majority`
    )
    mongoose.connection.once("open", () => {
      console.log("Database successfully connected")
    })
    mongoose.connection.on("error", () => {
      console.log("Something went wrong")
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { connect }
