import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [CharacterService]
})

export class CharacterListComponent implements OnInit {
  characters: Character[];
  currentRoute: string = this.router.url;
  selectedCharacter: null;
  modificationType: string = null;
  allTags: string[];
  filterByTag: string = "tag";

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      this.generateTags(this.characters);
    });
  }

  generateTags(characters) {
    this.allTags = [];
    characters.forEach((character) => {
      character.tags.forEach((tag) => {
        if(!(this.allTags.includes(tag.toString()))) {
          this.allTags.push(tag);
        }
      })
    })
  }

  tagOnChange(optionFromMenu) {
    this.filterByTag = optionFromMenu;
  }

  goToCharacterDetail(clickedCharacter) {
    this.router.navigate(['characters', clickedCharacter.$key]);
  }

  showEditForm(characterToEdit) {
    this.modificationType = "edit";
    this.selectedCharacter = characterToEdit;
  }

  showDeleteForm(characterToDelete) {
    this.modificationType = "delete";
    this.selectedCharacter = characterToDelete;
  }

  finishedEditing() {
    this.selectedCharacter = null;
  }

}
