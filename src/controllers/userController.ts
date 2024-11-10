import {User, Thought } from '../models/index.js';

import { Request, Response } from 'express';

//Get all users
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find().populate('friends');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Get single user
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.userId }).populate('friends');

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json(err);
    }

    return;
};

//create user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

//update user
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!user){
            return res.status(404).json({message: 'No user with this id!'});
        }

        res.json(user);
        return
    } catch (err) { 
        console.log(err);
        res.status(500).json(err);
        return;
    }
}


//delete user
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
        }

        const thoughts = await Thought.deleteMany(
            { _id: { $in: user.thoughts } },
            { new: true }
        );

        if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts found with this user!' });
        }

        res.json({ message: 'User and thoughts deleted!' });

    } catch (err) {
        res.status(500).json(err);
       
    }

    return;
}


//add friend
export const addFriend = async (req: Request, res: Response) => {
    try {
        // Get both IDs from the URL parameters
        const { userId, friendId } = req.params;

        // First check if both users exist
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }

        if (!friend) {
            return res.status(404).json({ message: 'No friend found with this id!' });
        }


        // Add friend to user's friend list
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { friends: friendId } },
            { new: true }
        ).populate('friends');

        res.json(updatedUser);
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        return;
    }
}


//delete friend
export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const friend = await User.findOneAndDelete({ _id: req.params.friendId });

        if (!friend) {
            return res.status(404).json({ message: 'No friend with this id!' });
        }

        const user = await User.findOneAndUpdate(
            { friends: req.params.friendId },
            { $pull: { friends: req.params.friendId } },
            { runValidators:true, new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'Friend deleted but no user found with this id!' });
        }

        res.json({ message: 'Friend deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }

    return;
}

    