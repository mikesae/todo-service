const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list = (request, response) => {
    Task.find({}, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
};

exports.create = (request, response) => {
    const newTask = new Task(request.body);
    newTask.save((error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
};

exports.get = (request, response) => {
    Task.findById(request.params.taskId, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
};

exports.update = (request, response) => {
    Task.findOneAndUpdate({_id: request.params.taskId}, request.body, {new: true}, (error, task) => {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
};

exports.remove = (request, response) => {
    Task.remove({
        _id: request.params.taskId
    }, function (error) {
        if (error) {
            response.send(error);
        }
        response.json({message: 'Task successfully deleted'});
    });
};