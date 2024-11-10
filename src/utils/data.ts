const usernames = [
    'Alice21',
    'DinosaurLover12',
    'BobTheBuilder',
    'CharlieLordofCats',
    'CarlDangerous43',
    'CoolGuy123',
    'EpicGamer99',
    'FunkyMonkey',
    'GamerGirl',
    'HorseLover',
    '1amBatman',
]

const emails = [
    'johnStien@Gollria.com',
    'MadisonSqaure@Bob.com',
    'Bruvinator@Bob.com',
    'DinosaursRule@Jurassic.com',
    'CatMan@Bob.com',
    'Wonderly@Gollria.com',
    'NewEmal@Gollria.com',
    'GobackToMonkey@Jurassi,com',
    'NeighhhHhh@Bob.com',
    'GamingDanger@Gollria.com',
    'SuperSpeed@Jurassic.com'
]

const thoughts = [
    'Do yall think dinosaurs would be good pets?',
    'I love cats so much! Who else loves cats?',
    'Gamers unite! What games are you playing?',
    'I am a horse! Neigh!',
    'I am Batman. No you cant have my autograph.',
    'I am the coolest person ever. Fight me.',
    'I am the danger. I am the one who knocks. Sign up for my course on how to be dangerous.',
    'I am the Funky Monkey!',
    'Hey guys! I am new here. What do you all like to do?',
]

const reactions = [
    'Greatest Comment Ever!',
    'I agree!',
    'No way!',
    'I am dying!',
    'This is hilarious!',
    'I am crying!',
    'Cool guy here this does happen sometimes',
    'I am Batman!',
    'I am the coolest person ever. Fight me.',
    'I am the danger. I am the one who knocks. Sign up for my course on how to be dangerous.',
    'This is funky!',
    'This is a great thought!',
    'My horse agrees!',
    'Horse noises!',
    'Dinosaur noises!',
    'My cat says nah!',
    'Mittens the destroyer agrees!',
]


const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];



const getRandomUsername = () =>
    `${getRandomElement(usernames)}`;

const getRandomEmail = () =>
    `${getRandomElement(emails)}`;

const getRandomThought = (int:number) => {
    let thought = [];
    for (let i = 0; i < int; i++) {
        thought.push({
            username: getRandomUsername(),
            thoughtText: getRandomElement(thoughts),
            createdAt: new Date(),
            reactions: [...getThoughtReactions(2)],
        });
    }
    return thought;
}

const getThoughtReactions = (int:number) => {
    let reaction = [];
    for (let i = 0; i < int; i++) {
        reaction.push({
            reactionBody: getRandomElement(reactions),
            username: getRandomUsername(),
            createdAt: new Date(),
        });
    }
    return reaction;
}

export { getRandomUsername, getRandomThought, getThoughtReactions, getRandomEmail };
   