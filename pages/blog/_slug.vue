<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card outlined>
        <v-card-title>
          <h1>
            {{ article.fields.title }}
          </h1>
        </v-card-title>
        <v-card-subtitle>
          <div class="font-weight-light">
            created : {{ article.fields.createdAt | dateFormat }}
            / updated : {{ article.fields.updatedAt | dateFormat }}
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
        <v-card-text> {{ article.fields.abstract }} </v-card-text>
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
import 'markdown-it-vue/dist/markdown-it-vue.css'

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
  async asyncData({ env, params }) {
    return await client
      .getEntry(params.sys)
      .then(entry => {
        // console.log(params.sys)
        return {
          article: entry
        }
      })
      .catch(console.error)
  }
}
</script>
