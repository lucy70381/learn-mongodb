import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, '請輸入 email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, '請輸入密碼'],
      minlength: [6, '密碼長度不能小於 6 個字'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
  },
  { versionKey: false }
);

const User = mongoose.model('User', userSchema);

export default User;
