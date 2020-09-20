'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    
    static associate(models) {
      Players.hasMany(models.Scores, {
        foreignKey: "playerId"
      })
    }
  };

  Players.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Players',
  });
  
  return Players;
};