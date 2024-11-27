const ffmpeg = require("fluent-ffmpeg");
module.exports = async function convertVideoToAudio(videoPath, audioPath) {
    try {
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
    } catch (e) {
        console.log('error during convert video to audio', e);
    }
}
