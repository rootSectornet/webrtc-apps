const bcrypt = require("bcrypt");
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pegawais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pegawais.hasOne(models.meetings,{
        foreignKey:'id_pegawais'
      })
      pegawais.hasMany(models.userakses,{
        foreignKey:'id_pegawais'
      })
    }
  };
  pegawais.init({
    nik:{
      type: DataTypes.STRING,
      unique: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    telp: DataTypes.BIGINT,
    level: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue("password", bcrypt.hashSync(value, 10));
      },
    },
  }, {
    sequelize,
    modelName: 'pegawais',
  });
  return pegawais;
};