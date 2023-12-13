<template>
  <div class="navbar">
    <div class="navbar-left d-flex">
      <svg
        data-v-49e15297=""
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        class="hamburger is-active"
      >
        <path
          data-v-49e15297=""
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
        ></path>
      </svg>
      <div class="navbar-title d-flex justify-content-between">
        <span>
          <p>QLTS</p>
        </span>
        <span>/</span>
        <span>
          <p :style="{ opacity: '0.5' }">Trang chủ</p>
        </span>
      </div>
    </div>
    <div class="navbar-right d-flex">
      <div class="logo">
        <img
          src="../assets/image/logo.cpc1.png"
          alt="logo-user"
          class="logo-img"
          width="40"
          height="40"
        />
      </div>
      <div class="hello-user">
        <p>Xin chào</p>
        <p class="user-name">Võ Vũ Thân!</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}
.navbar {
  background-color: white;
  height: 50px;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 98;
}

.navbar-ti-menu-alt {
  height: 100%;
}

.navbar-title {
  margin-left: 4%;
  width: 120px;
}

.ti-menu-alt {
  width: 10px;
  height: 10px;
  padding: 0 15px;
}

.navbar-right {
  padding: 0 1.8rem;
}

.logo img {
  height: 100%;
}

.hello-user {
  padding: 5px;
  color: #606266;
}

.hello-user p {
  font-weight: 600;
  font-size: 10pt;
}

.hello-user .user-name {
  opacity: 0.8;
  font-weight: 100;
}
.navbar-left .d-flex{
  margin-top: 5px;
}
</style>
