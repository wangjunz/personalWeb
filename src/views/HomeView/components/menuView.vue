<script setup>
import { watchEffect } from 'vue'
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
import gsap from 'gsap'
const menuShown = () => {
  gsap.to('.menucontain', {
    x: '-25vw',
    duration: 2
  })
}
const menuDiaapper = () => {
  gsap.to('.menucontain', {
    x: '25vw',
    duration: 2
  })
}

watchEffect(() => {
  const isSow = menuStore.clickMenu
  if (isSow == true) {
    menuShown()
  } else {
    menuDiaapper()
  }
})

const changeClick = () => {
  menuStore.clickMenu = false
}
</script>

<template>
  <div class="menucontain">
    <div class="menuall">
      <div class="menuitem">
        <p class="englishMenu">HOME</p>
        <p class="chineseMenu">主页</p>
      </div>
      <router-link to="/More" @click="changeClick">
        <div class="menuitem">
          <p class="englishMenu">MORE</p>
          <p class="chineseMenu">更多</p>
        </div></router-link
      >
      <router-link to="/ContactMe" @click="changeClick"
        ><div class="menuitem">
          <p class="englishMenu">CONTACT</p>
          <p class="chineseMenu">联系</p>
        </div></router-link
      >
      <router-link to="/MessageBoard" @click="changeClick">
        <div class="menuitem">
          <p class="englishMenu">MESSAGE</p>
          <p class="chineseMenu">留言板</p>
        </div></router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.menucontain {
  width: 25vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -25vw;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  .menuall {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25vh;
    .menuitem {
      // width: 70%;
      margin-bottom: 5vh;
      cursor: pointer;
      &:hover {
        animation: hvr-wobble-vertical 1s infinite;
      }
      .englishMenu {
        font-size: 38px;
        font-weight: 400;
        color: white;
        font-family: Arial Rounded MT;
        letter-spacing: 2px;
        padding-bottom: 10px;
      }
      .chineseMenu {
        font-size: 18px;
        font-weight: 400;
        color: #4fc1f1;
        letter-spacing: 5px;
      }
    }
  }
}
@keyframes hvr-wobble-vertical {
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }
  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
