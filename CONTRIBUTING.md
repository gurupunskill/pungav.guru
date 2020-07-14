## Contributing
These contributing guidelines are based off the guidelines that [Venkat.R](https://github.com/ramsunvtech) uses in his projects.

### Commit Message Format
Each commit message must be of a format that includes a **type**, a **scope**, a **issue-id** and a **subject** as shown below. A issue id may not always apply and isn't always necessary.
```
<type>(<scope>): #<issue-id> - <subject or your message>
```

### Commit Message Guidelines
Guidelines give precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

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
* **content**: Any changes to the content of the site
* **general**: General changes

#### Scope
The following scopes are supported:
* **component**: The name of any component 
