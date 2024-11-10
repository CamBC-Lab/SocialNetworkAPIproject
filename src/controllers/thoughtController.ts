import {Thought, User} from '../models/index.js';
import { Request, Response } from 'express';


//Get all thoughts
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find().sort({ createdAt: -1 });
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};


//Get single thought
export const getSingleThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }

        res.json(thought);
      
    }catch (err) {
        res.status(500).json(err);
        return err;
    }
    return;
};



//Create thought
export const createThought = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({username: req.body.username});

        if (!user) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        const thought = await Thought.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username,
        });
        
        if(!thought){
            return res.status(404).json({message: "Thought created but no user with this id!"})
        }

        await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
        );

        res.json(thought);
    }catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
    return;
}


//Update thought
export const updateThought = async (req: Request, res: Response) => {
    try{
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if(!thought){
            return res.status(404).json({message : "No thought with this id!"})
        }
        res.json(thought);
        return;
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
        return;
    }
}


//Delete thought
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }

        const user = await User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull: { thoughts : req.params.thoughtId}},
            {new: true}
        )

        if(!user){
            return res
            .status(404)
            .json({message: 'Thought deleted but no user found with this id!'});
        }
      
        res.json({message: 'Thought deleted!'});
    } catch (err) {
        res.status(500).json(err);
    }

    return;
};


//Add reaction
export const addReaction = async (req: Request, res: Response) => {
    try {
        // Changed the query to match thoughtId correctly
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }

        res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    return;
};

//Delete reaction

export const deleteReaction = async (req: Request, res: Response) => {
    try {
        console.log(`Deleting reaction with ID: ${req.params.reactionId} from thought ID: ${req.params.thoughtId}`);
        
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            console.log('No thought found with this id!');
            return res.status(404).json({ message: 'No thought found with this id!' });
        }

        console.log('Reaction deleted successfully');
        res.json(thought);
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json(err);
    }
    return;
};
