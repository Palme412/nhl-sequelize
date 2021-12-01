'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Western_Conference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Western_Conference.init({
    team: DataTypes.STRING,
    division: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    loss: DataTypes.INTEGER,
    GF: DataTypes.INTEGER,
    GA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Western_Conference',
  });
  return Western_Conference;
};