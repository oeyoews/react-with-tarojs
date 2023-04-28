## Upload program to Wechat

- `yarn build:weapp` and click upload button to wechat mini program.
- and login mp.weixin.app.com to upload app again
- and need release after checkout(https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=1325454370&lang=zh_CN)

## Installation

```bash
git clone https://github.com/oeyoews/react-with-tarojs
yarn install
yarn run dev:weapp
```

at last, open `wechat-devtool` to preview effects, or you can use `yarn run dev:h5` and to preview on your local browser

## Demo

![tarojs](https://i.imgur.com/ghE4Ap4.png)
![tarojs](https://i.imgur.com/uoJwR0y.png)

- https://tarojs.surge.sh

## TODO

- domain(temp: not check for details setinggs or use h5)
- how to remove taro after border
- how to set font size
- useeffect, usestate, react hooks
- wechat mini program judge need time
- backend ???
- api ???
- doublequote error lint
- vant ui https://antmjs.github.io/vantui/main/#quickstart?target=%E6%B3%A8%E6%84%8F
- taro ui https://taro-ui.jd.com/#/docs/icon
- setup autoformat for vscode
- check some wechat documentation about wechat mini program, such relative community
- [x] add tailwindcss

## bug

- auto compile wechat app
- hover:scale-105(may not block element)
- need disable hmr
- need install typescript manually
- on linux, this wechat-devtools, sudo cp package.nw nwjs -r(this folder is wrong)

## Question

- why use class instead of function usage for components
- out of box with ui to build wechat mini program based some websites

## Devtools

- https://github.com/msojocs/wechat-web-devtools-linux/releases/tag/continuous

## use windicss intellisense

## better tailwindcss

- https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin#%E5%8E%9F%E7%90%86%E7%AF%87

## taro

### router

- https://nervjs.github.io/taro-docs/docs/router/
