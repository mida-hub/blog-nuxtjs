<template>
  <div>
    <span class="font-weight-light">
      tags : 
    </span>
    <span
      class="font-weight-light"
      v-for="tag in tags" v-bind:key="tag.sys.id">
        [ {{ tag.fields.title }} ]
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: []
    }
  }
}
</script>
