import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, BehaviorSubject } from 'rxjs';
import { PokemonAttributes } from './PokemonInterface';

@Injectable({
  providedIn: 'root'
})
export class CatchEmService {

  private nameApiURL = 'https://pokeapi.co/api/v2/pokemon';
  spriteImage;
  pokeStuff;
  pokeData: PokemonAttributes[];
  //adding to observable so i can show it on pokemon componenet as a card--needs to be done
  pokemonBehaviourSubject: BehaviorSubject<PokemonAttributes[]> = new BehaviorSubject([]);

  stringData;

  constructor(private http: HttpClient) {
  }

  searchIt(event: any){
    const whatToSearch = event.target.value;

    this.http.get(`${this.nameApiURL}/${whatToSearch}`).subscribe(
      (response: any) => {

        this.pokeStuff = {
          pokemonID: response.id,
          pokemonName: response.name,
          pokemonType: response.types[0].type.name,
          pokemonImage: response.sprites['front_default'],
          pokemonAbility: response.abilities[0].ability['name']
        };

        this.pokemonBehaviourSubject.next(this.pokeStuff);
        this.stringData = JSON.stringify(this.pokeStuff);

        this.spriteImage = response['sprites']['front_default'];

        console.log(response);
      }
    );
  }
}
