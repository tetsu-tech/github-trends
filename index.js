const express = require('express');
const app = express();
const http = require('http');

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400


const getTrends = async () => {
	try {
		const response = await githubTrends({ section: 'developers', since: 'weekly' })

		const trends = (Object.entries(response).map((trend) => {
			return trend[1]
		}));

		const repoUrls = trends.map((repoUrl) => {
			return repoUrl.repourl
		})

		// sendMessageを呼び出して。repoUrlを引数に入れる
		// sendMessage();

		return repoUrls;
	} catch (error) {
		console.log(error)
		process.exit(1);
	}
}

// const server = http.createServer(function(req, res) {
// 	getTrends();
// 	res.end('success')
// }).listen(port);
