const {ValidationError} = require('../custom_exeptions/index');
const ytdl = require("@distube/ytdl-core");



function validateMessage({ message, bot }) {
    const { chat: { id: chatId }, text } = message; // Corrected destructuring

    console.log('chatId', chatId);
    console.log('text', text);

    if (!text || !ytdl.validateURL(text)) {
       throw new ValidationError('Please send a valid YouTube URL!');
    }

}


module.exports = {
    validateMessage
}