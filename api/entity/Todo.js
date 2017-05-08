var Sequelize = require("sequelize");
var sequelize = require("../services/Sequelize");

var Todo = sequelize.define('todo', {
    value: Sequelize.STRING
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Todo