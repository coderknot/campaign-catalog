import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from '../../character.model';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-delete-character',
  templateUrl: './delete-character.component.html',
  styleUrls: ['./delete-character.component.css'],
  providers: [CharacterService]
})

export class DeleteCharacterComponent implements OnInit {
  @Input() selectedCharacter;
  @Output() deleteDoneSender = new EventEmitter();

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  begingDeletingCharacter(characterToDelete) {
    this.characterService.deleteCharacter(characterToDelete);
  }

  cancelDeletingCharacter() {
    this.deleteDoneSender.emit();
  }

}
