const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list = function (req, res) {
    Task.find({}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

exports.create = function (req, res) {
    const new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.get = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};


exports.update = function (req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
};

exports.remove = function (req, res) {
    Task.remove({
        _id: req.params.taskId
    }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Task successfully deleted'});
    });
};