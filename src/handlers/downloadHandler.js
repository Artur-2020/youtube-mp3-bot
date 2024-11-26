const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs-extra');
const path = require('path');

async function downloadHandler(message, bot) {
    console.log('message', message)
    const chatId = message.chat.id;
    const youtubeUrl = message.text;

    // Validate YouTube URL
    if (!ytdl.validateURL(youtubeUrl)) {
        return bot.sendMessage(chatId, 'Please provide a valid YouTube URL!');
    }

    // Set up directories and file paths
    const videoDir = './downloads';
    const audioDir = './downloads/audio';
    const videoPath = path.join(videoDir, `video_${Date.now()}.mp4`);
    const audioPath = path.join(audioDir, `audio_${Date.now()}.mp3`);

    try {
        // Ensure directories exist
        await fs.ensureDir(videoDir);
        await fs.ensureDir(audioDir);

        // Step 1: Download the YouTube video
        const videoStream = ytdl(youtubeUrl, { quality: 'highestaudio' });
        const writeStream = fs.createWriteStream(videoPath);

        videoStream.pipe(writeStream);

        console.log(`Downloading video to ${videoPath}...`);
        await new Promise((resolve, reject) => {
            videoStream.on('end', resolve);
            videoStream.on('error', reject);
        });

        console.log(`Download completed: ${videoPath}`);

        // Step 2: Convert video to MP3
        console.log(`Converting video to audio: ${audioPath}...`);
        await new Promise((resolve, reject) => {
            ffmpeg(videoPath)
                .audioCodec('libmp3lame')
                .format('mp3')
                .on('end', resolve)
                .on('error', reject)
                .save(audioPath);
        });

        console.log(`Conversion completed: ${audioPath}`);

        // Step 3: Send the MP3 file to the user
        console.log(`Sending audio file to chat ${chatId}...`);
        await bot.sendAudio(chatId, audioPath);

        console.log('Audio sent successfully!');

        // Step 4: Clean up temporary files
        await fs.remove(videoPath);
        await fs.remove(audioPath);

        console.log('Temporary files cleaned up.');
    } catch (error) {
        console.error('Error in downloadHandler:', error);
        bot.sendMessage(chatId, 'An error occurred while processing your request. Please try again.');
    }
}

module.exports = downloadHandler;
