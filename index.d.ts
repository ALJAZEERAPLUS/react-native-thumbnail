declare module 'react-native-thumbnail' {
    export type ThumbnailResult = {
        path: string;
        width: number;
        height: number;
    }
    export default class RNThumbnail {
        static get(videoUri: string): Promise<ThumbnailResult>;
    }
}
