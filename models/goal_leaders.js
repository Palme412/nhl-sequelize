'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal_Leaders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Goal_Leaders.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    plus_minus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Goal_Leaders',
  });
  return Goal_Leaders;
};