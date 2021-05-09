<template>
  <div>
    <br>
    <markdown-it-vue 
      class="md-body" 
      :content=content
      :options="options"  
    />
  </div>
</template>

<script>
export default {
  props: {
    content: {
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
