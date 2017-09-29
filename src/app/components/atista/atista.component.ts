import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-atista',
  templateUrl: './atista.component.html',
  styles: []
})
export class AtistaComponent implements OnInit {

  artista:any;
  pistas:any[] = [];

  constructor(private activatedRoute:ActivatedRoute
    , private spotifyService:SpotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .map( parametros => parametros['id'])
    .subscribe( id => {
        console.log(id);
      this.spotifyService.getArtista(id)
      .subscribe( data => this.artista=data);

      this.spotifyService.getTop(id)
      .subscribe( data => this.pistas=data);


      });
  }

}
