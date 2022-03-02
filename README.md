# react-microservice

## Dependencies
- [Node.JS](https://nodejs.org/en/)
- [USWDS UI Components](https://designsystem.digital.gov/)
- [RxJS Reactive Extensions](https://rxjs.dev)

## Testing Frameworks 
- [Jest JS](https://jestjs.io/) 
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

## Language:
- [Typescript](https://www.typescriptlang.org/) 

## To setup the application
1. Create a local `.env` file

    ```BASH
    cp ./env.example .env
    ```
2. Follow the installation step below
3. Follow the start step below 

---

### To install the application

```BASH
yarn install
```

<p align="center">--or with npm--</p>

```BASH
npm install
```

### To start the application

```BASH
yarn run start
```

<p align="center">--or with npm--</p>

```BASH
npm run start
```

### To run unit tests
```BASH
yarn run test:unit
```

<p align="center">--or with npm--</p>

```BASH
npm run test:unit
```

### To view code coverage
* open `coverage/locov-report/src/index.html` in your browser

### To run linter (and fix linting errors)
```BASH
yarn run lint --fix
```

<p align="center">--or with npm--</p>

```BASH
npm run lint --fix
```