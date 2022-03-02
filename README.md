# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Add typings for Snippyly elements

Add `declarations.d.ts` file in `src/types` folder and paste the code below:

```ts
declare namespace JSX {
    interface IntrinsicElements {
        "snippyly-presence": any;
        "snippyly-cursor": any;
    }
}
```

## Add typings for Snippyly sdk

Add `snippyly.d.ts` file in `src/types` folder and paste the code below:

```ts
declare module '@snippyly/sdk' {
    class Snippyly { static [key: string]: any; static [key: string]: () => any }
    export { Snippyly }
}
```