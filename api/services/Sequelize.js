var Sequelize = require('sequelize');

var sequelize = new Sequelize('sailjs-hw', 'sailjs-hw', 'xxxxx', {
    host: 'localhost',
    dialet: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


module.exports = sequelize;
