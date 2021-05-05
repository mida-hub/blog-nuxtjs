<template>
  <div class="blog-title-wapper">
    <img class="blog-title-img" src="@/assets/tomato.png">
    <h1 class="blog-title-name">
      <router-link
        style="text-decoration: none; color: inherit;"
        to="/"
      >
        とまとエンジニア日記
      </router-link>
    </h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .blog-title-wapper{
    display: flex;
    justify-content: center; 
    height: 35px;
    margin: 10px;
  }

  .blog-title-name{
    margin: -4px;
  }

  .blog-title-img{
    float: left;
    width: 35px;
  }
</style>

