# day04

## 自定义事件

- 用来组件间通信（子 --> 父）
- 注意：给某个组件绑定，就只有这个组件可以触发
- 使用：

  - 绑定事件

    1. `<Child @事件名称="事件回调函数" />`
    2. `<Child ref="xxx" />` （通过 this.$listeners 获取不到）

    ```js
    mounted() {
      this.$refs.xxx.$on(事件名称, 事件回调函数)
    }
    beforeDestroy() {
      // 解绑事件
      this.$refs.xxx.$off(事件名称, 事件回调函数);
    },
    ```

  - 触发事件

    1. `this.$emit(事件名称, 参数 1, 参数 2...)`
    2. `this.$listeners.事件名称(参数 1, 参数 2...)`

- 组件实例对象上的方法：
  - `$on(事件名称, callback)` 绑定持久事件
  - `$once(事件名称, callback)` 绑定一次性事件
  - `$off(事件名称, callback)` 解绑事件
  - `$emit(事件名称, 参数 1, 参数 2...)` 触发事件

## 全局事件总线

- 适用于任意组件通信
- 通常用于兄弟和祖孙组件，父子还是用 props
- 使用：

  1. 给 Vue 的原型上添加全局事件总线对象

     ```js
     // 方式一
     Vue.prototype.$globalEventBus = new Vue();
     // 方式二
     beforeCreate() {
       Vue.prototype.$globalEventBus = this;
     }
     ```

  2. 使用

  - 绑定事件（接受数据方）

    ```js
    mounted() {
      this.$globalEventBus.$on(事件名, 事件回调函数)
    }
    ```

  - 触发事件（发送数据方）
    ```js
    this.$globalEventBus.$emit(事件名, 参数1, 参数2...)
    ```
