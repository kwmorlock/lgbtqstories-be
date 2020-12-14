
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("email")
    })
  
};

exports.down = function(knex) {
  
};
