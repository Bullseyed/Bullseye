const db = require('./db');
const User = db.model('user');
const Report = db.model('report');
const Thread = db.model('thread');
const Comment = db.model('comment');
const Bluebird = require('bluebird');

const user = [
  {
    email: 'jockly@gmail.com',
    googleID: '117688350580502009923'
  },
  {
    email: 'peekskies@gmail.com',
    googleID: '102146699047380909208'
  },
  {
    email: 'hotstuff78@gmail.com',
    googleID: '117767978116297880934'
  },
  {
    email: 'RonPeters@gmail.com',
    googleID: 'jk5n23cn4789285c89219425c159'
  },
];

const report = [
  {
    latitude: 40.748037,
    longitude: -73.994637,
    address: '229 W 28th St, New York, NY 10001, USA',
    radius: 1600,
    businessType: 'american resturants',
    userId: 1
  },
  {
    latitude: 40.729698,
    longitude: -73.985538,
    address: '318 E 11th St, New York, NY 10003, USA',
    radius: 1200,
    businessType: 'chinese resturants',
    userId: 1
  },
  {
    latitude: 40.725925,
    longitude: -74.005623,
    address: '148-150 Varick St, New York, NY 10013, USA',
    radius: 1600,
    businessType: 'american resturants',
    userId: 2
  },
  {
    latitude: 40.75883,
    longitude: -73.981247,
    address: '1219-1227 6th Ave, New York, NY 10020, USA',
    radius: 1200,
    businessType: 'chinese resturants',
    userId: 2
  },
  {
    latitude: 40.782231,
    longitude: -73.951893,
    address: '1622 3rd Ave, New York, NY 10128, USA',
    radius: 1600,
    businessType: 'american resturants',
    userId: 3
  },
  {
    latitude: 40.749208,
    longitude: -73.950005,
    address: '10-20 10th St, Long Island City, NY 11101, USA',
    radius: 1800,
    businessType: 'chinese resturants',
    userId: 3
  },
  {
    latitude: 40.73386,
    longitude: -73.983307,
    address: '300-308 E 17th St, New York, NY 10003, USA',
    radius: 1000,
    businessType: 'american resturants',
    userId: 4
  },
  {
    latitude: 40.762081,
    longitude: -73.998241,
    address: '601 W 43rd St, New York, NY 10036, USA',
    radius: 1600,
    businessType: 'chinese resturants',
    userId: 4
  },

];

const thread = [
  {
    latitude: 40.762081,
    longitude: -73.998241,
    score: 17,
    scoreAuthors: [1, 2, 3],
    idea: 'Shoe Shine Tavern',
    description: 'A bar where you can get a drink while getting your loafers spitshined' ,
    userId: 1
  },
  {
    latitude: 40.75766,
    longitude:  -73.990517,
    score: 6,
    scoreAuthors: [1, 4, 5],
    idea: 'Lemongrass Boutique',
    description: 'A shop where everything is made out of lemongrass and is edible!!!',
    userId: 2
  },
  {
    latitude: 40.737112,
    longitude: -73.995667,
    score: 127,
    scoreAuthors: [3, 2],
    idea: 'Vending Machine Art Gallery',
    description: 'No modern art in this community. Would love to see something cool and unique',
    userId: 3
  },
  {
    latitude: 40.706929,
    longitude: -74.011288,
    score: 45,
    scoreAuthors: [4],
    idea: 'Yard Sale Supplies',
    description: 'I love having yard sales, but dont have a place to go get my labels, sticker, signs, bags, etc. Would love to have something like this near me',
    userId: 4
  },
];

const comment = [
  {
    comment: "I'm always down for more reasons to drink!",
    threadId: 1,
  },{
    comment: 'As long as it is closed on Sundays, I woud be delighted to come by for a drink',
    threadId: 1,
  },{
    comment: 'Shine your own damn shoes. How about a hair salon instead?',
    threadId: 1,
  },{
    comment: 'I like this. I can go there to play AND eat - my two favorites!',
    threadId: 2,
  },{
    comment: 'We already have too many bubble tea and FROYO places. This would just be more of the same',
    threadId: 2,
  },{
    comment: 'Hmmm, maybe you can also have vending machines for sale? I would consider buying one if it was art.',
    threadId: 3,
  },{
    comment: "As a connoisseur of fine art since the early 80's, I would be tormented having to walk by such distaste every day",
    threadId: 3,
  },{
    comment: 'OMG YASSSSSS!!!!!1111!!11!!!',
    threadId: 3,
  },{
    comment: 'This is a terrible idea. Just go to a 99 cents store, gosh!',
    threadId: 4,
  },
];

db
  .sync({ force: true })
  .then(() => {
    return Bluebird.map(user, user => {
      return User.create(user)
    })
  })
  .then(() => {
    return Bluebird.map(report, report => {
      return Report.create(report)
    })
  })
  .then(() => {
    return Bluebird.map(thread, thread => {
      return Thread.create(thread)
    })
  })
  .then(() => {
    return Bluebird.map(comment, comment => {
      return Comment.create(comment)
    })
  })
  .then(function() {
    console.log('Finished inserting data');
  })
  .catch(function(err) {
    console.error('There was totally a problem', err, err.stack);
  })
  .finally(function() {
    db.close();
    console.log('connection closed');
    return null;
  });
