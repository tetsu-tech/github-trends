const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400

app.get('/api/v1/', (req, res) => {
	try {
		const trends = githubTrends({ section: 'developers', since: 'weekly' }).then(
			result => { 
				console.log(result)
				res.json(result)
			}
		).catch(
			error => { console.log(error) }
		)
	} catch (err) {
		console.log(err.message);
	}

})

app.listen(port);
console.log('listen on port ' + port);
