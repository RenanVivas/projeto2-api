var ObjectID = require('mongodb').ObjectID;

exports.listar = function (req, res) {
    req.db.collection('postagem').find().toArray(function(err, result) {
        if (err) {
            return res.sendStatus(503);
        };
        res.send(result);
    });
};

exports.criar = function (req, res) {
    req.db.collection('postagem').save(req.body, function(err, result) {
        if (err) {
            return res.sendStatus(503);
        }
        res.sendStatus(201);

    });
};
