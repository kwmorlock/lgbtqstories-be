const db = require("../../database/dbConfig");

module.exports = {
  find,
  findByAdmin,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("adminNote")
    .join("stories", "adminNote.storyId", "stories.id")
    .join("admins", "adminNote.adminsId", "admins.id")
    .select(
      "adminNote.id",
      "stories.title",
      "stories.story",
      "stories.tags",
      "adminNote.note",
      "adminNote.adminsId",
      "admins.username"
    );
}

function update(updates, id) {
  return db("adminNote").where({ id }).update(updates);
}

function findById(id) {
  return db("adminNote")
    .join("stories", "adminNote.storyId", "stories.id")
    .join("admins", "adminNote.adminsId", "admins.id")
    .select(
      "adminNote.id",
      "stories.title",
      "stories.story",
      "stories.tags",
      "adminNote.note",
      "adminNote.adminsId",
      "admins.username"
    )
    .where("adminNote.id", id)
    .first();
}

function add(adminNotes) {
  return db("adminNote")
    .insert(adminNotes, "id")
    .then((ids) => {
      return findById(ids);
    });
}

function remove(id) {
  return db("adminNote").where({ id }).del();
}

function findByAdmin(id) {
  return db("adminNote")
    .join("stories", "adminNote.storyId", "stories.id")
    .join("admins", "adminNote.adminsId", "admins.id")
    .select(
      "admins.id",
      "adminNote.id",
      "stories.title",
      "stories.story",
      "stories.tags",
      "adminNote.note",
      "adminNote.adminsId",
      "admins.username"
    )
    .where("adminNote.adminsId", id);
}
