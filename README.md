# pungav.guru
This repository holds the source code for my personal website. The website is meant to be a portfolio of my work while providing me with an opportunity to implement some of my own design elements and ideas. I wanted to build something minimal that relied on Typography for emphasis and style, using images to provide color and vibrance.

## Installation instructions
This website was built using Node and Angular.
1. Install nodeJS and Angular CLI.
2. Clone this repository.
3. `npm install`
4. `npm start`

## Contributing
These contributing guidelines are based off the guidelines that [Venkat.R](https://github.com/ramsunvtech) uses in his projects.

### Commit Message Format
Each commit message must be of a format that includes a **type**, a **scope**, a **issue-id** and a **subject**
as shown below.
```
<type>(<scope>): #<issue-id> - <subject or your message>
```
A issue id may not always apply and isn't always necessary.

### Commit Message Guidelines
Guidelines give precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the changelog**.

#### Revert
If the commit reverts a previous commit, it should begin with `revert(<scope>): Your Message `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type
The type must be one of the following:
* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **tech**: Any Technical Activities.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

#### Scope
The following scopes are supported:
* **general**: General changes (README .etc)
* **component**: The name of any component 

## License
```
MIT License

Copyright (c) 2020 Gurupungav Narayanan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```