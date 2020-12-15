const router = require("express").Router();

const Admins = require("./adminsModel");
const restricted = require("../../auth/authMiddleware");
const { isValid } = require("./adminsService");

router.use(restricted);

router.get("/", (req, res) => {
  Admins.findAdmin()
    .then((users) => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Admins.findById(id)
    .then((admin) => {
      if (admin) {
        res.status(200).json(admin);
      } else {
        res.status(404).json({ message: "Could not find admin" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/", checkRoles(["admin"]), (req, res) => {
  const user = req.body;

  if (isValid(user)) {
    Admins.add(user)
      .then((saved) => {
        res.status(201).json({ data: saved });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "please provide all user information" });
  }
});

function checkRoles(roles) {
  return function (req, res, next) {
    const role = req.jwt.role;

    if (req.jwt && req.jwt.role && roles.includes(role)) {
      next();
    } else {
      res
        .status(403)
        .json({
          message: "Sorry no entry, use this time to better the world!",
        });
    }
  };
}

module.exports = router;
