require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET
})

const sendMessage = async (id, text) => {
	try {
		// Call the chat.postMessage method using the built-in WebClient
		const result = await app.client.chat.postMessage({
			// The token you used to initialize your app
			token: process.env.SLACK_BOT_TOKEN,
			channel: id,
			text: text,
			blocks: [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": text,
					}
				}
			]
			// You could also use a blocks[] array to send richer content
		});

		// Print result, which includes information about the message (like TS)
		console.log(result);
	} catch (error) {
    console.error(error);
	}
}

// sendMessageをexportする

// これ以降の処理はindexの中で呼ぶようにする
sendMessage("C01SSQ9EAN8", "Hello world :tada:");

(async () => {
  await app.start(process.env.PORT || 3500);

  console.log('⚡️ Bolt app is running!');
})();
