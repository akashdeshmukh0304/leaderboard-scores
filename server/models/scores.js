'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scores extends Model {
    
    static associate(models) {
      Scores.belongsTo(models.Players, {
        foreignKey: "playerId",
        onDelete: "CASCADE"
      })
    }
  };
  Scores.init({
    rank: DataTypes.INTEGER,
    kills: DataTypes.INTEGER,
    scores: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    time: DataTypes.DATE,
    match_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Scores',
  });
  return Scores;
};