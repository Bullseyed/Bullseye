
const router = require('express').Router();

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_TOKEN);

router.get('/', (req, res, next)=>{
	res.sendStatus(400)
})

router.post('/restaurants', (req, res, next) => {
	console.log("************** route hit")
	const fullQuery = Object.assign(req.body, {
		term: 'restaurants',
		location: 'new york',
		limit: 50,
	})
	client.search(fullQuery)
		.then(rests => res.send(rests.jsonBody.businesses))
		.catch((e) => console.log(e))
});

// console.log(router)
module.exports = router