TEST CYPRESS
============

## Install
- copy `cypress.env.json.example` into `cypress.env.json` , then edit accordingly
- `npm install` or `pnpm install`

## How to use

```sh
# open cypress launchpad
$ npm run cy:open

# running specific test
$ npm run cy:run -- --spec "cypress/e2e/sidebar-v1.cy.js"
```
