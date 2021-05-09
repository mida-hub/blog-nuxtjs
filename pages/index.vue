<template>
  <v-container>
    <Card
      v-for="(post, i) in posts"
      :key="i"
      :id="post.sys.id"
      :slug="post.fields.slug"
      :title="post.fields.title"
      :tags="post.fields.tags"
      :abstract="post.fields.abstract"
      :createdAt="post.fields.createdAt"
      :updatedAt="post.fields.updatedAt"
    />
  </v-container>
</template>

<script>
import Card from '~/components/card.vue'
import { createClient } from '~/plugins/contentful.js'
// import 'markdown-it-vue/dist/markdown-it-vue.css'
import 'markdown-it-vue/dist/markdown-it-vue-light.css'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
      .then(entries => {
        // console.log(entries.items)
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>
