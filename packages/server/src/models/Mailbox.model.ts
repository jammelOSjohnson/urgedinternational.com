import mongoose from "mongoose";

const MailboxSchema = new mongoose.Schema({
  Status: {
    type: String,
    required: true,
  },
  Uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  MailboxNum: {
    type: String,
    required: true,
  },
});

const Mailbox = mongoose.model("mailbox", MailboxSchema);
export default Mailbox;
