<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
h3 span{
  font-size: 0.92em;
}

body{
  background-color:white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer{
  margin-top:50px;
}
#Japanese{
  display: none;
}

</style>
