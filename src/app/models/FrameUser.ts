import { FrameImage } from './FrameImage';
export interface FrameUser {
    id: number;
    name: string;
    email: string;
    frameImages: FrameImage[];
}