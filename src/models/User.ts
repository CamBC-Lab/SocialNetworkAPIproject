import {Schema, model, Document, ObjectId} from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts: ObjectId[];
    friends: ObjectId[];
}


const friendCount = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
      

    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);


friendCount
    .virtual('friendCount')

    .get(function() {
        return this.friends.length;
    })

const User = model('User', friendCount);

export default User;



