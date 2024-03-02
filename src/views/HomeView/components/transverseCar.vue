<template>
  <div class="scrollbox">
    <div class="scrollbox_container">
      <div class="scrollbox_container_card">
        <div class="introduce">
          <p>熟练掌握HTML5，CSS3，ES6等前端基础技术，可快速构建页面</p>
          <p>熟练掌握VUE全家桶，可使用vue + ts开发</p>
        </div>

        <img class="scc_city scc_city1" src="../../../assets/imgs/city.svg" />
        <img class="scc_truck scc_truck1" src="../../../assets/imgs/truck.svg" />
      </div>
      <div class="scrollbox_container_card">
        <div class="introduce">
          <p>熟练掌握uniapp,拥有独立开发小程序经验，能使用uniCloud开发接口</p>
          <p>熟练Element Plus、Vant、Uview等前端UI库的使用</p>
        </div>

        <img class="scc_city scc_city2" src="../../../assets/imgs/city.svg" />
        <img class="scc_truck scc_truck2" src="../../../assets/imgs/truck.svg" />
      </div>
      <div class="scrollbox_container_card">
        <div class="introduce">
          <p>熟悉Git协作开发，掌握Vite构建工具</p>
          <p>熟练使用GSAP，擅长页面动画开发</p>
        </div>

        <img class="scc_city scc_city3" src="../../../assets/imgs/city.svg" />
        <img class="scc_truck scc_truck3" src="../../../assets/imgs/truck.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const a = () => {
  const scrollbox = {
    container: document.querySelector('.scrollbox_container'),
    cards: [...document.querySelectorAll('.scrollbox_container_card')],
    trucks: [...document.querySelectorAll('.scc_truck')],
    citys: [...document.querySelectorAll('.scc_city')],
    trigger_distance: 0,
    border_distance: 0,
    distance: 0,
    resize() {
      let _scrollbox = document.querySelector('.scrollbox')
      _scrollbox.style.height = `${this.container.offsetWidth}px`
      this.trigger_distance = _scrollbox.offsetTop
      this.border_distance = _scrollbox.offsetTop + _scrollbox.offsetHeight - innerHeight
    },
    move() {
      if (scrollY >= this.trigger_distance && scrollY <= this.border_distance) {
        this.distance = scrollY - this.trigger_distance
        this.container.style.transform = `translateY(${this.distance}px)`
        let distance_x =
          (this.distance / (this.border_distance - this.trigger_distance)) *
          (this.container.offsetWidth - innerWidth)
        for (let i = 0; i < this.cards.length; i++) {
          this.cards[i].style.transform = `translateX(${-distance_x}px)`
          this.trucks[i].style.transform = `translateX(${distance_x * 2.2}px)`
          this.citys[i].style.transform = `translateX(${distance_x * 0.8}px)`
        }
      }
    }
  }
  scrollbox.resize()
  window.addEventListener('resize', () => {
    scrollbox.resize()
  })
  window.addEventListener('scroll', () => {
    scrollbox.move()
  })
}
onMounted(() => {
  a()
})
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 2vmin;
}

p,
img {
  pointer-events: none;
  user-select: none;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.scrollbox {
  justify-content: start;
  align-items: start;
  width: 100%;
  overflow: hidden;
  // background-color: #858282;
}

.scrollbox_container {
  justify-content: start;
  height: 100vh;
  flex-shrink: 0;
}

.scrollbox_container_card {
  position: relative;
  width: 52vw;
  height: 70vh;
  background-color: #f7f2f2;
  border-radius: 5vh;
  margin-left: 5vh;
  flex-shrink: 0;
  overflow: hidden;
}

.scrollbox_container_card p {
  font-size: 1vw;
  font-weight: 600;
  padding-bottom: 2vh;
}
.introduce {
  flex-direction: column;
}
.scc_city {
  position: absolute;
  bottom: -8vh;
  height: 335%;
  opacity: 0.7;
}

.scc_truck {
  position: absolute;
  bottom: 0vh;
  height: 10vh;
}

.scc_city1,
.scc_truck1 {
  left: 0;
}

.scc_city2,
.scc_truck2 {
  left: calc(-100% + -5rem);
}

.scc_city3,
.scc_truck3 {
  left: calc(-200% + -10rem);
}
</style>
