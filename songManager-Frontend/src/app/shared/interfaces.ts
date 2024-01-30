export interface ResponseData{
    status:String;
    result:String;
}
export interface UserRegistration {
    name: string;
    email: string;
    username: string;
    password: string;
}
export interface LoginData {
    username: string;
    password: string;
}
export interface UserData {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
}

export interface SongData {
    type: string;
    title: string;
    artist: string;
    genre: string;
    duration: String;
    file: File;
    image: File;
    language: string;
    releaseYear: string;
    user: UserData; // This field appears to be a JSON string
}

export interface SongsResponse{
    status:String;
    result:SongData;
}