const ytdl = require("@distube/ytdl-core");
const fs = require("fs");
module.exports = async function downloadVideo(videoPath, youtubeUrl) {
    try {
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
    } catch (e) {
        console.log('error during download video --->', e);
        throw e;
    }
}