const {ValidationError} = require('../custom_exeptions/index');


const handleError = (chatId, bot, error) => {
    console.error('Error:', error);

    if (error.name === 'ValidationError') {
        bot.sendMessage(chatId, error.message);
    }
    if (error.message.includes('ENOSPC')) {
        bot.sendMessage(chatId, 'Server storage is full. Please try again later.');
    } else if (error.message.includes('ffmpeg')) {
        bot.sendMessage(chatId, 'Audio conversion failed. Please contact support.');
    } else {
        bot.sendMessage(chatId, 'An unexpected error occurred. Please try again later.');
    }

};

module.exports = { handleError };
