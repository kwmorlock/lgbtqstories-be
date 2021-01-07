const router = require("express").Router();

const Note = require("./notesModel");

router.get("/", (req, res) => {
  Note.find()
    .then((notes) => {
      res.status(200).json(notes);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Note.findById(id)
    .then((notes) => {
      if (notes) {
        res.status(200).json(notes);
      } else {
        res.status(404).json({ message: "Could not find id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;

  Note.findById(id)
    .then((notes) => {
      if (notes) {
        Note.update(update, id).then((updated) => {
          res.status(201).json(updated);
        });
      } else {
        res.status(404).json({ message: "Unable to find id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/", (req, res) => {
  const noteInfo = req.body;

  Note.add(noteInfo)
    .then((notes) => {
      res.status(201).json({ notes });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Note.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find that id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/admin/:id", (req, res) => {
  const id = req.params.id;

  Note.findByAdmin(id)
    .then((notes) => {
      if (notes) {
        res.status(200).json(notes);
      } else {
        res.status(404).json({ message: "Unable to find id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
