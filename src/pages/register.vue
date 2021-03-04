<template>
  <div id = "maindiv" @click="clickOnWindow">
    <div class="headcont">
        Medicine Inventory
    </div>
     <div class="cont">
      <div class="cont1"></div>
      <div class="cont2">
          <h3>Register as an Employee or Admin</h3>
          <input type="text" v-model="name" placeholder="Name" name="name" class="input-css"><br>
          <input type="email" v-model="username" placeholder="Email-id" name="username" class="input-css"><br>
          <input type="password" v-model="password" placeholder="password" name="password" class="input-css"><br>
          <input type="password" v-model="confirmPassword" @keyup="mismatch" placeholder="Confirm Password" name="confirmpassword" class="input-css"><br>
          <div class="dropdown">
              <select id = "mySelect" @change="changeUrl" >
                <option>Select User role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
          </div>
          <button v-on:click="onsubmit()">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'register',
  data () {
    return {
      path: ''
      // register_username: '',
      // register_password: '',
      // register_name: '',
      // register_cpassword: ''
    }
  },
  computed: {
    ...mapGetters(['getRegUser', 'getRegPassword', 'getRegName'])
  },
  methods: {
    validate () {
      if (!this.name) {
        alert('Please Fill your Name')
        return false
      } else if (!this.username) {
        alert('Please Fill your Email id')
        return false
      } else if (this.password !== this.confirmPassword) {
        alert('password Mismatch')
        return false
      } else {
        return true
      }
    },
    onsubmit () {
      if (this.validate()) {
        const axiosConfig = {
          url: '/register-as-' + this.path,
          baseURL: `http://10.177.68.30:${this.path === 'employee' ? '8080' : '8081'}`,
          method: 'Post',
          data: {
            username: this.username,
            password: this.password,
            name: this.name
          }
        }
        axios(axiosConfig)
          .then(e => console.log(e.data))
          .catch(e => console.log(e))
      }
      var x = document.getElementById('mySelect')
      if (x.value === 'admin') this.$router.push('/')
      else if (x.value === 'employee') this.$router.push('/')
    },
    changeUrl () {
      var x = document.getElementById('mySelect')
      this.path = x.value
    }
  }
}
</script>

<style>
.headcont{
    height: 50px;
    background-color: #c2d4dd;
    display: flex;
    padding: 10px 10px;
    justify-content:space-between;
}
body{
    margin:0;
    padding:0;
    background-color: #b0aac0;
}
.cont{
    display:flex;
}
.cont1{
    width: 40%;
    height: 80vh;
}
.cont2{
    width: 60%;
    height: 80vh;
    border: 2px solid black;
    margin-right: 5%;
    margin-top: 2%;
}

</style>
