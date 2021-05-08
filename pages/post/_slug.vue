<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card outlined>
        <v-card-title>
          <h2>
            {{ article.fields.title }}
          </h2>
        </v-card-title>
        <v-card-subtitle>
          <div class="font-weight-light">
            created : {{ article.fields.createdAt | dayformat }}
          </div>
          <div class="font-weight-light">
            updated : {{ article.fields.updatedAt | dayformat }}
          </div>
          <span class="font-weight-light">
            tags : 
          </span>
          <span
            class="font-weight-light"
            v-for="tag in article.fields.tags" v-bind:key="tag.sys.id">
              [ {{ tag.fields.title }} ]
          </span>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <markdown-it-vue 
            class="md-body" 
            :content=article.fields.abstract
            :options="options"  
          />
        </v-card-text>
        <v-card-text>
          <markdown-it-vue 
            class="md-body" 
            :content=article.fields.content
            :options="options"  
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
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
  },
  transition: 'slide-right',
  async asyncData({env, params, payload}) {
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
