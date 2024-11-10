import {Schema, model} from 'mongoose';
import reactionSchema from './Reaction.js';

interface IThought{
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: any[];
}

const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON:{
            virtuals: true,
            getters: true,
        },
        id: false, 
   
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

export default Thought;