"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Username: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    },{
        getterMethods: {
            getUsername(){
                return this.username;
            }
        },
        setterMethods: {
            setUsername(_username){
                this.setDataValue('username',_username);
            }
        }
  });

  User.associate = function(models) {
    User.hasMany(models.DirectMessage);
    User.hasMany(models.Message);
    User.hasMany(models.GroupMember);
  }
  
  return User;
};
