
exports.up = function(knex) {
    return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 50).index().notNullable().unique();
      tbl.string("password", 20).notNullable();
      tbl.string("email")
    })
    .createTable("admins", (tbl) => {
        tbl.increments();
        tbl.string("username", 50).index().notNullable().unique();
        tbl.string("password", 20).notNullable();
        tbl.string("email")
      })
      .createTable("stories", (tbl) => {
        tbl.increments();
        tbl.string("title", 50).index().notNullable();
        tbl.string("story", 500).notNullable();
        tbl.string("tags", 50).index().notNullable();
        tbl
          .integer("usersId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable("adminNote", (tbl) => {
        tbl.increments();
        tbl.string("note", 255);
        tbl
          .integer("storyId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("stories")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
  
        tbl
          .integer("adminsId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("admins")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("adminNote")
    .dropTableIfExists("stories")
    .dropTableIfExists("admins")
    .dropTableIfExists("users")
};
