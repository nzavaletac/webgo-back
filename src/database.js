const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/dbgo");
  // mongoose.connect('mongodb+srv://admin:53wE35WTNhH4DxTo@dbgo.kgcic.mongodb.net/dbgo?retryWrites=true&w=majority')
  // mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@dbgo.kgcic.mongodb.net/dbgoweb?retryWrites=true&w=majority`)
  // mongoose.connect(`mongodb+srv://{${process.env.USER_DB}}:${process.env.PASSWORD_DB}@dbgo.kgcic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  // mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.7fitn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  // mongoose.connect(
  //   `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.ms9hv.mongodb.net/dbgo?retryWrites=true&w=majority`
  // )

  mongoose.connection.once("open", () => {
    console.log("Database successfully connected");
  });
  mongoose.connection.on("error", () => {
    console.log("Something went wrong");
  });
};

module.exports = { connect };

