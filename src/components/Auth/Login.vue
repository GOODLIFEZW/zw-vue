<template>
  <div>
    <div class="login-wrap">
      <h3>登录</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入邮箱" v-model="email">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span>
        <router-link to="/register">
          没有账号？马上注册
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      showTishi: false,
      tishi: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = {
        'email': this.email,
        'password': this.password
      }
      axios.post('http://localhost:5000/login', data)
        .then(function (res) {
          console.log(res)
          this.$router.push('/home')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-wrap
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
