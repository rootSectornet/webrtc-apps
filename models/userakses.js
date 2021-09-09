'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userakses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userakses.belongsTo(models.pegawais,{
        foreignKey:'id_pegawais'
      })
      userakses.belongsTo(models.meetings,{
        foreignKey:'id_room'
      })
    }
  };
  userakses.init({
    id_pegawais: DataTypes.INTEGER,
    id_room: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    waktu: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'userakses',
  });
  return userakses;
};