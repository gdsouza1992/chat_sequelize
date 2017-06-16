const models = require('../models');
// CreateTables
Message.sync({force: true}).then(() => {
    // Table Message created 
    console.log('Message table created');
});
Conversation.sync({force: true}).then(() => {
    // Table Conversation created 
    console.log('Conversation table created');
});
DirectMessage.sync({force: true}).then(() => {
    // Table DirectMessage created 
    console.log('DirectMessage table created');
});
Group.sync({force: true}).then(() => {
    // Table Group created 
    console.log('Group table created');
});
GroupMember.sync({force: true}).then(() => {
    // Table GroupMember created 
    console.log('GroupMember table created');
});
User.sync({force: true}).then(() => {
    // Table User created 
    console.log('User table created');
});

