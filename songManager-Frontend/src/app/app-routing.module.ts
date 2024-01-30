import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './song-manager/dashboard/dashboard.component';
import { UploadComponent } from './song-manager/upload/upload.component';
import { MyUploadsComponent } from './song-manager/my-uploads/my-uploads.component';
import { VideoComponent } from './song-manager/video/video.component';
import { AudioComponent } from './song-manager/audio/audio.component';

const routes: Routes = [
  {path:'',  redirectTo: 'home', pathMatch:'full'},
  {path :'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},

  {path:'home', component:DashboardComponent,
  children:[//{path:'' ,pathMatch:'full', component:WelcomeComponent},
             {path:'songs', component:VideoComponent},
             {path:'my-uploads', component:MyUploadsComponent},
           {path:'upload', component:UploadComponent}]}
          
 //{path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
