# Code Break

This is a game similar to other popular board games and apps in which a user must attempt to guess a generated code. Each attempt indicates a match in color and position.

My motivation for creating this project is for experimenting with Nrwl, NGRX and various other web technologies.

You can see a demo here: https://mattfors.github.io/code-break/

## Stack
* Angular
* NX
* NGRX
* Storybook
* Material

## Installation
### Get the Code

Clone this repository:

```
git https://github.com/mattfors/code-break.git
cd code-break
```

Install local dependencies:
```
npm install
```



## Running

### Start the Server
This will start the main game server.
* Run: 
  ```
    nx serve code-break
  ```
* Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Start the Storybook Server
This will start the Storybook server for the game's UI components.
* Run:
  ```
    nx run common-ui:storybook
  ```
* Navigate to http://localhost:4400/. The app will automatically reload if you change any of the source files.




