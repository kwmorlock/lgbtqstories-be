const db = require("../../database/dbConfig");

module.exports = {
  find,
  findByUser,
  findById,
  add,
  update,
  destroy,
};

function find() {
  return db("stories")
    .join("users", "users.id", "stories.usersId")
    .select("stories.id", "stories.title", "stories.story", "stories.tags");
}

function findById(id) {
  return db("stories")
    .join("users", "users.id", "stories.usersId")
    .select("stories.id", "stories.title", "stories.story", "stories.tags")
    .where("stories.id", id)
    .first();
}

function add(stories) {
  return db("stories")
    .insert(stories, "id")
    .then((id) => {
      return findById(id);
    });
}

function update(updates, id) {
  return db("stories").where({ id }).update(updates);
}

function destroy(id) {
  return db("stories").where({ id }).del();
}

function findByUser(usersId) {
  return db("stories")
    .join("users", "users.id", "stories.usersId")
    .select(
      "users.id",
      "stories.title",
      "stories.story",
      "stories.tags",
      "users.username",
      "users.password",
      "users.email"
    )
    .where("stories.UsersId", usersId);
}
