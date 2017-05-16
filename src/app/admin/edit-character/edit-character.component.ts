import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../../character.model';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css'],
  providers: [CharacterService]
})

export class EditCharacterComponent implements OnInit {
  @Input() selectedCharacter;
  @Output() editDoneSender = new EventEmitter();

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  beginUpdatingCharacter(characterToUpdate) {
    this.characterService.updateCharacter(characterToUpdate);
    this.editDoneSender.emit();
  }

  cancelUpdatingCharacter() {
    this.editDoneSender.emit();
  }

}
