const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400

app.get('/api/v1/', (req, res) => {

	const getTrends = async () => {
		try {
			const response = await githubTrends({ section: 'developers', since: 'weekly' })

			const trends = (Object.entries(response).map((trend) => {
				return trend[1]
			}));

			const repoUrls = trends.map((repoUrl) => {
				return repoUrl.repourl
			})

			console.log(trends)

			// res.json(trends[0]);
			res.json(repoUrls);
		} catch (error) {
			res.send(error.message)
		}
	}

	getTrends();

})

app.listen(port);
console.log('listen on port ' + port);
