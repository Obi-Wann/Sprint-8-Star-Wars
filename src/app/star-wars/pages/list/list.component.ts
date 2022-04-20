
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { StarService } from '../../services/star.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listShips:any;
  
  constructor(private starService :StarService,
                     private activatedRoute:ActivatedRoute,
                     private router:Router,
                    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

    this.starService.getShips()
    .subscribe( (resp:any) => {  
               this.listShips = resp.results;
            console.log(this.listShips);
  });
  }
  
  urlShip(ship:any){
    //  console.log(ship.url );
    this.starService.getShipSelect(ship.url);
    this.starService.getImgShip(ship.url)
  }
  
  // Scroll
  showGoUpButton: boolean = false;
  
  @HostListener("window:scroll")
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showGoUpButton = (yOffSet || scrollTop) > 500;
  }

  onScrollDown(){
  this.starService.pagNum++
    this.starService.getListShipByPage().subscribe(
      (resp:any) => {  
        this.listShips = [...this.listShips,...resp.results];
     console.log(this.listShips);
     });
  }
  onScrollTop():void{
    this.document.documentElement.scrollTop = 0;
  }
}

