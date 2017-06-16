"use strict";
module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        Content: {
            type: DataTypes.TEXT('long')
        },
        createdAt: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('NOW()')
            },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
        }
    });

    Message.associate = function(models) {
        // Get Conversation ID as FK into message
        Message.belongsTo(models.Conversation, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }); 

        // Get User ID as FK into message
        Message.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        }); 
    }

  return Message;
};

