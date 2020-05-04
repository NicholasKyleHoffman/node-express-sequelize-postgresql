// **** Controller CRUD API - create, update, edit, delete: **** //
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial OBJECT (everything is an object)
exports.create = (req, res) => {
  // Validate request
  if(!req.body) {
    res.status(400).send({
      message: "Tutorial body must exist/can't be empty!"
    });
    return;
  }

  // Create a Tutorials
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save single Tutorial in database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Tutorial."
      })
    })

};

// Retrieve all Tutorial Objects from the database (w/conditions)
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

Tutorial.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err =? {
    res.status(500).send({
      message:
        err.message || "An error occurred whilst retreiving all Tutortials."
    });
  });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};




// Create the Controller
// Inside app/controllers folder, let’s create tutorial.controller.js with these CRUD functions:
//
// create
// findAll
// findOne
// update
// delete
// deleteAll
// findAllPublished
// const db = require("../models");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;
