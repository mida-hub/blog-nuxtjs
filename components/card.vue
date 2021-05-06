<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card outlined>
        <v-card-title>
          <nuxt-link
            :to="{path: '/post/' + slug}"
          >
            {{ title }}
          </nuxt-link>
        </v-card-title>
        <v-card-subtitle>
          <div class="font-weight-light">
            created : {{ createdAt | dateFormat }}
            / updated : {{ updatedAt | dateFormat }}
          </div>
          <span class="font-weight-light">
            tags : 
          </span>
          <span
            class="font-weight-light"
            v-for="tag in tags" v-bind:key="tag.sys.id">
              [ {{ tag.fields.title }} ]
          </span>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text> {{ abstract }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
    border-bottom: 1.2px solid;
  }
</style>
