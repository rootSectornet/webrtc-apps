'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meetings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      meetings.belongsTo(models.pegawais,{
        foreignKey:'id_pegawais'
      })
    }
  };
  meetings.init({
    nama_room: DataTypes.STRING,
    tanggal: DataTypes.STRING,
    status: DataTypes.INTEGER,
    id_pegawais: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'meetings',
  });
  return meetings;
};