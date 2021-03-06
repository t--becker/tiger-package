# Technical Writer's IDE
Everything a tech writer needs to write markdown docs and make shit go.

## Features

### Markdown Toolbar
Standard markdown tools; plus, Atlassian note, tip, warning, and include buttons.
![Toolbar](https://github.com/t--becker/tech-writer-ide/blob/master/img/toolbar.png?raw=true)

### Markdown Validator
Validate markdown as you type.
![Validator](https://github.com/t--becker/tech-writer-ide/blob/master/img/validator.png?raw=true)

### Markdown Previewer
View your markdown document as it would look on the Atlassian developer portal. [http://developers.atlassian.com](http://developers.atlassian.com)
![Previewer](https://github.com/t--becker/tech-writer-ide/blob/master/img/preview.png?raw=true)

## Installation
Open **Settings -> Install** and search for `tech-writer-ide`.

Alternatively, install through the command line:
```bash
amp install tech-writer-ide
```

## Roadmap
* JIRA || Trello Task List Integration
  * Show your tasks in Atom.io panel
  * Update and close tasks
* Grammar Checker
  * Integrate a Grammar API for doc validation
* Visual Github integration
    * Use the d3js library to show a visual representation of bitbucket branches (http://bl.ocks.org/mbostock/4339083)
    * allow to commit and merge branches by dragging streams together.

## Updates
* v0.1.2 -> updated to restrict only one markdown previewer to be open at a time. This is a system limitation.
