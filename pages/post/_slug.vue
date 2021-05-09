<template>
  <v-container>
    <Card
      :id="article.sys.id"
      :slug="article.fields.slug"
      :title="article.fields.title"
      :tags="article.fields.tags"
      :abstract="article.fields.abstract"
      :content="article.fields.content"
      :createdAt="article.fields.createdAt"
      :updatedAt="article.fields.updatedAt"
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
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  transition: 'slide-left',
  components: {
    Card
  },
  async asyncData({ env, params, payload }) {
    if (payload) return { article: payload }
    // console.log(params)
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
      .then(entries => {
        // console.log(entries)
        return {
          article: entries.items[0]
        }
      })
      .catch(console.error)
  }
}
</script>
