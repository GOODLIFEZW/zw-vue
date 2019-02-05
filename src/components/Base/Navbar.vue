<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
      </ul>
      <!-- 暂时先禁止提交，后续实现搜索再改回 type="submit" -->
      <form>
        <input type="search" placeholder="Search">
        <button type="button">Search</button>
      </form>
      <ul>          
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Messages</a>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>

</style>
