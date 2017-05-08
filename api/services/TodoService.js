const sequelize = require('./Sequelize');
const Todo = require('../entity/Todo');

/*export default class TodoService {
    constructor() {
    }

    read(id) {
        return Todo.findOne().then(function (user) {
            console.log(user.get('value'));
        });
    }
}*/

var TodoService = function() {

}

TodoService.prototype.read = function(id) {
    return Todo.findOne().then(function (user) {
        console.log(user.get('value'));
    });
}

module.exports = TodoService;
