"use strict";

module.exports = function(sequelize, DataTypes) {
  var B = sequelize.define("B", {
    username: DataTypes.STRING
  });

  B.associate = function(models) {
    B.hasMany(models.A);
  }
  
  return B;
};
