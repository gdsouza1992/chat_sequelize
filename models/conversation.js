"use strict";
module.exports = function(sequelize, DataTypes) {
    var Conversation = sequelize.define("Conversation",{
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    Conversation.associate = function(models){
        Conversation.hasMany(models.Message);
        Conversation.hasMany(models.DirectMessage);
        Conversation.hasMany(models.Group);
    }
    return Conversation;
};
