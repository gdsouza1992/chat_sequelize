"use strict";

module.exports = function(sequelize, DataTypes) {
  var D = sequelize.define("D", {
    username: DataTypes.STRING
  });

  D.associate = function(models) {
    D.belongsTo(models.B);
  }
  
  return D;
};
