'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Career_Goals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Career_Goals.init({
    name: DataTypes.STRING,
    gamesplayed: DataTypes.INTEGER,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Career_Goals',
  });
  return Career_Goals;
};