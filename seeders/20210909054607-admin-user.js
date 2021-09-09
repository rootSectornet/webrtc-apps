'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('pegawais', [
      { 
        nik : "P12345W",
        name : "Admin PT",
        email: 'admin@gmail.com',
        telp: 217873493783,
        level : 1,
        password: bcrypt.hashSync('admin', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
      
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pegawais', null, {});
  }
};