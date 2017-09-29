import { Injectable } from '@angular/core';
import { Http, Headers}  from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  access_token:string = "BQAZOI6Tp6sCOm9IANt0czwy3hX6LTitt4CY6r2NGUq5kXeMh0IpdqUIMkRooBEmYvRR7STtoh0SV9VRS5nn8g";
  artistas:any[] = [];
  pistas:any[] = [];
  artista:any[];
  urlBusqueda : string= "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";


  constructor(private http:Http ) { }

  getArtistas(termino:string){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.access_token}`);
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
      .map(res => {
        //console.log(res.json().artists.items);
        this.artistas = res.json().artists.items;
        return this.artistas;
      })
  }

  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.access_token}`);
    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
      .map(res => {
        //console.log(res.json().artists.items);
        this.artista = res.json();
        return this.artista;
      });
  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.access_token}`);
    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get(url, {headers})
      .map(res => {
        //console.log(res.json().artists.items);
        this.pistas = res.json().tracks;
        return this.pistas;
      });
  }

}
