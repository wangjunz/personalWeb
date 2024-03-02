<!-- eslint-disable vue/multi-word-component-names -->
<style scoped lang="scss">
.box {
  position: relative;
  display: flex;
  overflow: scroll;
  height: 100vh;

  .item {
    position: absolute;
    flex-shrink: 0;
    &:hover {
      z-index: 10;
    }
    &:nth-child(1) {
      padding-top: 30vh;
    }
    &:nth-child(2) {
      padding-top: 19vh;
      // z-index: 1;
      position: absolute;
      top: 0vh;
      left: 17vw;
    }
    &:nth-child(3) {
      padding-top: 30vh;
      position: absolute;
      top: 0vh;
      left: 34vw;
    }
    &:nth-child(4) {
      // padding-top: 30vh;
      position: absolute;
      top: 53vh;
      left: 50vw;
    }
    &:nth-child(5) {
      position: absolute;
      top: 12vh;
      left: 45vw;
    }
    &:nth-child(6) {
      top: 15vh;
      left: 68vw;
    }
    &:nth-child(7) {
      top: 37vh;
      left: 82vw;
    }

    &:nth-child(8) {
      top: 26vh;
      left: 97vw;
    }
    &:nth-child(9) {
      top: 4vh;
      left: 116vw;
    }
    &:nth-child(10) {
      top: 25vh;
      left: 133vw;
    }
    &:nth-child(11) {
      top: 49vh;
      left: 149vw;
    }
    &:nth-child(12) {
      top: 45vh;
      left: 149vw;
    }
    &:nth-child(13) {
      top: 26vh;
      left: 166vw;
    }

    &:nth-child(14) {
      top: 13vh;
      left: 185vw;
    }
    &:nth-child(15) {
      top: 32vh;
      left: 192vw;
    }
    .one {
      width: 23vw;
    }
    .two {
      width: 20vw;
    }
    .three {
      width: 15vw;
    }
    .four {
      width: 27vw;
    }
    .five {
      width: 22vw;
    }
    .six {
      width: 23vw;
    }
    .seven {
      width: 25vw;
    }
    .eight {
      height: 23vw;
    }
    .nine {
      height: 43vw;
    }
    .ten {
      width: 25vw;
    }
    .eleven {
      height: 40vh;
    }
    .twelve {
      height: 23vw;
    }
    .thirteen {
      height: 23vw;
    }
    .fourteen {
      width: 15vw;
    }
    .fourteen {
      height: 23vw;
    }
    img {
      width: 350px;
      opacity: 0.8;
      filter: grayscale(100%);
      filter: gray;
      &:hover {
        filter: none;
        opacity: 1;
        z-index: 999;
        overflow: hidden;
      }
      &:hover .item {
        z-index: 999;
      }
    }
  }
}
</style>

<template>
  <div class="box" @wheel="handleMouseWheel">
    <div class="item" v-viewer><img class="one" src="../../assets/photo/1.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="two" src="../../assets/photo/2.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="three" src="../../assets/photo/3.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="four" src="../../assets/photo/4.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="five" src="../../assets/photo/5.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="six" src="../../assets/photo/6.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="seven" src="../../assets/photo/7.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="eight" src="../../assets/photo/8.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="nine" src="../../assets/photo/9.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="ten" src="../../assets/photo/10.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="eleven" src="../../assets/photo/11.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="twelve" src="../../assets/photo/12.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="thirteen" src="../../assets/photo/13.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="fourteen" src="../../assets/photo/14.jpg" alt="" /></div>
    <div class="item" v-viewer><img class="fourteen" src="../../assets/photo/15.jpg" alt="" /></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const levelScroll = () => {
  // 获取.box元素
  let box = document.querySelector('.box')
  // 为.box元素添加鼠标滚轮事件
  box.addEventListener('wheel', (event) => {
    // 阻止默认事件
    event.preventDefault()
    // 设置.box元素的scrollLeft属性，使其实现滚动效果
    box.scrollLeft += event.deltaY
  })
}

onMounted(() => {
  levelScroll()
})
</script>
