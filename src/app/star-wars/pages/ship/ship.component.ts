import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarService } from '../../services/star.service';
import { Result } from '../../interfaces/star.interface';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})

export class ShipComponent implements OnInit {

  ship!:Result;
  shipImage!:any
  idShip!:number

  constructor(private activatedRoute:ActivatedRoute,
                      private  starService:StarService) { }

  ngOnInit(): void {

    this.starService. getshipReturn()
                               .subscribe( ship => this.ship=ship);
                               console.log(this.ship);

    this.activatedRoute.params  
                                   .subscribe(({id}) => this.idShip=id )
                                  //  console.log(this.idShip);
          
     this.shipImage= this.starService.apiShipImg    
  }
}