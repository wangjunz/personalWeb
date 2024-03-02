<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
// const newMessage = ''
const texts = ['111111', 'Hello World', '一键三连呦', '火钳刘明', '助力每一个梦想', '到此一游']

const createDanmu = (text) => {
  const contain = document.getElementsByClassName('contain')[0]
  const danmu = document.createElement('span')
  danmu.innerText = text
  danmu.classList.add('danmu')
  danmu.style.top = Math.random() * (contain.clientHeight - danmu.clientHeight - 100) + 'px'
  // 设置其随机的颜色
  danmu.style.color =
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ')'
  danmu.style.position = 'absolute'
  danmu.style.right = '-100px'
  danmu.style.fontSize = '22px'
  gsap.to(danmu, {
    x: '-100vw',
    ease: 'power1.inOut',
    duration: 5,
    repeat: -1
  })
  danmu.style.animation = 'move ' + (5 + Math.random() * 5) + 's linear infinite'
  contain.appendChild(danmu)
}

const onSend = () => {
  const input = document.getElementsByClassName('input')[0]
  const inputValue = input.value
  console.log(inputValue)
  texts.push(...inputValue)
  createDanmu(inputValue)
}

// 定义一个定时器，每隔一秒创建并插入一条弹幕
let addDanmu = () => {
  const addDanmuTime = setInterval(function () {
    // 随机选择一个弹幕内容
    const text = texts[Math.floor(Math.random() * texts.length)]
    // 调用函数创建并插入弹幕
    createDanmu(text)
  }, 1000)

  setTimeout(function () {
    clearInterval(addDanmuTime)
  }, 7000)
}

onMounted(() => {
  addDanmu()
})
</script>

<template>
  <div class="messageBoard">
    <h1>留言板</h1>
    <div class="contain"></div>
  </div>

  <div class="input-wrapper">
    <button class="icon">
      <svg
        t="1707829728371"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5278"
        width="200"
        height="200"
      >
        <path
          d="M490.6 878c15.7-0.1 57.1 0.1 109.5 0.3 74.1 0.4 173.8 0.8 247.2 0.6-38.8-45.8-63.2-122.9-7.7-266.5 13.8-35.6 14.6-77.2 13.8-109.5-0.4-14.8-1.7-29.3-3.8-43.5-26.2 103.5-63.1 125.7-95.1 218.9-30.1 87.7 6.8 168.8 6.8 168.8-54.7 4.7-183.5 13.4-278.3 30.8 1.7 0 3.3 0.1 5 0.1h2.6z"
          fill="#ffffff"
          p-id="5279"
        ></path>
        <path
          d="M945.6 882.6l-3.2-2c-48.6-30.7-115.1-72.8-47.9-246.8 17.5-45.3 18.7-94.5 17.7-132.2-5.7-224.6-186-406.2-410.5-413.4-45-1.4-89.5 4.1-132.2 16.5-15.6 4.5-24.6 20.9-20.1 36.5 4.5 15.6 20.9 24.6 36.5 20.1 36.8-10.7 75.2-15.5 113.9-14.2 178.6 5.7 324.6 139.6 349.7 312.4 2.1 14.3 3.4 28.8 3.8 43.5 0.8 32.3 0 73.9-13.8 109.5-55.5 143.6-31.1 220.7 7.7 266.5-73.4 0.2-173.1-0.2-247.2-0.6-52.4-0.3-93.8-0.5-109.5-0.3h-2.6c-1.7 0-3.3-0.1-5-0.1-193.3-2.7-354.3-159.6-360.5-353.5-3.1-95.9 30.8-187.6 95.2-258.3 11-12 10.1-30.7-1.9-41.6-12-11-30.7-10.1-41.6 1.9C99.3 308.5 60 415 63.6 526.3 70.8 753.4 260.9 937 488 937h3c15.4-0.1 56.6 0.1 108.8 0.3 63.6 0.3 140.1 0.7 205.2 0.7 54.4 0 101-0.3 125.7-1 12.9-0.4 24.1-9.2 27.5-21.7 3.5-12.5-1.6-25.8-12.6-32.7z"
          fill="#ffffff"
          p-id="5280"
        ></path>
        <path
          d="M274.1 209.6c5.5 0 11-1.5 15.9-4.7 3.2-2.1 6.5-4.1 9.7-6.1 13.9-8.4 18.4-26.5 10-40.5-8.4-13.9-26.5-18.4-40.5-10-3.8 2.3-7.5 4.6-11.2 7-13.7 8.8-17.6 27.1-8.8 40.8 5.7 8.8 15.2 13.5 24.9 13.5zM250.8 530.1c0 28.7 23.3 52 52 52s52-23.3 52-52-23.3-52-52-52-52 23.3-52 52zM544.7 530.1c0-28.7-23.3-52-52-52s-52 23.3-52 52 23.3 52 52 52 52-23.3 52-52zM740.4 530.1c0-28.7-23.3-52-52-52s-52 23.3-52 52 23.3 52 52 52 52-23.3 52-52z"
          fill="#ffffff"
          p-id="5281"
        ></path>
      </svg>
    </button>
    <input
      @keyup.enter="onSend"
      placeholder="按下enter发送...."
      class="input"
      name="text"
      type="text"
    />
  </div>
</template>

<style lang="scss" scoped>
.messageBoard {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1c1c1c;
  h1 {
    font-size: 85px;
    color: #fff;
    padding-top: 5vh;
    margin-bottom: 5vh;
  }
  .contain {
    width: 80%;
    height: 70vh;

    background:
      linear-gradient(#393939, #212121) padding-box,
      linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .danmu {
      position: absolute;

      right: 100px;
      white-space: nowrap;
      font-size: 24px;
      color: white;
      transition: all ease 0.5s;
      z-index: 10;
      user-select: none;
    }
    // .message {
    //   position: relative;
    //   top: $top;
    //   left: 80%;
    //   color: #fff;
    //   font-size: 22px;
    //   margin: 10px;
    //   padding-top: 4px;
    // }
  }
}
// .container {
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// }
// textarea {
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   box-sizing: border-box;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// }

// @keyframes move {
//   from {
//     right: -50px;
//   }
//   to {
//     right: calc(100% + 200px);
//   }
// }
.danmu {
  position: absolute;

  right: 100px;
  white-space: nowrap;
  font-size: 24px;
  color: white;
  transition: all ease 0.5s;
  z-index: 10;
  user-select: none;
}
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: fixed;
  top: 92vh;
  left: 92vw;
}

.input {
  border-style: none;
  height: 50px;
  width: 50px;
  padding: 10px;
  outline: none;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  background-color: #986ce9;
  box-shadow: 0px 0px 3px #f3f3f3;
  padding-right: 40px;
  color: #fff;
}

.input::placeholder,
.input {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 250px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 3px solid #7e4fd4;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
</style>
