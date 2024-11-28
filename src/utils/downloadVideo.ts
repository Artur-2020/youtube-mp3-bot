import ytdl from '@distube/ytdl-core';
import * as fs from 'fs';

export default async function downloadVideo(videoPath: string, youtubeUrl: string): Promise<void> {
    try {
        const videoStream = ytdl(youtubeUrl, { quality: 'highestaudio' });
        const writeStream = fs.createWriteStream(videoPath);

        videoStream.pipe(writeStream);

        await new Promise<void>((resolve, reject) => {
            videoStream.on('end', resolve);
            videoStream.on('error', reject);
        });

    } catch (e) {
        console.log('Error during video download:', e);
        throw e;
    }
}
