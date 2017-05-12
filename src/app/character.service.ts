import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Character } from './character.model';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  getCharacters() {
    return this.characters;
  }
}
