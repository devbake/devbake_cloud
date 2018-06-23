<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        sample
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div class="button-sets">
        <nuxt-link :to="'demo/font-awesome'" class="button is-primary">Font-Awesome 4.7.0</nuxt-link>
        <nuxt-link :to="'demo/buefy'" class="button is-info">Buefy</nuxt-link>
        <nuxt-link :to="'demo/vue-quill-editor'" class="button is-dark">Vue-Quill-Editor</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button-sets {
  margin-top: 15px;
  a + a {
    margin-left: 5px;
  }
}
</style>
