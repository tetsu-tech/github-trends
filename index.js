const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400

app.get('/api/v1/', (req, res) => {
	const trends = githubTrends({ section: 'developers', since: 'weekly' }).then(
		result => { return result }
	).catch(
		error => { console.log(error) }
	)

	console.log(trends);

})

app.listen(port);
console.log('listen on port ' + port);
