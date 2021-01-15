const db = require("../../database/dbConfig");

module.exports = {
  add,
  findUser,
  findBy,
  findById,
  destroy,
};

function findUser() {
  return db("users").select("id", "username", "password", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function destroy(id) {
  return db("users").where( "id", id ).del();
}
