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

## Setup Github Action
- currently there are 3 triggers:
  - on every push to main
  - by cron every 4 am
  - by manual trigger
- to enable github action you need to setup 3 env in menu repo > settings > secrets > action:
  - TEST_HOST
  - TEST_USERNAME
  - TEST_PASSWORD
