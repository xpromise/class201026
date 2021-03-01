<template>
  <div>
    <p>App..</p>
    <!-- 
      插槽：用来父子组件间通信（通信的是标签数据）

        1. 默认插槽
          - 父组件给子组件设置要传递的标签数据
            <Child>xxx</Child>
          - 子组件声明使用
            <slot />  
        2. 具名插槽
          - 父组件给子组件设置要传递的标签数据
            <Child><template v-slot:xxx>xxx</template></Child>
            <Child><template #xxx>xxx</template></Child>
          - 子组件声明使用
            <slot name="xxx"/>
        3. 作用域插槽
          - 父组件给子组件设置要传递的标签数据
            <Child><template v-slot:xxx="{ yyy }">xxx</template></Child>
          - 子组件声明使用
            <slot name="xxx" :yyy="yyy" /> 
     -->

    <A>
      <!-- 默认插槽 -->
      <p>这是一段文字</p>
      <button>按钮</button>
    </A>

    <B>
      <!-- 具名插槽/命名插槽 -->

      <!-- 旧语法 -->
      <!-- <header slot="header">header...</header>

      <template slot="footer">
        <div>div...</div>
        <footer>footer...</footer>
      </template> -->

      <!-- 新语法: v-slot -->
      <!-- <template v-slot:header>
        <header>header...</header>
      </template>

      <template v-slot:footer>
        <div>div...</div>
        <footer>footer...</footer>
      </template> -->

      <!-- 简写 -->
      <template #header>
        <header>header...</header>
      </template>

      <template #footer>
        <div>div...</div>
        <footer>footer...</footer>
      </template>
    </B>

    <!-- 作用域插槽： -->
    <C>
      <!-- <template #content="slotProps">
        <p>count的值：{{ slotProps.count }}</p>
      </template> -->

      <!-- { count } 解构赋值语法 -->
      <template #content="{ count }">
        <p>count的值：{{ count }}</p>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  name: "App",
  components: {
    A,
    B,
    C,
  },
};
</script>

<style>
</style>