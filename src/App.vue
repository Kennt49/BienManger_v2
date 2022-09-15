<template>
  <VignetteNavbar></VignetteNavbar>
  <router-view class="back-img-cover" />
  <VignetteEndBar />
</template>
<script>
import VignetteNavbar from '@/components/VignetteNavbar'
import VignetteEndBar from '@/components/VignetteEndBar'

export default {
  name: 'App',
  components: {
    VignetteNavbar,
    VignetteEndBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
