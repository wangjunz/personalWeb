<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'

const text = 'The page you were looking for could not be found.'
const visibleText = ref([])

const startAnimation = () => {
  visibleText.value = []
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      visibleText.value[i] = text[i]
    }, i * 100) // 100ms 为每个字符之间的延迟
  }
}
onMounted(() => {
  startAnimation()
})
</script>

<template>
  <div class="notfound">
    <h1>404 - Page Not Found</h1>
    <transition-group name="fade" tag="p">
      <span v-for="(char, index) in visibleText" :key="index">
        {{ char }}
      </span>
    </transition-group>
    <router-link to="/"> <button>Go Home</button></router-link>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.notfound {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 52px;
    color: black;
    font-weight: 900;
    padding-bottom: 3vh;
  }
  p {
    font-size: 30px;
    color: #797f88;
    font-weight: 500;
    padding-bottom: 2vh;
  }
  button {
    width: 6vw;
    height: 5vh;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    &:hover {
      background-color: #f3f4f6;
    }
  }
}
</style>
