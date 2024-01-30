import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UserData } from '../shared/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DoCheck{
  registrationForm: FormGroup;
  constructor( private router: Router,
     private rout: ActivatedRoute, private fb:FormBuilder,
     private user :UserServiceService) {
      this.registrationForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', Validators.required],
       
      });
      }
      ngDoCheck(): void {
        console.log("Docheck :register")
      }
  confirmPassword= "";
   errorMsg ="";


  setConfirmPass(pass:string){
    this.confirmPassword= pass;
  }
  register(userData: UserData): void {
   this.errorMsg='';
    if (userData.password === this.confirmPassword) {
      this.user.addUser(userData).subscribe({
        next: (result) => {
          alert("user Registered succesfully ...LogIn Now");
          this.router.navigate(['/login']);

        },
        error: (error) => {
          alert(error.error);
        }
      })
    } else {
      this.errorMsg= "Retype: password does not matched";
      userData.password = "";
      this.confirmPassword = "";
    }
  }
}
