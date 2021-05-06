<template>
  <v-app>
    <v-container>
      <card
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
  </v-app>
</template>

<script>
import Card from '~/components/card.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  transition: 'slide-left',
  components: {
    Card
  },
  asyncData({ env, params }) {
    return client
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

<style>
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    border-bottom: 1.2px solid;
  }
</style>
