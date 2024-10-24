const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET for users");
});

router.get("/:id", (req, res) => {
    res.send("GET for users");
});

router.post("/:id", (req, res) => {
    res.send("GET for users");
});

router.delete("/:id", (req, res) => {
    res.send("Delete for users");
});

module.exports = router;