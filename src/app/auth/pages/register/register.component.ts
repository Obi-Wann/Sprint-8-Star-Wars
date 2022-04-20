import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent  {
 
  constructor(private router:Router,
                     private authService:AuthService,
                     private fb:FormBuilder) { }
    
    miForm:FormGroup = this.fb.group({
      'username':['Obi-Wan', [Validators.required, Validators.minLength(6)]],
      'email':['obi@wann.com', [Validators.required, Validators.email]],
      'password':['4MayWhitYou', [Validators.required, Validators.minLength(6)]],
      'confirmpassword':['4MayWhitYou' , [Validators.required]],
    },
    {
      validators:[this.authService.passwordEquals('password','confirmpassword')]
    }
    );

    noValidForm(value:string){
       return this.miForm.controls[value].errors && this.miForm.controls[value].touched
    }
    
    // Register new user
     newUser:any={}

    saveRegister(){
      if(this.miForm.invalid){
        this.miForm.markAllAsTouched();
        return;
      }
    
      this.router.navigate(['./auth/login'])
      this.newUser={
        username:this.miForm.value.username,
        email:this.miForm.value.email,
        password:this.miForm.value.password
      }
      this.authService.saveRegister(this.newUser)
   
      console.log(this.miForm.value);
    }
}
