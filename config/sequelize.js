module.exports.sequelize = {
  database: 'sailjs-hw',
  username: 'sailjs-hw',
  password: 'XXXXX',

  options: {
    host: 'localhost',
    dialet: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
