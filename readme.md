# webpack demo

## Intro
A demo of how to use webpack in development.

## How to start:
```
$ git clone git@github.com:iamken1204/example.webpack.git
$ cd example.webpack
# install all node dependencies
$ npm i
# run dev server at http://localhost:8080/
$ npm run live
# build compressed js
$ npm run build
```

## Scenarios
> all settings and explanation are in:
[webpack.config.js](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js)

* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L14) [source](https://github.com/iamken1204/example.webpack/tree/master/src/oneJS) Only one js file
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L15) [source](https://github.com/iamken1204/example.webpack/tree/master/src/multiJS) Multi js files
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L16) [source](https://github.com/iamken1204/example.webpack/tree/master/src/cssJS) Bundle css and js files
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L17) [source](https://github.com/iamken1204/example.webpack/tree/master/src/cssInJS) Require css file in js
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L18) [source](https://github.com/iamken1204/example.webpack/tree/master/src/onlyCSS) Bundle only css files
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L19) [source](https://github.com/iamken1204/example.webpack/tree/master/src/vue) Using Vue
* [config](https://github.com/iamken1204/example.webpack/blob/master/webpack.config.js#L20) [source](https://github.com/iamken1204/example.webpack/tree/master/src/mylib) Export custom js as a library
