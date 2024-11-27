import ffmpeg from 'fluent-ffmpeg';

export default async function convertVideoToAudio(videoPath: string, audioPath: string): Promise<void> {
    try {
        console.log(`Converting video to audio: ${audioPath}...`);
        await new Promise<void>((resolve, reject) => {
            ffmpeg(videoPath)
                .audioCodec('libmp3lame')
                .format('mp3')
                .on('end', (_stdout, _stderr) => resolve()) // Adjusting the callback to match types
                .on('error', (_err, _stdout, _stderr) => reject(_err)) // Adjusting the callback to match types
                .save(audioPath);
        });

        console.log(`Conversion completed: ${audioPath}`);
    } catch (e) {
        console.log('Error during video to audio conversion:', e);
    }
}
