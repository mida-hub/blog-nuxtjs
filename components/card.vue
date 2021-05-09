<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card outlined>
        <v-card-title>
          <nuxt-link
            :to="{path: '/post/' + slug}"
          >
            <Title :title="title" />
          </nuxt-link>
        </v-card-title>
        <v-card-subtitle>
          <CreatedAt :createdAt="createdAt" />
          <UpdatedAt :updatedAt="updatedAt" />
          <Tags :tags="tags" />
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <Abstract :abstract="abstract" />
          <Content :content="content" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Title from '~/components/blog/title.vue'
import CreatedAt from '~/components/blog/createdat.vue'
import UpdatedAt from '~/components/blog/updatedat.vue'
import Tags from '~/components/blog/tags.vue'
import Abstract from '~/components/blog/abstract.vue'
import Content from '~/components/blog/content.vue'

export default {
  components: {
    Title,
    CreatedAt,
    UpdatedAt,
    Tags,
    Abstract,
    Content
  },  
  props: {
    id: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: []
    },
    abstract: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  .link-underline {
    border-bottom: 1.2px solid;
    padding-bottom: 2px;
    display: inline;
    line-height: 1.2;
  }
</style>
