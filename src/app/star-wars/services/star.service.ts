import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result, StarWarsApp } from '../interfaces/star.interface';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private urlShip= ''
  private apiSW2=" https://swapi.py4e.com/api/starships/"
  private apiSW=" https://swapi.dev/api/starships/"
  public apiShipImg = 'https://starwars-visualguide.com/assets/img/starships/';
  public pagNum: number = 1;
  private numUrlShip:number=0

  constructor(private http: HttpClient) {}

  getShips():Observable<StarWarsApp[]>{
    return  this.http.get<StarWarsApp[]>(this.apiSW2)
  }

  getShipId(id:string):Observable<Result>{
    return this.http.get<Result>(`https://swapi.py4e.com/api/starships/${id} `)
  }

  getshipReturn():Observable<Result>{
       return this.http.get<Result>(this.urlShip)
  }

  getShipSelect(url:any){
   this.urlShip=url
  //  console.log(this.urlShip);
   return this.urlShip
  }
  
  getImgShip(url:any){
    this.numUrlShip=parseInt(url.split("starships/").pop()!);
    // console.log(this.numUrlShip);
    this.apiShipImg=`https://starwars-visualguide.com/assets/img/starships/${this.numUrlShip}.jpg`
    // console.log(this.apiShipImg);
    return this.apiShipImg
  }

  // Sroll
  getListShipByPage():Observable<StarWarsApp[]>{
    if(this.pagNum > 4){
      return this.http.get<StarWarsApp[]>(`https://swapi.py4e.com/api/starships/?page=0`)
    }
    return  this.http.get<StarWarsApp[]>(`https://swapi.py4e.com/api/starships/?page=${this.pagNum}`)
  }
}
