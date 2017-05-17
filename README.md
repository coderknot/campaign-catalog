# Campaign Catalog

#### _A web-based management application for a tabletop role-playing game, such as Dungeons and Dragons, Current Version: 05-12-2017_

#### By _**John Carr**_

## Description
Campaign Catalog is an application to manage characters for Legends of the Nentir Vale, a Dungeons and Dragons 5e campaign. Players can see the list of characters and character details. Administrators can also add new characters, edit characters, and remove characters. Character lists can be filtered based on character tags.

## Setup / Installation Requirements

### Prerequisites

You will need the following things properly installed on your computer:

* [Git](https://git-scm.com/)
* [Bower](https://bower.io/)

### Installation

* `git clone <repository-url>` this repository
* `cd campaign-catalog`
* `npm install`
* `bower install`

#### Database Configuration

##### Firebase Setup
* If necessary, create a [Firebase](https://firebase.google.com/) account
* Navigate to the Firebase console
* Add a new Firebase project
* Click 'Database', then click 'Rules', and change to the following:
```
  {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }
```
* Click 'Overview' (after creating a new Firebase project), then click 'Add Firebase to your web app'
* The project credentials will display, which will be used below.

##### Project Configuration
* In the project src/app/ directory create `api-keys.ts`
* In `api-key.ts`, add the following:
```
export var masterFirebaseConfig = {
    apiKey: "[Firebase credentials here]",
    authDomain: "[Firebase credentials here]",
    databaseURL: "[Firebase credentials here]",
    storageBucket: "[Firebase credentials here]",
    messagingSenderId: "[Firebase credentials here]"
  };
```
* Replace [Firebase credential here] with the project credentials from Firebase (see Firebase Setup above)

### Running / Development

* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

  * Configuration / Dependencies
    * NPM - npm install
    * Bower - bower install
    * Angular Project Directory Setup
    * Firebase
  * Specs
    * Users should be able to:
      * ~~See a list of all members~~
      * ~~Click a member's entry in the list to see a profile page with additional details~~
      * ~~Visit About page, explaining the group~~
      * ~~Filter list of members by tag~~
    * Admins should be able to:
      * ~~Add new members~~
      * ~~Edit member details~~
      * ~~Delete members~~
    * Data should be:
      * ~~Modeled~~
      * ~~Persisted to a database~~
  * Data Models
    * Character
      * ~~name : string~~
      * ~~race : string~~
      * ~~class : string~~
      * ~~level : number~~
      * ~~xp : number~~
  * Integration
    * Router
      * ~~path: '' component: LandingPageComponent~~
      * ~~path: 'about' component: AboutComponent~~
      * ~~path: 'character-list' component: CharacterListComponent~~
      * ~~path: 'characters/:id' component: CharacterDetailComponent~~
      * ~~path: 'admin' component: AdminComponent~~
      * ~~path: 'admin/new-character' component: NewCharacterComponent~~
    * Modules
      * ~~Root~~
    * Components
      * ~~Root~~
      * ~~LandingPage~~
      * ~~About~~
      * Admin
      * ~~Character-List~~
      * ~~Character-Detail~~
      * ~~New-Character~~
      * ~~Edit-Character~~
    * Pipes
      * ~~Tag~~
    * Services
      * ~~Character~~
    * Database
      * Firebase
        * ~~AngularFire2~~
        * ~~Imports~~
    * UX/UI
      * ~~Utilize styling framework to quickly divide and style application content~~
      * ~~Incorporate custom styling~~
    * Polish
      * ~~Review and refactor as necessary~~
      * ~~Remove unused code, logs, and comments~~
      * ~~Finalize README~~
  * Additional Features

## Technologies Used
* _HTML_
* _Javascript_
* _Typescript_
* _Angular_
* _CSS_

## Support and contact details
Questions? Concerns? Suggestions?

Reach out to me via github:
<http://github.com/coderknot>

## License

MIT License

__Copyright (c) 2017 John Carr__

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
