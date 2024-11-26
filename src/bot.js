const {resolve, join} = require('path');
const envPath = join(resolve(__dirname), '../', '.env');
require('dotenv').config({
    path: envPath
});


const {validateMessage} = require('./validateMessage/index');

const TelegramBot = require('node-telegram-bot-api');
const downloadHandler = require('./handlers/downloadHandler');
const errorHandler = require('./handlers/errorHandler');

const TOKEN = process.env.BOT_TOKEN;


if (!TOKEN) {
    console.error('Error: BOT_TOKEN is missing in the environment variables.');
    process.exit(1); // Exit the process to avoid running without a token
}
// Initialize the download_music_bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {

    const chatId = msg.chat.id;



    try {
        validateMessage({message: msg, bot});

        await downloadHandler(msg, bot);
    } catch (error) {
        errorHandler.handleError(chatId, bot, error);
    }
});
