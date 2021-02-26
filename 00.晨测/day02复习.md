# day02 复习

## 事件处理

- v-on:eventName="handleClick"
  - 回调函数的参数：event
- v-on:eventName="handleClick()"
  - 回调函数的参数：无
- v-on:eventName="handleClick(xxx)"
  - 回调函数的参数：xxx
- v-on:eventName="handleClick(xxx, $event)"
  - 回调函数的参数：xxx, event
- v-on:eventName="num++"
  - 不需要设置回调函数， num++ 就是要执行的语句
  - 当函数语句只有一条时，可以使用

- 事件修饰符
  - @click.prevent.stop="xxx"
  - .prevent 禁止事件默认行为
  - .stop 阻止事件冒泡

- 按键修饰符
  - @keyup.13="xxx"
  - @keyup.enter="xxx"

## 生命周期函数

- 组件从创建到销毁过程中自动触发的函数

- 挂载阶段（初始化）
  - beforeCreate 在数据代理之前触发，所以不能通过 this 访问 data、methods、computed 等数据
  - created 在数据代理之后
  - beforeMount
  - mounted 
    - 发送请求、设置定时器、绑定自定义事件等一次性任务
    - 此时才能通过 ref 获取 DOM 元素
- 更新阶段
  - beforeUpdate
  - updated
- 卸载阶段
  - beforeDestroy 清除定时器、解绑事件等收尾工作（防止内存泄漏）
  - destroyed

## 过渡和动画

- <transition name="xxx"><p v-show="xxx">xxx</p></transition>
  - 默认样式：
    - 隐藏到显示 v-enter/v-enter-active/v-enter-to
    - 显示到隐藏 v-leave/v-leave-active/v-leave-to
  - 加上 name 属性：xxx-enter/xxx-enter-active/xxx-enter-to

## 过滤器

- 用来格式化数据（时间）

- 局部过滤器

```js
// 定义过滤器
{
  filters: {
    formatDate(value, str) {
      return dayjs(value).format(str);
    }
  }
}
// 使用过滤器
{{time | formatDate('YYYY-MM-DD HH:mm:ss')}}
```

- 全局过滤器

```js
// 定义过滤器
Vue.filter('formatDate', function(value, str) {
    return dayjs(value).format(str);
  })
}
// 使用过滤器
{{time | formatDate('YYYY-MM-DD HH:mm:ss')}}
```

## 指令

- v-model
- v-bind
- v-if / v-else / v-else-if
- v-show
- v-on
- v-for

- v-text 用于显示文本内容 textContent、innerText
- v-html 用于显示html内容 innerHTML
- v-cloak 用于防止闪现（从插值语法变成真正数据），配置 [v-cloak]{ display: none; }
- v-pre 显示最原始的内容，不会被 Vue 解析
- v-once 只被 Vue 解析一次（只渲染一次）

- 自定义局部指令

```js
{
  directives: {
    'upper-text': function (el, binding) {
      el.textContent = binding.value.toUpperCase();
    }
  }
}
```

- 自定义全局指令

```js
Vue.directive("upper-text", function (el, binding) {
  el.textContent = binding.value.toUpperCase();
});
```

## ref

- 用来获取 DOM 元素或者组件实例对象

```js
// 设置ref
<input ref="name" />;
// 获取ref的值
this.$refs.name;
```

## 响应式
- 当你更新数据的时候，数据发生了变化，同时用户界面也发生了变化，这个过程叫做响应式
- 这个数据叫做响应式的数据

- 在Vue中，data中所有数据都是响应式的
- 注意：如果后面给data中数据新添加属性，那它就不是响应式的
- 如果真需要添加
  - 对象：this.$set(对象, key, value)
  - 数组：this.xxx.push(新数据) 