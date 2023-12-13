<template>
  <NavBar class="navbar"></NavBar>
  <div class="middle d-flex">
    <div class="middle-sidebar">
      <SideBar class="sidebar"></SideBar>
    </div>
    <div class="middle-content">
      <router-view class="router-view"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import NavBar from './NavBar.vue'
export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>


<style scoped>
.navbar {
  width: calc(100% - 210px);
}

.home-page {
  top: 50px;
}

.middle {
    height: 100vh;
}

.middle-sidebar {
    height: 100%;
}


.sidebar {
    height: 100%;
}

.middle-content {
  position: relative;
  margin-top: 50px;
  width: 100vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  background-color: #eee;
  overflow: hidden;
    overflow-y: scroll;
}

.router-view{
    background-color: #fff;
}
</style>