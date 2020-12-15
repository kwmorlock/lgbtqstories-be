const db = require("../../database/dbConfig");

module.exports = {
  add,
  findAdmin,
  findBy,
  findById,
};

function findAdmin() {
  return db("admins").select("id", "username", "password", "email");
}

function findBy(filter) {
  return db("admins").where(filter);
}

async function add(user) {
  try {
    const [id] = await db("admins").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("admins").where({ id }).first();
}
