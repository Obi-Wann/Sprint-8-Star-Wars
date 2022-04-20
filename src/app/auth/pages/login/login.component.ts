import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces/auth2.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  miForm:FormGroup = this.fb.group({
    'username':['Obi-Wan', [Validators.required, Validators.minLength(3)]],
    'password':[ '4MayWhitYou', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private router:Router,
    private authService:AuthService,
    private fb:FormBuilder) { }
    
    noValidForm(value:string){
       return this.miForm.controls[value].errors && this.miForm.controls[value].touched
    }
  
newLogin:User={}
    loginOk!:boolean;

    login(){
      if(this.miForm.invalid){
        this.miForm.markAllAsTouched();
        return;
      }
      this.newLogin={
        username:this.miForm.value.username,
        password:this.miForm.value.password
      }
      this.authService.saveLogin(this.newLogin)
      // this.router.navigate(['./star-wars/list'])    
      if(this.authService.loginOk){
        this.loginOk = true
        this.router.navigate(['./star-wars/list'])    
        // console.log(this.authService.loginOk);
      }else{
         this.loginOk = false
        //  console.log(this.authService.loginOk);
        //  console.log(this.loginOk);
      }              
    }


  loginFree(){
    this.router.navigate(['./star-wars/list'])    
  }
}
