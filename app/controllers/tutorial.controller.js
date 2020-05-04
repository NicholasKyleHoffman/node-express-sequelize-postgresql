// **** Controller CRUD API - create, update, edit, delete: **** //
const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


// *****
// Create and Save a new Tutorial OBJECT (everything is an object)
// *****
exports.create = (req, res) => {
  // Validate request
  if(!req.body) {
    res.status(400).send({
      message: "Tutorial body must exist/can't be empty!"
    });
    return;
  }


// *****
// Create a Tutorial
// *****
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };


// *****
// Save single Tutorial in database
// *****
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Tutorial."
      });
    });
};


// *****
// Retrieve all Tutorial Objects from the database (w/conditions)
// We use req.query.title to get query string from the Request
// and consider it as condition for findAll() method.
// *****
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


// *****
// Find a single Tutorial with an id
// *****
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error. Couldn't find the Turotial with id=" + id
      });
    });
};


// *****
// Update a Tutorial by the id in the request
// *****
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if(num == 1) {
        res.send({
          message:
            "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message:
            `Cannot update Tutorial with id=${id}.
            Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          "Error updating Tutorial with id=" + id
      });
    });
};


// *****
// Delete a Tutorial Object with the specified id: in the request
// *****
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};


// *****
// Delete all Tutorials from the database.
// *****
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: { },
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!!`});
    })
    .catch(err => {
      res.status(500).send{
        message:
          err.message || "Some unknown error occurred when DELETING ALL Tutorials..."
      });
    })''
};

// *****
// Find all published Tutorials WHERE * (published == true)
// *****
exports.findAllPublished = (req, res) => {
Tutorial.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
        message:
          err.message || "Some unknown error occurred when RETRIEVING ALL Tutorials..."
    });
  });
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
