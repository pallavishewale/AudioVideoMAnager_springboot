import { Component, DoCheck, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FileUpload } from 'primeng/fileupload';
import { SongData } from 'src/app/shared/interfaces';
import { SongsService } from 'src/app/shared/songs.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements DoCheck{
  @ViewChild('fileUpload', { static: false }) fileUpload!: FileUpload;

  uploadForm: FormGroup;
  fileAccept!: string;
  songImageSrc!: String;
  Imagefile!:File;
  songFile!:File;
  
  constructor(private fb: FormBuilder,private songService:SongsService) {
    this.uploadForm = this.fb.group({
      type: ['audio'], // Default to 'audio'
      title: [''],
      artist: [''],
      genre: [''],
      duration: [''],
      releaseYear: [''],
      language: [''],
     
      user: [localStorage.getItem('userId')]
    });
  }
  ngDoCheck(): void {
    console.log("Docheck :uplodes")
  }

  onSubmit(songData: SongData) {
    // Implement your form submission logic here

    console.log(songData)
    this.songService.uploadSong(songData,this.songFile,this.Imagefile).subscribe({
      next: (result) => {
        console.log("Result : adding new song :", result);
        alert("song added in album");
       // this.router.navigate(['/login']);

      },
      error: (error) => {
        console.log("Error: adding new song :", error);
        //alert(error.error);
      }
    })
  }

  onImageSelected(event: any) {
    this.Imagefile = event.files[0]; // Get the selected file
    if (this.Imagefile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.songImageSrc = e.target.result; // Set the source to the base64 data URL
      };
      reader.readAsDataURL(this.Imagefile);
     // this.uploadForm.get('image')?.setValue(Imagefile);
    }
  }
  reuploadSongImage() {
    this.songImageSrc = '';
    this.fileUpload.clear();
  }
  setFileType(event: any) {
    // Handle file selection
    if (this.uploadForm.get('type')?.value === 'audio') {
      this.fileAccept = 'audio/*';
    } else if (this.uploadForm.get('type')?.value === 'video') {
      this.fileAccept = 'video/*';
    }
    alert(this.fileAccept)
  }
  onFileSelected(event: any) {
    this.songFile = event.files[0]; // Use the 'files' property of the event
    if (this.songFile) {
      // Handle the selected file here
      //this.uploadForm.get('file')?.setValue(this.songFile);
    } else {
      console.error('No file selected.');
    }
  }
}
