import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { marvelApiKey } from '../shared/sensitiveConstants';

@Component({
  selector: 'character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent implements OnInit {
  public characters: any;
  //private baseUrl: string = `https://gateway.marvel.com:443/v1/public/characters?apikey=${marvelApiKey}`;
  private baseUrl: string = `https://gateway.marvel.com:443/v1/public/characters`;
  constructor(private _http: HttpClient) { }
  public searchString:string ="";
  public isPartialMatch: boolean = false;

  ngOnInit(): void {
    //this.fetchCharacters("Thor")
  }

  fetchCharacters(searchString: string) {
    const url: string = `${this.baseUrl}&nameStartsWith=${searchString}`;
    this._http.get<any>(url)
    .subscribe(res => {
      this.characters = res.data.results;
      this.characters = this.characters.map(c => ({...c, imageUrl: `${c.thumbnail?.path}/landscape_incredible.${c.thumbnail.extension}`  }));
      console.log(this.characters);
    })
  }

}
