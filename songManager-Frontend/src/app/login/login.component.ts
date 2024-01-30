import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements DoCheck{
  errorMsg = "";
  loginForm: FormGroup;

  constructor(private router: Router, private rout: ActivatedRoute, private user:UserServiceService,private fb:FormBuilder) {
    // if (localStorage.getItem('userId')) {
    //   this.router.navigate(['/home']);
    // }

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
    });
  }
  ngDoCheck(): void {
    console.log("Docheck :login")
  }
  login(loginData:LoginData) {
    this.errorMsg = "";

   // subscribe observable to check  data of loged in user
    this.user.loginUser(loginData).subscribe(
      {
        next: (result) => {
              localStorage.setItem('user', JSON.stringify(result));//set in localstroge
              localStorage.setItem('userId', JSON.stringify(result.id));
              //nevigate to user profile   
              this.router.navigate(['/home']);
        },
        error:(error)=>{
             this.errorMsg= error.error
        }
      })
  }
}
