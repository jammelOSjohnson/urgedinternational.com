const mongoose = require('mongoose');
const { model, Schema } = require('mongoose');

const MailboxSchema = new Schema({
    Status: {
        type: String,
        required: true
    },
    Uid: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        required: false
    },
    MailboxNum: {
        type: String,
        required: true
    },
});

const Mailbox = model('mailbox', MailboxSchema);
export default Mailbox;