const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// Problematic if not running on localhost (see readme or https://bezkoder.com/node-express-sequelize-postgresql/)
// If Problematic => Comment below line
app.use(cors(corsOptions));

// parse requests of content-type - application/jspn
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// FROM "INITIALIZE SEQUELIZE section https://bezkoder.com/node-express-sequelize-postgresql/"

// Don’t forget to call sync() method in server.js:
// In development, you may need to drop existing
//  tables and re-sync database.
// Just use force: true as following code:

const db = require("./app/models");
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route (home or default)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your FullStack App!." });
});

// MUST include below before app.listen()
require('./app/routes/turorial.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
