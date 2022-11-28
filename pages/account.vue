<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'logged-in',
  // account.vueへのアクセスを制限する
  validate ({ route }) {
    return route.name !== 'account'
  }
}
</script>
