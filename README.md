# Twitch integration

## Website

You can run the website locally by running the following command:

```
npm run dev
```

Then you can visit the website at [http://localhost:3000](http://localhost:3000).

Or go to the deployed version at [Website](https://extract-data-two.vercel.app/).

## Node app

To extract data from input files, you can put your files in the `/apps/node/inputs` folder and run the following command:

```
yarn start
```

The files should be txt files.
You will see the output in the console output in this format:

```
Contribution period:  { start: [ 'January 1', 'July 1' ], end: [ 'June 30', 'December 31' ] }
Contributions { min: [ '1%' ], max: [ '15%' ] }
```

## Turborepo Repository

### Apps and Packages

- `node`: a [nodeje](https://nodejs.org) app, this node application is used to extract the unstructure data from input files.
- `web`: a [Next.js](https://nextjs.org) app, this is the web applitation for testing openID integration, I am using Twitch.
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd extrat-data
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd extrat-data
yarn run dev

```
