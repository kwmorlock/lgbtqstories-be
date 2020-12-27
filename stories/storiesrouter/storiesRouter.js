const router = require("express").Router();

const Stories = require("./storiesModel");

router.get("/", (req, res) => {
  Stories.find()
    .then((stories) => {
      res.status(200).json(stories);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Stories.findById(id)
    .then((story) => {
      if (story) {
        res.status(200).json(story);
      } else {
        res.status(404).json({ message: "Could not find that story" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;
  req.body.usersId = id;
  const storyStuff = req.body;

  Stories.add(storyStuff)
    .then((newStory) => {
      res.status(201).json({ newStory });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Stories.findById(id)
    .then((story) => {
      if (story) {
        Stories.update(updates, id).then((update) => {
          res.status(201).json(update);
        });
      } else {
        res.status(404).json({ message: "Unable to find story" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Stories.destroy(id)
    .then((bye) => {
      if (bye) {
        res.status(200).json({ removed: bye });
      } else {
        res.status(404).json({ message: "Could not find story" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;

  Stories.findByUser(id)
    .then((story) => {
      if (story) {
        res.status(200).json(story);
      } else {
        res
          .status(404)
          .json({ message: "Unable to find requests for that user." });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
