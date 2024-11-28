import * as fsExtra from "fs-extra";
import {RemoveTemporaryFilesInput} from "../interfaces";

export default async ({audioPath, videoPath}: RemoveTemporaryFilesInput) => {
    await fsExtra.remove(videoPath);
    await fsExtra.remove(audioPath);

}