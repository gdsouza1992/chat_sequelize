"use strict";

module.exports = function(sequelize, DataTypes) {
  var C = sequelize.define("C", {
    username: DataTypes.STRING
  });

  C.associate = function(models) {
    C.belongsTo(models.B);
  }
  
  return C;
};
