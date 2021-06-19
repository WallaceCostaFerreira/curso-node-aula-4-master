const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'cursonode', 
    'root', 
    '', 
    {
        dialect: 'mysql', 
        host: 'localhost'
    }
);

try {
   sequelize.authenticate();
    console.log('Conectado');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = sequelize;