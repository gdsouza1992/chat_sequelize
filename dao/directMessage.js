const models = require('../models');

module.exports = class DirectMessage {
    create(conversationId, senderId, receiverId){

        //Create 2 entries for a DM 
        //1 for each user with roles reversed
        return models.DirectMessage.bulkCreate([
                {
                    ConversationId: conversationId,
                    UserId: senderId,
                    ReceiverId: receiverId
                },{
                    ConversationId: conversationId,
                    UserId: receiverId,
                    ReceiverId: senderId,
                }
        ]);
    }
}
