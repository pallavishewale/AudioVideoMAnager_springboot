import { Injectable } from '@angular/core';
import { ResponseData, SongData, SongsResponse } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
   private audioData!:Observable<any>
   private videoData!:Observable<any>

  constructor(private http:HttpClient) {
    this.audioData = this.getSongByType("audio").pipe(share())
    this.videoData = this.getSongByType("video").pipe(share())
   }

  uploadSong(body:SongData,file:File,image:File):Observable<ResponseData>{
    console.log("enter in upload song ")
    const formData = new FormData();
    formData.append('file', file);
    formData.append('image', image);
    formData.append('songData', JSON.stringify(body)); // Convert the body to a JSON string

    return this.http.post<ResponseData>("http://localhost:8080/songs", formData);
  }

 private  getSongByType(type:String):Observable<SongsResponse>{
      alert("main Onservable call")
    return this.http.get<SongsResponse>(`http://localhost:8080/songs/${type}`);
  }

  getAudioData(){
    return this.audioData
  }
  getVideoData(){
    return this.videoData
  }
}
