const fsExtra = require('fs-extra');
const {resolve, join} = require('path');
const downloadVideo = require("../utils/downloadVideo");
const convertToAudio = require("../utils/convertVideoToAudio");

async function downloadHandler(message, bot) {

    const chatId = message.chat.id;
    const youtubeUrl = message.text;
    bot.sendMessage(chatId, 'Your request is processing, please wait');


    const resolvedPath = resolve();
    // Set up directories and file paths
    const videoDir = 'downloads';
    const audioDir = 'downloads/audio';
    const videoPath = join(resolvedPath, videoDir, `video_${Date.now()}.mp4`);
    const audioPath = join(resolvedPath, audioDir, `audio_${Date.now()}.mp3`);

    try {
        // Ensure directories exist
        await fsExtra.ensureDir(videoDir);
        await fsExtra.ensureDir(audioDir);

        await downloadVideo(videoPath, youtubeUrl);
        await convertToAudio(videoPath, audioPath);

        // Step 3: Send the MP3 file to the user
        await bot.sendAudio(chatId, audioPath,  {
            contentType: 'audio/mp3', // Explicitly set the MIME type
        });

        console.log('Audio sent successfully!');

        // Step 4: Clean up temporary files
        await fsExtra.remove(videoPath);
        await fsExtra.remove(audioPath);

        console.log('Temporary files cleaned up.');
    } catch (error) {
       throw error;
    }
}

module.exports = downloadHandler;
