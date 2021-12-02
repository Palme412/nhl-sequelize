'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Red_Wings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Red_Wings.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    shot: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Red_Wings',
  });
  return Red_Wings;
};