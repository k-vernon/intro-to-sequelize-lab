'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trick.belongsTo(models.Bird, {
        foreignKey: 'birdId',
      })
    }
  }
  Trick.init({
    name: DataTypes.STRING,
    difficulty: {
      type: DataTypes.ENUM('Easy', 'Normal', 'Hard'),
      defaultValue: 'Normal'
    },
    birdId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Birds',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Trick',
  });
  return Trick;
};