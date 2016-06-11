var mongoose = require("mongoose");
var Saved = require("../data/SavedArt");
var _ = require("underscore");

var router = require("express").Router();
router.route("/saved/:id?").get(getSaved).post(addSaved).delete(deleteSaved);

function getSaved(req, res) {
    Saved.find(function (err, schools) {
        if (err)
            res.send(err);
        else
            res.json(schools);
    });
}

function addSaved(req, res) {
    var Saved = new Saved(_.extend({}, req.body));
    Saved.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(Saved);
    });
}

function deleteSaved(req, res) {
    var id = req.params.id;
    Saved.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;