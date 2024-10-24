const express = require("express");
const router = express.Router();

// =========== Posts =============


router.get("", (req, res) => {
    res.send("GET for posts");
});

router.get("/:id", (req, res) => {
    res.send("GET for posts");
});

router.post("/:id", (req, res) => {
    res.send("GET for posts");
});

router.delete("/:id", (req, res) => {
    res.send("Delete for posts");
});

module.exports = router;