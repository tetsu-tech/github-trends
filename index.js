const express = require('express');
const api = express();
const http = require('http');
const sendMessage = require('./sendMessage');
require('dotenv').config();

const githubTrends = require('github-trends-api')

const port = process.env.PORT || 3400

// テスト
// const id = process.env.TEST_CHANNEL_ID;
// 本番
const id = process.env.CHANNEL_ID;

const getTrends = http.createServer(async (req, res) => {
	try {
		const response = await githubTrends({ section: 'developers', since: 'weekly' })

		const trends = (Object.entries(response).map((trend) => {
			return trend[1]
		}));

		const repoUrls = trends.map((repoUrl) => {
			return repoUrl.repourl
		})

		// sendMessageをループするもの呼び出して。repoUrlのindexを引数に入れる
		const loop = () => {
			for(let i = 0; i < 10; i++) {
				sendMessage(id, repoUrls[i])
			}
		}

		loop();

		res.end(JSON.stringify(repoUrls))

	} catch (error) {
		console.log(error)
		process.exit(1);
	}
}).listen(port);
