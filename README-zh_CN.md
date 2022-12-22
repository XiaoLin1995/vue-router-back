# vue-router-back
如果有上一页则返回上一页，没有则跳转到指定页面。

示例：
eg1: 未使用 vue-router-back
首次进入页面为 `home page` => `$router.push('/details')` => `$router.back()` => 返回到 `home page`
首次进入页面为  `details page` => `$router.back()` => **不能返回**

eg1: 使用 vue-router-back
首次进入页面为  `home page` => `$router.push('/details')` => `$router.back('/list')` => 返回到 `home page`
首次进入页面为  `details page` => `$router.back('/list')` => **返回到 `list page`**


## 安装

```bash
npm install vue-router-back --save-dev
# or
yarn add vue-router-back -D
```

## 使用

### vue2
```js
// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouterBack from 'vue-router-back'

Vue.use(VueRouter)

const routes = [
  // ...
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default createRouterBack(router)
```

### vue3

```js
// router.js
import { createRouter, createWebHistory } from 'vue-router'
import createRouterBack from 'vue-router-back'

const routes = [
  // ...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default createRouterBack(router)
```

## 示例

```html
<template>
  <button @click="handleClick">Back</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.back('/users/posva#bio')
      this.$router.back({ path: '/users/posva', hash: '#bio' })
      this.$router.back({ name: 'users', params: { username: 'posva' }, hash: '#bio' })

      this.$router.back({ hash: '#bio' })
      this.$router.back({ query: { page: '2' } })
      this.$router.back({ params: { username: 'jolyne' } })
    }
  }
}
</script>
```


## License

MIT
