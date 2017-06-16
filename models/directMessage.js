"use strict";
module.exports = function(sequelize, DataTypes) {
    const DirectMessage = sequelize.define('DirectMessage',{
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });
    DirectMessage.associate = function(models) {
        // Get conversation ID as FK into DM
        DirectMessage.belongsTo(models.Conversation, {
            foreignKey: {
                allowNull: false
            }
        }); 
        // Get user ID as FK (sender) into DM
        DirectMessage.belongsTo(models.User); 
        // Get user ID as FK (receiver) into DM
        DirectMessage.belongsTo(models.User,{
            as: 'Receiver',
            foreignKey:{
                allowNull: false
            }
        }); 
    }
    return DirectMessage;
};