

import { Document, model, Model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    email: {
      type: String,
    }
  }
);

const User = model('users', UserSchema);

export default User