<script setup>
import { useMenuStore } from '@/stores/menu'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, watchEffect } from 'vue'

const menuStore = useMenuStore()

gsap.registerPlugin(ScrollTrigger)

const backgroundColorChanged = () => {
  gsap.to('.mecontain', {
    left: '90vw',
    scrollTrigger: {
      trigger: '.mecontain',
      scrub: true,
      start: 'center center'
    }
  })
  watchEffect(() => {
    const isSow = menuStore.menuIsShow
    const luminousText = document.querySelector('.luminousText')
    const menuToggle = document.querySelector('#menuToggle')
    if (isSow == true) {
      luminousText.style.display = 'block'
      menuToggle.style.left = '80vw'
    } else {
      luminousText.style.display = 'none'
      menuToggle.style.left = '95vw'
      console.log('no')
    }
  })
}

onMounted(() => {
  backgroundColorChanged()
})
const a = () => {
  // 调用menuStore的clickMenu属性，将clickMenu属性值取反
  menuStore.clickMenu = !menuStore.clickMenu
}
</script>

<template>
  <!-- <div class="data">
    <button @click="changeMenu()">ghjkl</button>
  </div> -->
  <div class="mecontain">
    <div id="menuToggle">
      <input id="checkbox" type="checkbox" />
      <label class="toggle" for="checkbox" @click="a">
        <div class="bar bar--top"></div>
        <div class="bar bar--middle"></div>
        <div class="bar bar--bottom"></div>
      </label>
    </div>
    <div class="luminousText">
      <router-link to="/MessageBoard">
        <button class="button" data-text="Awesome">
          <span class="actual-text">&nbsp;uiverse&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.data {
  position: fixed;
  top: 0;
  left: 0;
  color: rgb(99, 13, 249);
  cursor: pointer;
  user-select: none;
}
.mecontain {
  display: flex;
  .luminousText {
    position: fixed;
    top: 4vw;
    left: 84vw;
    z-index: 999;
    button {
      --border-right: 6px;
      --text-stroke-color: rgba(255, 255, 255, 0.6);
      --animation-color: #02f1f5;
      --fs-size: 2em;
      letter-spacing: 3px;
      text-decoration: none;
      font-size: var(--fs-size);
      font-family: 'Arial';
      position: relative;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px var(--text-stroke-color);
      .hover-text {
        position: absolute;
        box-sizing: border-box;
        content: attr(data-text);
        color: var(--animation-color);
        width: 0%;
        inset: 0;
        border-right: var(--border-right) solid var(--animation-color);
        overflow: hidden;
        transition: 0.5s;
        -webkit-text-stroke: 1px var(--animation-color);
      }
      &:hover .hover-text {
        width: 100%;
        filter: drop-shadow(0 0 23px var(--animation-color));
      }
    }
  }
  #menuToggle {
    position: fixed;
    top: 4vw;
    left: 80vw;
    z-index: 999;
    #checkbox {
      display: none;
    }

    .toggle {
      position: relative;
      width: 40px;
      cursor: pointer;
      margin: auto;
      display: block;
      height: calc(4px * 3 + 11px * 2);
    }

    .bar {
      position: absolute;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: calc(4px / 2);
      background: #06bdfa;
      color: inherit;
      opacity: 1;
      transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
    }

    /***** Tornado Animation *****/

    .bar--top {
      bottom: calc(50% + 11px + 4px / 2);
      transition-property: bottom, transform;
      transition-delay: calc(0s + 0.35s) * 0.6;
    }

    .bar--middle {
      top: calc(50% - 4px / 2);
      transition-property: opacity, transform;
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    .bar--bottom {
      top: calc(50% + 11px + 4px / 2);
      transition-property: top, transform;
      transition-delay: 0s;
    }

    #checkbox:checked + .toggle .bar--top {
      transform: rotate(-135deg);
      transition-delay: 0s;
      bottom: calc(50% - 4px / 2);
    }

    #checkbox:checked + .toggle .bar--middle {
      opacity: 0;
      transform: rotate(-135deg);
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    #checkbox:checked + .toggle .bar--bottom {
      top: calc(50% - 4px / 2);
      transform: rotate(-225deg);
      transition-delay: calc(0s + 0.35s * 0.6);
    }
  }
}
</style>
