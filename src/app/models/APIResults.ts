export interface AuthResult {
    success: boolean;
    token: string
    user: UserData;
}

export interface UserData {
    user_id: number;
    name: string;
    email: string;
}

// export interface UserResult {
//     success: boolean;
//     user: UserData;
// }

export interface ImageData {
    image_id: number;
    title: string;
    url: string;
    owner_id: number;
    sender: string;
}

export interface ImageResult {
    success: boolean;
    images: ImageData[];
}

