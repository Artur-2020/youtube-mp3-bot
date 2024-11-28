import {resolve, join} from 'path';
import * as fsExtra from "fs-extra";

const resolvedPath = resolve();
const videoDir = 'downloads';
const audioDir = 'downloads/audio';

export const ensureAudioVideoDirsExists = async () => {
    await fsExtra.ensureDir(videoDir);
    await fsExtra.ensureDir(videoDir);

}
export const getVideoPath = () => {
    return join(resolvedPath, videoDir, `video_${Date.now()}.mp4`);
}


export const getAudioPath = () => {
    return join(resolvedPath, audioDir, `audio_${Date.now()}.mp3`);
}

export const removeTemporaryFiles = async ({audioPath, videoPath}: {audioPath: string, videoPath: string}) => {
    await fsExtra.remove(videoPath);
    await fsExtra.remove(audioPath);

}