import { ChangeDetectionStrategy, Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongData } from 'src/app/shared/interfaces';
import { SongsService } from 'src/app/shared/songs.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
 
})
export class VideoComponent implements DoCheck{
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

songsData:any
type:String|null=null

visible: boolean = false;
  constructor(private songService: SongsService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
       this.type = params.get('type');
      if (this.type) {
        this.getVideoData(this.type);
      }
    });
  }
  
  ngDoCheck(): void {
    console.log("Docheck :video")
  }

  getVideoData(type:String) {
    if(type=="audio"){
      console.log("type =======",type)
      this.songService.getAudioData().subscribe(
        {
          next: (result) => {
            console.log("result: ",result)
             this.songsData= result.result
          },
          error: (Error) => {
            console.log("error: ",Error)
          }
        })
    }else{
      console.log("type =======",type)
      this.songService.getVideoData().subscribe(
        {
          next: (result) => {
            console.log("result: ",result)
             this.songsData= result.result
          },
          error: (Error) => {
            console.log("error: ",Error)
          }
        })
    }
   
  }

  songFile!: File;
song: any = {
  type: 'audio', // Default to audio
  title: 'Default Title',
  artist: 'Default Artist',
  image:"abc.png",
  file:""
  // Initialize other properties with default values
};
  playMusic(currentSong: SongData) {
   
    this.song=currentSong
    this.songFile=this.song.file
    this.visible = true;
  }
  }

  


