# Shared App Shell, State, Routing and Components Example

This example demos a basic host application loading remote component.

- `main` is the App Shell
- `dashboard` - standalone application
- `flights` - standalone application

# Running Demo

First you need to initialise each micro-frontend with the `npm i` command

Run `yarn start` or `npm start`. This will build all the apps `main`, `dashboard`, `flights` on different ports as shown below

- [localhost:3000](http://localhost:3000/) (HOST) - `main`
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE) - `dashboard`
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE) - `flights`
