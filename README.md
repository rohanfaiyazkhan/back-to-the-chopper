# Back to the chopper
Game bootstrapped with js13k Webpack Starter

## What is it?

This project aims to be a foundation for an entry for the [js13k](http://js13kgames.com/) game competition. 

## Get started

The first thing you need to do is make sure you have [node.js](https://nodejs.org/en/download/current/) installed. Then clone the project and in the root directory run the following command:

```
yarn
```

This should install all the required dependencies for developing the project. After the installation finishes you will be able to run the included yarn scripts.

## How can I start the development server?

After going through the installation just run the following command:

```
yarn start
```

This will setup a server listening at `http://localhost:8080/`.

## Building the output bundle for submission

This project provides a yarn script for building your application. Just run:
```
yarn build
```

This will generate two files `index.html` and `build.zip` both located in the `dist/` folder. The zip file contains only the generated `index.html`. The output from the command also tells you how large is the generated zip file.

## Resources

1. Webpack [https://webpack.js.org/](https://webpack.js.org/)
