/*var Sequelize = require("sequelize");
var sequelize = require("../services/Sequelize");

var Todo = sequelize.define('todo', {
    value: Sequelize.STRING
}, {
    freezeTableName: true
});

module.exports = Todo
*/

"use strict";

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    value: DataTypes.STRING
  },{
    //freezeTableName: true
    underscoredAll: true
  });

  return Todo;
};
