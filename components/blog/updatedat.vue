<template>
  <div class="font-weight-light">
    updated : {{ updatedAt}}
  </div>
</template>

<script>
export default {
  props: {
    updatedAt: {
      type: String,
      default: ''
    },
  }
}
</script>
