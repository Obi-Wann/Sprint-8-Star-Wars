import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { StarService } from '../../services/star.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get user(){
    return this.authSevice.usernameHeader;
  }

  constructor(private router:Router,
                      private authSevice:AuthService,
                      private starService:StarService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth']);
    localStorage.clear();
}

homeClick(){
  this.router.navigate(["/star-wars/list"]);
  this.starService.pagNum=1
  
}
starShipsClick(){
  this.router.navigate(["/star-wars/list"]);
  this.starService.pagNum=1
}
}
