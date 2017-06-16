"use strict";
module.exports = function(sequelize, DataTypes) {
    const Group = sequelize.define('Group',{
        Private : DataTypes.BOOLEAN,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    Group.associate = function(models) {
        // Get conversation id as FK into Group
        Group.belongsTo(models.Conversation,{
            foreignKey: {
                allowNull: false
            }
        });

        // Get conversation id as FK into Group
        Group.hasMany(models.GroupMember); 
    }
    return Group;
};

