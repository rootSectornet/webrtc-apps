'use strict';
const fs = require('fs');
const route = require('express').Router();
const path = require('path');
const basename = path.basename(__filename);
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const nameFile = file.split('.').slice(0, -1).join('.');
    route.use('/' + nameFile, require('./' + nameFile));
  });
  
module.exports = route
  