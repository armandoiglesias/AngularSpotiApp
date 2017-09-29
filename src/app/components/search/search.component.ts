import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino:string="";
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista(){
    // if (this.termino == "") {
    //     return;
    // }
    this._spotifyService.getArtistas(this.termino)
      .subscribe();

  }

}
