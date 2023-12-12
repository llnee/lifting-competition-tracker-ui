<template>
  <div id="nav">
    <img src="https://www.logolynx.com/images/logolynx/9f/9ffcc0e151c929f977031616805774b6.png" class="logo">
<!--    <router-link to="/">Home</router-link>-->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  display: inline-flex;
}

.logo{
  width: 50%;
  height: fit-content;
}
</style>
