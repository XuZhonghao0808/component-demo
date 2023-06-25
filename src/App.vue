<template>
  <div id="app">
    <router-link to="/discover">发现音乐</router-link> |
    <router-link to="/friends">关注</router-link> |
    <router-link to="/my">我的</router-link> 

    <router-view></router-view>
    <Movie></Movie>
  </div>
</template>

<script>
import Movie from './components/Movie.vue'

export default {
  name: 'App',
  components: {
    Movie
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
  margin-top: 60px;
}
</style>
