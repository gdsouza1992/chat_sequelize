"use strict";
module.exports = function(sequelize, DataTypes) {
    const GroupMember = sequelize.define('GroupMember',{
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });


    GroupMember.associate = function(models) {
        //Get group id as FK into group Member
        GroupMember.belongsTo(models.Group,{
            onDelete: "CASCADE",
            foreignKey:{
                allowNull: false
            }
        }); 
        //Get user id as FK into group Member
        GroupMember.belongsTo(models.User,{
            onDelete:"CASCADE",
            foreignKey: {
                allowNull: false
            }
        }); 
    }
    return GroupMember;
};