// ログイン後のツールバーコンポーネント
<template>
  <v-app-bar
    app
    dence
    elevation="1"
    :clipped-left="clippedLeft"
    color="white"
  >
    <slot name="navigation-toggle-button" />
    <nuxt-link
      :to="homePath"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      :class="{ 'hidden-mobile-and-down': isNotHomePath }"
    />

    <!-- ページタイトル -->
    <logged-in-app-bar-breadcrumbs
      v-if="isNotHomePath"
    />
    <v-spacer />
    <logged-in-app-bar-account-menu />
  </v-app-bar>
</template>

<script>
import LoggedInAppBarBreadcrumbs from './LoggedInAppBarBreadcrumbs.vue'
export default {
  components: { LoggedInAppBarBreadcrumbs },
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data ({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath
    }
  },
  computed: {
    isNotHomePath () {
      return this.$route.name !== this.homePath.name
    }
  }
}
</script>
