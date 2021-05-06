<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>
