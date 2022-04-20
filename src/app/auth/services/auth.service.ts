
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/auth2.interface';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  
  ngOnInit(): void {
  
  }
  constructor(private http: HttpClient) {
    
  }
  dataLocalStore(): User {
   let dataLocalstore = JSON.parse(localStorage.getItem("New User")!);
   return dataLocalstore;
 }

  // DAtA Register new user
  saveRegister( newUser:User){
       localStorage.setItem("New User", JSON.stringify(newUser));
  }

  // See username in header
  usernameHeader!:any;
  get user(){
    return  this.usernameHeader
  }

// DATA Login
loginOk!:boolean;

saveLogin(newLogin:User){
  let dataLocalstore = JSON.parse(localStorage.getItem("New User")!);
  
  if(dataLocalstore.username === newLogin.username && dataLocalstore.password === newLogin.password ){
   this.usernameHeader =  newLogin.username
  //  console.log('iguales');
   return this.loginOk=true
  }else{
    // console.log('no iguales');
    return this.loginOk=false
  }
}

  // Verificación password
passwordEquals(value1:string, value2:string){
  return (formGroup:AbstractControl):ValidationErrors | null=>{
    const pass1 = formGroup.get(value1)?.value;
    const pass2 = formGroup.get(value2)?.value;

    if(pass1!==pass2){
      formGroup.get('value2')?.setErrors({noEquals:true})
              return {noEquals:true}
    }
    formGroup.get('value2')?.setErrors(null)
             return null;
   }
  }



  



}
