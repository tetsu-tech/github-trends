require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET
})


const sendMessage = async (id, text) => {
	try {
		// const message = await 
	} catch (error) {
		console.error(error);
	}
};
