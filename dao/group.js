const models = require('../models');

module.exports = class Group {
    create(conversationId){
        return models.create({
            ConversationId: conversationId
        });
    }

    delete(groupId){
        return models.destroy({
            where {
                id: groupId
            }
        });
    }

    getAllMembers(groupId){
        return models.GroupMember.findAll({
            where: {
                groupId : groupId
            }
        });
    }

    addMemberToGroup(groupId, userId){
        return models.GroupMember.create({
            GroupId: groupId,
            UserId: userId
        });
    }

    removeMemberFromGroup(groupId, userId){
        return models.GroupMember.destroy({
            where: {
                GroupId: groupId,
                UserId: userId
            }
        });
    }

    
}
