<template>
  <div class="blog-footer">
    <small>&copy; とまとエンジニア日記 {{ new Date().getFullYear() }}</small>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .blog-footer{
    text-align: center;
    height: 50px;
  }
</style>
