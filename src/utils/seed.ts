
import connection from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import { getRandomThought, getRandomUsername, getRandomEmail } from './data.js';

connection.on('error', (err)=> err);


connection.once('open', async () => {
    console.log('Connected to the database');
    //delete the collecitons if they exist
    let thoughtCheck = await connection.db?.listCollections({name: 'thoughts'}).toArray();
    if(thoughtCheck?.length){
        await connection.db?.dropCollection('thoughts');
    }

    let userCheck = await connection.db?.listCollections({name: 'users'}).toArray();
    if(userCheck?.length){
        await connection.db?.dropCollection('users');
    }

    const users = [];
    const thoughts = getRandomThought(10);
    

    for(let i = 0; i < 10; i++){
        const username = getRandomUsername();
        const email = getRandomEmail();
        
        users.push({
            username,
            email
        });
    }

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Data seeded successfully!');
    process.exit(0);
});