import { Component } from '@angular/core';

@Component({
  selector: 'app-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.css']
})
export class MyUploadsComponent {
  count=0
  add(){
    this.count=this.count+1;
  }
}
