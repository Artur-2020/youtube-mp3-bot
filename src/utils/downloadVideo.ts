import ytdl from '@distube/ytdl-core';
import * as fs from 'fs';
import {VideoInfo} from "../interfaces";

/**
 * Download video from YouTube
 * @param videoPath
 * @param youtubeUrl
 */

export default async function downloadVideo(videoPath: string, youtubeUrl: string): Promise<VideoInfo> {
    try {
        // Fetch video information
        const videoInfo = await ytdl.getInfo(youtubeUrl);
        const { title, lengthSeconds, author } = videoInfo.videoDetails;

        console.log(`Downloading video: ${title}`);
        console.log(`Duration: ${Math.floor(Number(lengthSeconds) / 60)}:${Number(lengthSeconds) % 60} minutes`);
        console.log(`Uploaded by: ${author.name}`);

        // Start video download
        const videoStream = ytdl(youtubeUrl, { quality: 'highestaudio' });
        const writeStream = fs.createWriteStream(videoPath);

        videoStream.pipe(writeStream);

        await new Promise<void>((resolve, reject) => {
            videoStream.on('end', resolve);
            videoStream.on('error', reject);
        });

        console.log('Download complete.');
        return {title, author: author.name, duration: lengthSeconds};
    } catch (e) {
        console.error('Error during video download:', e);
        throw e;
    }
}
