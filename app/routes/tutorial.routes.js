modules.export = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a New tutorial
  router.post("/", tutorials.create);

  // Retrieve ALL tutorials
  router.get("/", tutorials.findAll);

  // Retruieve all PUBLISHED tutorials
  router.get("/", tutorials.findAllPublished)

  // Retrieve SINGLE tutorial w/ID
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial w/ID
  router.put("/:id",tutorials.update);

  // Delete a Tutorial w/ID
  router.delete("/:id",tutorials.delete);

  // Delete all Tutorials/ Create a new Tutorial (?)
  router.put("/:id",tutorials.deleteAll);

  app.use('/api/tutorials', router);

};

// Define HTTP Routes!!!
// src: https://bezkoder.com/node-express-sequelize-postgresql/
// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE),
// we need to determine how the server will reponse by setting up the routes.
//
// These are our routes:
// /api/tutorials: GET, POST, DELETE
// /api/tutorials/:id: GET, PUT, DELETE
// /api/tutorials/published: GET
