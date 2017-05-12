# Campaign Catalog

#### _A web-based management application for a tabletop role-playing game, such as Dungeons and Dragons, Current Version: 05-12-2017_

#### By _**John Carr**_

## Description
Campaign Catalog is an application to manage characters for Legends of the Nentir Vale, a Dungeons and Dragons 5e campaign.

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
      * See a list of all members
      * Click a member's entry in the list to see a profile page with additional details
      * Visit About page, explaining the group
      * Filter list of members by "role"
    * Admins should be able to:
      * Add new members
      * Edit member details
      * Delete members
    * Data should be:
      * Modeled
      * Persisted to a database
  * Data Models
    * Character
      * name : string
      * race : string
      * class : string
      * level : number
      * xp : number
  * Integration
    * Router
    * Modules
      * Root
    * Components
      * Root
    * Pipes
    * Services
    * Database
    * UX/UI
      * Utilize styling framework to quickly divide and style application content
      * Incorporate custom styling
    * Polish
      * Review and refactor as necessary
      * Remove unused code, logs, and comments
      * Finalize README
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
