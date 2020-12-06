<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <nav class="nav">
      <router-link to="/user">User</router-link>
      <router-link to="/">Posts</router-link>
    </nav> -->
    <router-view />
    <!-- <User /> -->
    <!-- <Posts /> -->
    <!-- <AddPost /> -->
    <!-- <Main /> -->

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

}
</script>

<style>
html{
  font-size: 100%;
}
  img{
    display: block;
    margin: 0 auto;
    width: 8rem;
    height: 8rem;
  }
  .nav{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 20rem;
  }
</style>
