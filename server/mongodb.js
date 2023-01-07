const mongoose = require('mongoose')
const DB_URL = process.env.DATABASE;


const dbConnect = () => {
  mongoose.connect(DB_URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("DB connected...");
  });
};

module.exports = dbConnect;



// const mongoose = require('mongoose')
// const mongoURL = "mongodb+srv://nitish:nitish@cluster0.wz27bfh.mongodb.net/?retryWrites=true&w=majority"

// const db = () => {

//     mongoose.connect(mongoURL, {useNewURL : true, useUnifiedTopology: true, 
//         useCreateIndex: true, useFindAndModify: false
//     }).then(()=> {
//         console.log("connected to dB");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// module.exports = db;