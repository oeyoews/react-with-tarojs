/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里给出了一份 uni-app /taro 通用示例，具体要根据你自己项目的目录进行配置
  // 不在 content 包括的文件内，不会生成工具类
  content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],

  corePlugins: {
    // 不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false,
  },
};
