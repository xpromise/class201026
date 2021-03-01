module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  // 按需加载组件的样式
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}