const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authMiddleware");

const usersAuthRouter = require("../auth/authUsersRouter");
const storiesRouter = require("../stories/storiesrouter/storiesRouter");
const usersRouter = require("../users/users/usersRouter");


const adminsAuthRouter = require('../auth/authAdminsRouter');
const noteRouter = require('../stories/notesrouter/notesRouter');
const adminsRouter = require('../users/admins/adminsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users/users", authenticate, usersRouter);
server.use("/api/users/auth", usersAuthRouter);
server.use("/api/stories", authenticate, storiesRouter);

server.use('/api/users/admins', authenticate, adminsRouter);
server.use('/api/admins/auth', adminsAuthRouter);
server.use('/api/notes', authenticate, noteRouter)

server.get("/", (req, res) => {
  res.json({ api: "Ready To Tell Stories!!!" });
});

module.exports = server;
