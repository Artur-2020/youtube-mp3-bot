require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const downloadHandler = require('./handlers/downloadHandler');
const errorHandler = require('./handlers/errorHandler');


// Initialize the download_music_bot
const download_music_bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

download_music_bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const url = msg.text;

    if (!url || !url.startsWith('http')) {
        return download_music_bot.sendMessage(chatId, 'Please send a valid YouTube URL!');
    }

    try {
        // Process the YouTube URL and send the audio
        await downloadHandler.handleDownload(url, chatId, download_music_bot);
    } catch (error) {
        errorHandler.handleError(chatId, download_music_bot, error);
    }
});
