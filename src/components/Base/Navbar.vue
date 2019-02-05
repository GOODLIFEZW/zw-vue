<template>
  <div class="container">
    <div class="nav">
      <img src="../../assets/logo.png" class="nav-img">
      Design by zwalker
      <router-lick to="/">Home</router-lick>
      <input type="text" placeholder="Search">
      <button>Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>
  .nav
    background #cfd3cf
  .nav-img
    width 30px
    height 30px
</style>
