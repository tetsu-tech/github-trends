require('dotenv').config();
const app = require('./app');

const id = process.env.CHANNEL_ID;

const sendMessage = async (id, url) => {
	try {
		// Todo: この関数だと、メッセージが1つ1つ分かれてしまうから、まとめて送れるようにしたい
		const result = await app.client.chat.postMessage({
			token: process.env.SLACK_BOT_TOKEN,
			channel: id,
			text: url,
			attachments: url,
		});

		console.log(result);
	} catch (error) {
    console.error(error);
	}
}

module.exports = sendMessage;
