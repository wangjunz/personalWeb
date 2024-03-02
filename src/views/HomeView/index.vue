<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { onMounted } from 'vue'
import LoGo from '@/components/LoGo.vue'
import homeFirst from '@/views/HomeView/components/homeFirst.vue'
import textTransition from './components/textTransition.vue'
import AboutView from '../AboutView.vue'
import transverseCar from './components/transverseCar.vue'
// import astronautAnimation from './components/astronautAnimation.vue'
import menuTitle from './components/menuTitle.vue'
import menuView from './components/menuView.vue'
import homeBottom from './components/homeBottom.vue'

import gsap from 'gsap'
import { onMounted } from 'vue'

const ballLoop = () => {
  //背景球
  gsap.to('.left', {
    keyframes: [
      { x: '-10vh', y: '85vh', duration: 10 },
      { x: '10vh', y: '-25vh', duration: 10 }
    ],
    repeat: -1
  })
  gsap.to('.right', {
    keyframes: [
      { x: '10vh', y: '-85vh', duration: 10 },
      { x: '-10vh', y: '25vh', duration: 10 }
    ],
    repeat: -1
  })

  //wlcome文字
  gsap.to('.letter', {
    keyframes: [
      { y: '-5rem', duration: 0.5, ease: 'power1.inOut', delay: 2 },
      { y: 0, duration: 0.5, ease: 'power1.inOut', delay: 2 }
    ],
    repeat: -1
  })
  gsap.to('.maintext', {
    keyframes: [
      { y: '-8rem', duration: 0.5, ease: 'power1.inOut', delay: 2 },
      { y: 0, duration: 0.5, ease: 'power1.inOut', delay: 2 }
    ],
    repeat: -1
  })
}

//背景随鼠标上下移动而动
let prevY = 0
let isThrottled = false
const backgroundBallScroll = (event) => {
  if (isThrottled) return

  const currentY = event.clientY

  if (currentY < prevY) {
    gsap.to('.left', {
      x: '-10vh',
      y: '85vh',
      duration: 3
    })
    gsap.to('.right', {
      x: '10vh',
      y: '-85vh',
      duration: 3
    })
  } else if (currentY > prevY) {
    gsap.to('.left', {
      x: '10vh',
      y: '-25vh',
      duration: 3
    })
    gsap.to('.right', {
      x: '-10vh',
      y: '25vh',
      duration: 3
    })
  }
  prevY = currentY

  isThrottled = true

  setTimeout(() => {
    isThrottled = false
  }, 200) // 设置定时器的时间间隔
}

onMounted(() => {
  ballLoop()
})
</script>

<template>
  <div class="home" @mousemove="backgroundBallScroll">
    <div class="backgroundBall">
      <div class="left ball"></div>
      <div class="right ball"></div>
    </div>
    <LoGo></LoGo>
    <menuTitle></menuTitle>
    <homeFirst></homeFirst>

    <textTransition></textTransition>
    <AboutView ref="solarSystem"></AboutView>
    <transverseCar></transverseCar>

    <menuView></menuView>
    <homeBottom></homeBottom>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #06bdfa;
.home {
  overflow: hidden;
  .backgroundBall {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    .ball {
      filter: blur(6rem);
      position: absolute;
    }
    .left {
      width: 19rem;
      height: 35rem;
      top: -7rem;
      left: -7rem;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 37%;
      // border-radius: 86%;
      background: #06bdfa;
    }
    .right {
      width: 17rem;
      height: 20rem;
      bottom: -47rem;
      right: -10rem;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 37%;
      background: #06bdfa;
    }
  }
}
</style>
