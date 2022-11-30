// Projectのレイアウト
<template>
  <v-app>
    <!-- ログイン後のツールバー -->
    <logged-in-app-bar
      clipped-left
    >
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </logged-in-app-bar>

    <!-- ナビゲーションドロワー -->
    <project-navigation-drawer
      :drawer.sync="drawer"
    />

    <!-- メインコンテンツ -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'get-project-current',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
