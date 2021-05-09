<template>
  <div class="font-weight-light">
    created : {{ createdAt}}
  </div>
</template>

<script>
export default {
  props: {
    createdAt: {
      type: String,
      default: ''
    }
  }
}
</script>
