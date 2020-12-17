const knex = require("knex");

const knexconfig = require("../knexfile.js");
// const environment = process.env.NODE_ENV || "development";

// module.exports = knex(knexconfig[environment]);
module.exports = knex(knexconfig[development]);

// ('development') this will break postman