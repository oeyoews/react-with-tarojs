## Upload program to Wechat

`yarn build:weapp` and click upload button to wechat mini program.

## Installation

```bash
git clone https://github.com/oeyoews/react-with-tarojs
yarn install
yarn run dev:weapp
```

at last, open `wechat-devtool` to preview effects, or you can use `yarn run dev:h5` and to preview on your local browser

## Demo

![tarojs](https://i.imgur.com/ghE4Ap4.png)

- https://tarojs.surge.sh

## TODO

- wechat mini program judge need time
- backend ???
- api ???
- doublequote error lint
- vant ui
- taro ui https://taro-ui.jd.com/#/docs/icon
- setup autoformat for vscode
- [x] add tailwindcss

## bug

* hover:scale-105(may not block element)
* need disable hmr
* need install typescript manually
* on linux, this wechat-devtools, sudo cp package.nw nwjs -r(this folder is wrong)

## Question

- why use class instead of function usage for components
- out of box with ui to build wechat mini program based some websites
