<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>
<template>
  <div class="bottom">
    <div class="bottommenu">
      <p class="bmItem">HOME</p>
      <router-link to="/More">
        <p class="bmItem">MORE</p> </router-link
      ><router-link to="/ContactMe">
        <p class="bmItem">CONTACT</p>
      </router-link>
      <router-link to="/MessageBoard">
        <p class="bmItem">MESSAGE</p>
      </router-link>
    </div>
    <div class="qrcode">
      <p>wangjunzhi1220@163.com</p>
      <img src="../../../assets//imgs//qrcode.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottom {
  width: 90%;
  margin: 0 auto;
  height: 10vh;
  user-select: none;
  display: flex;
  justify-content: space-between;
  border-top: 3px solid #131212;
  .bottommenu {
    display: flex;
    padding-top: 1vh;
    .bmItem {
      font-family: Arial Rounded MT;
      font-size: 1.5rem;
      color: var(--theme_black);
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      margin-right: 1rem;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        color: #666363;
        transform: translateY(3px);
      }
    }
  }
  .qrcode {
    display: flex;
    p {
      line-height: 6vh;
      font-family: Arial Rounded MT;
      font-size: 1.1rem;
      padding-right: 1vw;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>
