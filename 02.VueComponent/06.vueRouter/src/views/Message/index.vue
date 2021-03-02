<template>
  <div>
    <!-- 
      路由传参的方式：
        1. params
          - 配置路由
            {
              path: 'xxx/:id'
            }
          - 路由链接
            <router-link :to="/xxx/1">xxx</router-link>  
          - 子路由使用
            this.$route.params.id
        
        2. query
          - 路由链接
            <router-link :to="/xxx?key=value">xxx</router-link>  
          - 子路由使用
            this.$route.query.key 

        3. props
          将params或query参数以props方式传递到组件内
          优点：可以通过this直接使用，简单方便
          - 配置路由
            {
              props($route) {
								return {
									...$route.query,
									...$route.params,
								};
							},
            }
          - 子路由声明接受props
            props: ['xxx']
          - 子路由使用
            this.xxx    

        4. 命名路由
          - 配置路由
            {
              name: 'xxx'
            }
          - 路由链接
            <router-link :to="{
              name: 'xxx', // 跳转到哪个命名路由
              params: {  }, // params参数
              query: {  }, // query参数
            }">xxx</router-link>    
          - 子路由使用
            this.$route.params
            this.$route.query

        5. 通过router-view给显示的路由组件传递公共参数
          - 配置
             <router-view xxx="xxx"></router-view>
          - 子路由声明接受props
            props: ['xxx']
          - 子路由使用
            this.xxx   
     -->
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link :to="`/home/message/detail/${message.id}?name=jack&age=18`">{{
          message.title
        }}</router-link> -->

        <!-- <router-link
          :to="{
            path: `/home/message/detail/${message.id}`,
            params: { id: message.id },
            query: { name: 'jack', age: 18 },
          }"
        >{{ message.title }}</router-link> -->

        <router-link
          :to="{
            name: 'Detail', // 跳转到哪个命名路由
            params: { id: message.id },
            query: { name: 'jack', age: 18 },
          }"
          >{{ message.title }}</router-link
        >
        <button @click="push(message.id)">push</button>
        <button @click="replace(message.id)">replace</button>
      </li>
    </ul>
    <router-view sex="男"></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "message001" },
        { id: 3, title: "message003" },
        { id: 5, title: "message005" },
      ];
    }, 2000);
  },
  methods: {
    push(id) {
      // this.$router.history.push(`/home/message/detail/${id}`);
      // 编程式导航
      this.$router.history.push({
        name: "Detail",
        params: {
          id,
        },
        query: { name: "jack" },
      });
    },
    replace(id) {
      this.$router.history.replace({
        name: "Detail",
        params: {
          id,
        },
        query: { name: "jack" },
      });
    },
  },
};
</script>

<style>
</style>