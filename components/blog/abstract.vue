<template>
  <markdown-it-vue 
    class="md-body" 
    :content=abstract
    :options="options"  
  />
</template>

<script>
export default {
  props: {
    abstract: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_self',
            rel: 'noopener'
          }
        }
      }
    }
  }
}
</script>
