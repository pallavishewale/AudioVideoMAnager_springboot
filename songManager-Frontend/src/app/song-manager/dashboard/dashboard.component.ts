import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements DoCheck{

  constructor(private router: Router){
  
  }
  ngDoCheck(): void {
    console.log("Docheck :Dashboared")
  }
  logout(){
   
    // alert("logged out ....");
    //  this.router.navigate(['/home']);
    //  localStorage.removeItem('userId');
    //  localStorage.removeItem('user');
  }
}
