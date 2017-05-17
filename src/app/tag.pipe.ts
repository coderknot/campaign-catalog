import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character.model';

@Pipe({
  name: 'tag',
  pure: true
})

export class TagPipe implements PipeTransform {

  transform(input: Character[], desiredTag) {
    var output: Character[] = [];
    for(var i = 0; i < input.length; i++) {
      var characterTags: string[] = input[i].tags;
      for(var j = 0; j < characterTags.length; j++) {
        if(characterTags[j] === desiredTag) {
          output.push(input[i]);
        }
      }
    }

    if(output.length > 0) {
      return output;
    } else {
      return input;
    }
  }

}
