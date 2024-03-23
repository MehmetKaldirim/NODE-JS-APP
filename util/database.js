const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Pp11223344-', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
