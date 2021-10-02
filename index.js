const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400

app.get('/api/v1/', (req, res) => {

	const get_trends = async () => {
		try {
			const response = await githubTrends({ section: 'developers', since: 'weekly' })

			// console.log(typeof trends)

			const trends = (Object.entries(response).map((trend) => {
				return trend[1]
			}));

			console.log(trends)

			res.json(trends);
		} catch (error) {
			res.send(error.message)
		}
	}

	get_trends();

})

app.listen(port);
console.log('listen on port ' + port);
