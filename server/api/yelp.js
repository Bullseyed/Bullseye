const router = require('express').Router();

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_TOKEN);


router.post('/restaurants', (req, res, next) => {
	console.log(req.route.path);

	const fullQuery = Object.assign(req.body, {
		location: 'new york',
		sort_by: 'distance',
		limit: 50,
	})
	client.search(fullQuery)
		.then(rests => res.send(rests.jsonBody.businesses))
		.catch(next)
});

module.exports = router
