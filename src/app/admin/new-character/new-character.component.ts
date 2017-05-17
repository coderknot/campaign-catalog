import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from "../../character.model";
import  { CharacterService } from '../../character.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
  providers: [CharacterService]
})
export class NewCharacterComponent implements OnInit {

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name: string,
             race: string,
             characterClass: string,
             level: number,
             xp: number,
             tags: string) {
    var tagsArray: string[] = this.parseTags(tags);
    var newCharacter: Character = new Character(name, race, characterClass, level, xp, tagsArray);
    this.characterService.addCharacter(newCharacter);
    this.router.navigate(['/admin']);
  }

  parseTags(tags: string): string[] {
    var tagsArray: string[];
    tagsArray = tags.split(",");

    for(var i = 0; i <= tagsArray.length; i++) {
      tagsArray.push(tagsArray.shift().trim().toLowerCase());
    }

    tagsArray.sort();
    return tagsArray;
  }

}
