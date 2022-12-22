# vue-router-back
If there is a previous page, go back to the previous page, otherwise jump to the specified page.

Example:
eg1: Not using vue-router-back
entering the `home page` for the first time => `$router.push('/details')` => `$router.back()` => back to `home page`
entering the `details page` for the first time => `$router.back()` => **can't back**

eg1: Use vue-router-back
entering the `home page` for the first time => `$router.push('/details')` => `$router.back('/list')` => back to `home page`
entering the `details page` for the first time => `$router.back('/list')` => **back to `list page`**


## Install

```bash
npm install vue-router-back --save-dev
# or
yarn add vue-router-back -D
```

## Usage

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

## Examples

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
