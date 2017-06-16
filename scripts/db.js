var _ = require('lodash');

//Including dependency
var Sequelize = require('sequelize');

//Setting up the config
var sequelize = new Sequelize('orm_database_development', 'root', 'root', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

// var models = require('../models');
// models.sequelize.sync({force: true})
// .then(()=>{
//     models.User.create({ Username: 'gareth'});
//     models.User.create({ Username: 'van'});
//     models.User.create({ Username: 'raj'});
//     models.User.create({ Username: 'amar'});

//     models.Conversation.create({ id: 1});
//     models.Conversation.create({ id: 2});
//     models.Conversation.create({ id: 3});

//     models.DirectMessage.create({ConversationId: 1, UserId: 1, ReceiverId: 2});
//     models.DirectMessage.create({ConversationId: 1, UserId: 2, ReceiverId: 1});
//     models.DirectMessage.create({ConversationId: 3, UserId: 1, ReceiverId: 3});
//     models.DirectMessage.create({ConversationId: 3, UserId: 3, ReceiverId: 1});

//     models.Group.create({Private: 1, ConversationId: 2});

//     models.GroupMember.create({GroupId: 1, UserId: 1});
//     models.GroupMember.create({GroupId: 1, UserId: 2});
//     models.GroupMember.create({GroupId: 1, UserId: 4});

// });


var User = require('../dao/user');
// var Conversation = require('../dao/conversation');
var user = new User();
user.getDMs(4).then((result) => {
    console.log(result);
});
user.getGroups(1).then((result) => {
    console.log(result);
});

// user.getAll(1).then((result) => {
//     console.log(result);
// });
// models.sequelize.sync()
// var conversation = new Conversation();
// conversation.getUserConversations(1);



// var Group = require('../dao/group');
// var group = new Group();
// // groupMember.getAllMembers(1).then((result) => {
// //     console.log(result);
// // });
// // group.getConversation(1).then((result) => {
// //     console.log(result.Conversation);
// // });
// group.getMessages(1).then((result) => {
//     console.log(result);
// });


