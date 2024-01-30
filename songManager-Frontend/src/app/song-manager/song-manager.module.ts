import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { UploadComponent } from './upload/upload.component';
import { MyUploadsComponent } from './my-uploads/my-uploads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PickListModule } from 'primeng/picklist';
import { CardModule } from 'primeng/card';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AudioComponent,
    VideoComponent,
    UploadComponent,
    MyUploadsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule ,
 MatMenuModule ,
 MatToolbarModule,
 MatFormFieldModule,
 MatSelectModule,
 MatCardModule,
 ReactiveFormsModule,
 MatInputModule,
 InputTextModule,
 DropdownModule,
 ButtonModule,
 FileUploadModule,
 FieldsetModule,
 RadioButtonModule,
 PickListModule,
CardModule ,
 MatTabsModule ,
 DialogModule









    
  ]
})
export class SongManagerModule { }
