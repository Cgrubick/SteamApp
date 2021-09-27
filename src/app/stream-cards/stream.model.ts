export class Stream{
    viewerCount:string;
    imagePaths:string;
    streamTitle:string;

    constructor({viewerCount,imagePaths,streamTitle} :
        {viewerCount:string , imagePaths:string, streamTitle:string}) {
        this.viewerCount = viewerCount;
        this.imagePaths= imagePaths;
        this.streamTitle = streamTitle;
    }

}