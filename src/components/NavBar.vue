<template>
  <nav class='navbar'>
      <!-- <router-link to="/">Product</router-link> -->
      <button @click="onclick">view Inventory Data</button>
      <form class="search-func">
        <input class="searchfunctionality" type="text" placeholder="Search" aria-label="Search" />
        <button size="lg" type="submit" outline="white">Search</button>
      </form>
      <router-link to="/">Logout</router-link>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      links: [
        {
          id: 1,
          text: 'View Inventory Data'
        },
        {
          id: 2,
          text: 'Logout'
        }
      ]
    }
  },
  methods: {
    onclick () {
      this.$router.push('/view-inventory')
      console.log('nside onclick')
      const axiosConfig = {
        baseURL: 'http://10.177.68.40:8080/',
        url: '/medicine/getMedicineList',
        method: 'get'
      }
      axios(axiosConfig)
        .then(e => {
          this.$store.dispatch('setMedicineListAction', e.data)
        })
        .catch(e => alert('NO DATA AVAILABLE'))
    }
  }
}
</script>

<style>
.navbar {
    /* margin: 10px; */
    margin-right: 15px;
    height: 50px;
    background-color: rgb(13, 188, 194);
    max-width: 100%;
    display: flex;
    justify-content: space-around;
}
.searchfunctionality {
  width: 400px;
  height: 30px;

}
</style>
