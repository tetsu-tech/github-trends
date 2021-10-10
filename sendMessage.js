require('dotenv').config();
const app = require('./app');

// テスト
const id = process.env.TEST_CHANNEL_ID;
// 本番
// const id = process.env.CHANNEL_ID;

const sendMessage = async (id, url) => {
	try {
		// Todo: この関数だと、メッセージが1つ1つ分かれてしまうから、まとめて送れるようにしたい
		const result = await app.client.chat.postMessage({
			// テスト
			token: process.env.TEST_SLACK_BOT_TOKEN,
			// 本番
			// token: process.env.SLACK_BOT_TOKEN,
			channel: id,
			text: url,
			attachments: url,
		});

	} catch (error) {
    console.error(error);
	}
}

module.exports = sendMessage;
