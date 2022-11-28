<template>
  <v-app-bar
    app
    :height="HomeAppBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <before-login-app-bar-signup-button />
    <before-login-app-bar-login-button />
  </v-app-bar>
</template>

<script>
export default {
  data ({ $store }) {
    return {
      HomeAppBarHeight: $store.state.styles.HomeAppBarHeight
    }
  }
}
</script>
