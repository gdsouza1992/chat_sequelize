"use strict";

module.exports = function(sequelize, DataTypes) {
  var A = sequelize.define("A", {
    title: DataTypes.STRING
  });
  
  A.associate = function(models) {
    A.belongsTo(models.B);
  }
  
  return A;
};