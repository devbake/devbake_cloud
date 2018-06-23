<template>
  <div class="container">
    <h1 class="title">Buefy</h1>
    <div class="button-sets">
      <a class="button is-primary">Primary</a>
      <a class="button is-dark">Dark</a>
      <a class="button is-info">Info</a>
      <a class="button is-success">Success</a>
      <a class="button is-warning">Warning</a>
      <a class="button is-danger">Danger</a>
    </div>
    <a href="https://buefy.github.io/#/" target="_blank">LINK</a>
  </div>
</template>

<style lang="scss" scoped>
.button-sets {
  margin-top: 15px;
  a + a {
    margin-left: 5px;
  }
}
</style>