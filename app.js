const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
	// テスト
	token: process.env.TEST_SLACK_BOT_TOKEN,
	signingSecret: process.env.TEST_SLACK_SIGNING_SECRET
	// 本番
	// token: process.env.SLACK_BOT_TOKEN,
	// signingSecret: process.env.SLACK_SIGNING_SECRET
})

module.exports = app;
