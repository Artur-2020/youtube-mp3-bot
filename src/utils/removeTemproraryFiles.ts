import * as fsExtra from "fs-extra";
import {RemoveTemporaryFilesInput} from "../interfaces";

/**
 * Delete video and audio files
 * @param audioPath
 * @param videoPath
 */
export default async ({audioPath, videoPath}: RemoveTemporaryFilesInput) => {
    await fsExtra.remove(videoPath);
    await fsExtra.remove(audioPath);

}