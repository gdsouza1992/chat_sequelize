const models = require('../models');
// const userModel = require('../models/user')(db.sequelize,db.Sequelize.DataTypes);

module.exports = class User {
    getDMs(userId){
        return models.DirectMessage.findAll({
            attributes: ['ConversationId'],
            where: {
                userId: userId
            }
        });
    }

    getGroups(userId){
        return models.Group.findAll({
            attributes: ['ConversationId'],
            include : [{
                model: models.GroupMember,
                where: {
                    userId: userId
                }
            }]
        });
    }
}