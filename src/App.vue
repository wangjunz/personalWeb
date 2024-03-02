<script setup>
import { RouterView } from 'vue-router'
import LoadingCon from './components/LoadingCon.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGetTimeStore } from '@/stores/gettime'

//从pinia获取更新时间函数
const getTimeStore = useGetTimeStore()

//转场动画
const router = useRouter()
const loading = ref(null)
const checkLoading = () => {
  let timer = setInterval(() => {
    if (document.readyState) {
      clearInterval(timer)
      loading.value.goOut()
    }
  })
}

onMounted(() => {
  checkLoading()
  router.beforeEach((to, from, next) => {
    loading.value.goIn(next)
    //进入ContactMe页面时调用更新时间函数
    if (to.name == 'ContactMe') {
      getTimeStore.updateTime()
    }
    //离开ContactMe页面时取消更新时间函数
    if (from.name == 'ContactMe') {
      getTimeStore.cancelTime()
    }
  })
})
</script>

<template>
  <LoadingCon ref="loading" :checkLoading="checkLoading" />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
