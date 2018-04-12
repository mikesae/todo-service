module.exports = function(app) {
    const todoList = require('../controllers/list-controller');
    app.route('/tasks')
        .get(todoList.list)
        .post(todoList.create);

    app.route('/tasks/:taskId')
        .get(todoList.get)
        .put(todoList.update)
        .delete(todoList.remove);
};