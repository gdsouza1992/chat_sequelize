const db = require('../models');
var Promise = require("bluebird");

module.exports = class Conversation {
    getAll(userId){
        return models.User.findAll({
            include: [ models.Task ]
        });
    }

    getMessages(conversationId){
        return models.Message.findAll({
            where: {
                ConversationId : conversationId
            }
        });
    }

    addMessage(conversationId,content,userId){
        return models.Message.create({
            ConversationId: conversationId,
            Content: content,
            UserId: userId
        });
    }
}
