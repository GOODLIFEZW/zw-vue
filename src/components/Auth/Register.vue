<template>
  <div>
    <div class="register-wrap">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="text" placeholder="请输入邮箱" v-model="email">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="register">注册</button>
      <span>
        <router-link to="/login">
          已有账号？马上登录
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      showTishi: false,
      tishi: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const data = {
        'username': this.username,
        'email': this.email,
        'password': this.password
      }
      axios.post('http://localhost:5000/register', data)
        .then(function (res) {
          console.log(res)
          this.$router.push('/login')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register-wrap
    text-align center
    input
      display block
      width 250px
      height 40px
      line-height 40px
      margin 0 auto
      margin-bottom 10px
      outline none
      border 1px solid #888
      padding 10px
      box-sizing border-box
    p
      color red
    button
      display block
      width 250px
      height 40px
      line-height 40px
      margin 0 auto
      border none
      background-color #41b883
      color #fff
      font-size 16px
      margin-bottom 5px
    span
      cursor pointer
    span:hover
      color #41b883
</style>
