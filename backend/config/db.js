const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
     try {

          const dbConn = await mongoose.connect
          (`mongodb+srv://${dbUser}:${dbPassword}@bornsign.ien8lzp.mongodb.net/
`);
          
          console.log("conectou ao Banco!");

          return dbConn;
     } catch (error) {

          console.log(error);
     };
};

conn();
module.exports = conn;