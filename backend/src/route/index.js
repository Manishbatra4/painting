const express = require("express");
const router = express.Router();
const Painting = require("../Modal/index")

router.get("/", (req, res) => {
    res.send("Api Is Working Fine")
})

router.get("/paintings", (req, res) => {
    Painting.find({}).then(painting => {
        res.send(painting)
    });
})

router.post("/painting", (req, res) => {
    Painting.create(req.body).then((painting) => {
        res.send(painting)
    })
})

router.put("/painting/:id", (req, res) => {
    Painting.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Painting.findOne({_id: req.params.id}).then(painting => {
            res.send(painting)
        })
    });
})


router.delete("/painting/:id", (req, res) => {
    Painting.findByIdAndRemove({_id: req.params.id}).then((painting) => {
        res.send(painting)
    });
})


module.exports = router;