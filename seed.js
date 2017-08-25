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
    address: '110 W 40th St, New York, NY 10018, USA',
    radius: 1600,
    businessType: 'american restaurants',
    userId: 1,
  },
  {
    latitude: 40.7536,
    longitude: -73.9832,
    address: '318 E 11th St, New York, NY 10003, USA',
    radius: 1200,
    businessType: 'chinese restaurants',
    userId: 1
  },
  {
    latitude: 40.748037,
    longitude: -73.994637,
    address: '110 W 40th St, New York, NY 10018, USA',
    radius: 1600,
    businessType: 'american restaurants',
    userId: 2,
  },
  {
    latitude: 40.75883,
    longitude: -73.981247,
    address: '1219-1227 6th Ave, New York, NY 10020, USA',
    radius: 1200,
    businessType: 'chinese restaurants',
    userId: 2
  },
  {
    latitude: 40.782231,
    longitude: -73.951893,
    address: '1622 3rd Ave, New York, NY 10128, USA',
    radius: 1600,
    businessType: 'american restaurants',
    userId: 3
  },
  {
    latitude: 40.749208,
    longitude: -73.950005,
    address: '10-20 10th St, Long Island City, NY 11101, USA',
    radius: 1800,
    businessType: 'chinese restaurants',
    userId: 3
  },
  {
    latitude: 40.73386,
    longitude: -73.983307,
    address: '300-308 E 17th St, New York, NY 10003, USA',
    radius: 1000,
    businessType: 'american restaurants',
    userId: 4
  },
  {
    latitude: 40.762081,
    longitude: -73.998241,
    address: '601 W 43rd St, New York, NY 10036, USA',
    radius: 1600,
    businessType: 'chinese restaurants',
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
    userId: 1,
    createdAt: '2017-08-22 12:20:53.957-04'
  },
  {
    latitude: 40.75766,
    longitude:  -73.990517,
    score: 6,
    scoreAuthors: [1, 4, 5],
    idea: 'Lemongrass Boutique',
    description: 'A shop where everything is made out of lemongrass and is edible!!!',
    userId: 2,
    createdAt: '2017-08-21 12:20:53.957-04'
  },
  {
    latitude: 40.737112,
    longitude: -73.995667,
    score: 127,
    scoreAuthors: [3, 2],
    idea: 'Vending Machine Art Gallery',
    description: 'No modern art in this community. Would love to see something cool and unique',
    userId: 3,
    createdAt: '2017-08-23 12:20:53.957-04'
  },
  {
    latitude: 40.706929,
    longitude: -74.011288,
    score: 45,
    scoreAuthors: [4],
    idea: 'Yard Sale Supplies',
    description: 'I love having yard sales, but dont have a place to go get my labels, sticker, signs, bags, etc. Would love to have something like this near me',
    userId: 4,
    createdAt: '2017-08-24 12:20:53.957-04'
  },
  {
    latitude: 40.7286572,
    longitude: -73.980216,
    score: 12,
    scoreAuthors: [],
    idea: 'Some Place That Will Not Look At Me With Disgust',
    description: "I'm so tired of walking into an establishment and being met with dirty looks. I don't care what business it is, I just want to be treated with respect",
    userId: 4,
    createdAt: '2017-08-20 12:20:53.957-04'
  },
  {
    latitude: 40.74998795,
    longitude: -73.987770,
    score: 87,
    scoreAuthors: [],
    idea: 'A Licorice Liquor Store',
    description: 'Have you ever wondered why there are so many licorice flavored spirits from all over the world? Absinthe, Sambuca, Jaegermeister, etc... I have too! Would love to try them all right at home',
    userId: 2,
    createdAt: '2017-08-19 12:20:53.957-04'
  },
  {
    latitude: 40.76247107,
    longitude: -73.97386550,
    score: 17,
    scoreAuthors: [],
    idea: 'Hardware Store',
    description: "I need a one stop shop for all of my tooling and hardware needs. Home Depot is too far away. Can't beat the location",
    userId: 2,
    createdAt: '2017-08-17 12:20:53.957-04'
  },
  {
    latitude: 40.76247107,
    longitude: -73.978844,
    score: 442,
    scoreAuthors: [],
    idea: 'DIY Beekeeping Essentials',
    description: "I've started beekeeping and every time the online stores ship the bees, the package arrives half empty.",
    userId: 2,
    createdAt: '2017-08-25 12:20:53.957-04'
  },
  {
    latitude: 40.750825,
    longitude: -73.971291,
    score: 104,
    scoreAuthors: [],
    idea: 'Mugshot Photo Hut',
    description: "This place would be a neighborhood favorite in no time. It's such a simple and brilliant idea. Everyone loves ironic mugshots of themselves",
    userId: 2,
    createdAt: '2017-08-15 12:20:53.957-04'
  },
  {
    latitude: 40.750305,
    longitude: -73.978844,
    score: 80,
    scoreAuthors: [],
    idea: 'Pre-k',
    description: "I really want a pre-school near my house. We're expecting a boy and there aren't any in the area.",
    userId: 3,
    createdAt: '2017-08-18, 12:20:53.957-04'
  },
  {
  latitude:40.63089063912002,
  longitude: -74.024977684021,
  score: 50,
  scoreAuthors: [],
  idea: 'Donut Shop',
  description: 'A donut shop that actually serves donuts made there',
  userId: 1,
  createdAt: '2017-08-17 12:20:53.957-04'
},
{
  latitude: 40.6355804575753,
  longitude: -74.02665138244629,
  score: 17,
  scoreAuthors: [],
  idea: 'Tea Shop',
  description: 'I would love a tea shop where I can get some exotic teas from around the world.' ,
  userId: 1,
  createdAt: '2017-08-14 12:20:53.957-04'
},
{
  latitude: 40.62747077216544,
  longitude: -74.02300357818604,
  score: 21,
  scoreAuthors: [],
  idea: 'Ramen Shop',
  description: `I'm tired of the cooking my own sad ramen. I want some real ramen around here.` ,
  userId: 1,
  createdAt: '2017-08-20 12:20:53.957-04'
},
{
  latitude: 40.62323640852715,
  longitude: -74.03098583221436,
  score: 4,
  scoreAuthors: [],
  idea: 'Thai Restaurant',
  description: `I love thai food but there isn't any around. I just want some decent thai food at a decent price.` ,
  userId: 1,
  createdAt: '2017-08-20 12:20:53.957-04'
}
];

const comment = [
  {
    comment: "I'm always down for more reasons to drink!",
    threadId: 1,
    createdAt: '2017-08-22 12:20:53.957-04'
  },{
    comment: 'As long as it is closed on Sundays, I would be delighted to come by for a drink',
    threadId: 1,
    createdAt: '2017-08-23 12:20:53.957-04'
  },{
    comment: 'Shine your own damn shoes. How about a hair salon instead?',
    threadId: 1,
    createdAt: '2017-08-24 12:20:53.957-04'
  },{
    comment: 'I like this. I can go there to play AND eat - my two favorites!',
    threadId: 2,
    createdAt: '2017-08-22 12:20:53.957-04'
  },{
    comment: 'We already have too many bubble tea and FROYO places. This would just be more of the same',
    threadId: 2,
    createdAt: '2017-08-25 12:20:53.957-04'
  },{
    comment: 'Hmmm, maybe you can also have vending machines for sale? I would consider buying one if it was art.',
    threadId: 3,
    createdAt: '2017-08-23 12:20:53.957-04'
  },{
    comment: "As a connoisseur of fine art since the early 80's, I would be tormented having to walk by such distaste every day",
    threadId: 3,
    createdAt: '2017-08-24 12:20:53.957-04'
  },{
    comment: 'OMG YASSSSSS!!!!!1111!!11!!!',
    threadId: 3,
    createdAt: '2017-08-25 12:20:53.957-04'
  },{
    comment: 'This is a terrible idea. Just go to a 99 cents store, gosh!',
    threadId: 4,
    createdAt: '2017-08-24 12:20:53.957-04'
  },{
    comment: ':c',
    threadId: 5,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: ':/',
    threadId: 5,
    createdAt: '2017-08-22 12:20:53.957-04'
  },{
    comment: ':((((',
    threadId: 5,
    createdAt: '2017-08-23 12:20:53.957-04'
  },{
    comment: 'D:',
    threadId: 5,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: 'I hate licorice. EWWWWWW',
    threadId: 6,
    createdAt: '2017-08-21 12:20:53.957-04'
  },{
    comment: "You forgot absinthe!",
    threadId: 6,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: "Absinthe is the first on the list, idiot...",
    threadId: 6,
    createdAt: '2017-08-21 12:20:53.957-04'
  },{
    comment: "Heck Yes. I know where I'd be spending my Christmas bonus",
    threadId: 7,
    createdAt: '2017-08-17 12:20:53.957-04'
  },{
    comment: "Call John for all your household needs (555)-344-2332",
    threadId: 7,
    createdAt: '2017-08-18 12:20:53.957-04'
  },{
    comment: "Much better than another Chipotle. Mom & Pop shops rule!",
    threadId: 7,
    createdAt: '2017-08-18 12:20:53.957-04'
  },{
    comment: 'maybe it can also have a take a bee/leave a bee area? I can donate a bee or two',
    threadId: 8,
    createdAt: '2017-08-25 12:20:53.957-04'
  },{
    comment: 'Is this even legal?',
    threadId: 8,
    createdAt: '2017-08-25 12:20:53.957-04'
  },{
    comment: "This would make 0 money. I'd give it two months til bankrupcy.",
    threadId: 9,
    createdAt: '2017-08-17 12:20:53.957-04'
  },{
    comment: "Yeah, this is a pretty bad idea",
    threadId: 9,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: "uhh.....sounds like it's a good time to move out of the neighborhood",
    threadId: 10,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: "A couple of them closed in the past few years - might not be a money-maker in this neighborhood",
    threadId: 10,
    createdAt: '2017-08-23 12:20:53.957-04'
  },{
    comment: "I'm pretty sure we already have like 4",
    threadId: 10,
    createdAt: '2017-08-23 12:20:53.957-04'
  },{
    comment: "OOOOhhhh donuutssss. Donuts <3333",
    threadId: 11,
    createdAt: '2017-08-18 12:20:53.957-04'
  },{
    comment: "True. No great donut shops in the neighborhood",
    threadId: 11,
    createdAt: '2017-08-20 12:20:53.957-04'
  },{
    comment: "It would be great if I could buy loose-leaf tea there in addition to buying a cup of tea",
    threadId: 12,
    createdAt: '2017-08-15 12:20:53.957-04'
  },{
    comment: "Eh, I just drink Lipton. Why waste extra moneh",
    threadId: 12,
    createdAt: '2017-08-17 12:20:53.957-04'
  },{
    comment: "I need more noodles in my life",
    threadId: 13,
    createdAt: '2017-08-21 12:20:53.957-04'
  },{
    comment: "A few of these here already, but none deliver. So please make it available on Seamless",
    threadId: 13,
    createdAt: '2017-08-24 12:20:53.957-04'
  },{
    comment: "Great Idea. We have Chinese and Sushi, but no Thai!",
    threadId: 14,
    createdAt: '2017-08-21 12:20:53.957-04'
  },{
    comment: "Eh, I just drink Lipton. Why waste extra money",
    threadId: 14,
    createdAt: '2017-08-23 12:20:53.957-04'
  }
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
