<template>
  <v-app class="bg">
    <v-navigation-drawer app class="drawer" temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- prominent -->
    <v-toolbar dense dark max-height="48px" class="toolbar">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="title">
        <router-link to="/" tag="span">✿Магазин насіння(っ◔◡◔)っ</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link of links"
          :key="link.title"
          :to="link.url"
          class="ma-2"
          max-height="30"
          color="green"
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        <v-btn
          class="ma-2"
          max-height="30"
          color="green"
          @click="onLogout"
          v-if="isUserLoggedIn"
        >
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="3000"
        :value="true"
      >
        {{ error || 'Error' }}
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    user: null,
  }),
  computed: {
    error() {
      return this.$store.getters.error
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders' },
          { title: 'New ad', icon: 'mdi-note-plus', url: '/new' },
          { title: 'My ads', icon: 'mdi-reorder-horizontal', url: '/list' },
          { title: 'Registration', icon: 'mdi-face', url: '/registration' },
        ]
      }

      return [{ title: 'Login', icon: 'mdi-account-circle', url: '/login' }]
    },
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    },
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
.title {
  cursor: pointer;
}
.drawer {
  background-image: linear-gradient(
    to right top,
    #bfebd6,
    #a4efbc,
    #97f197,
    #99ef66,
    #a8eb12
  );
}
.toolbar {
  background-image: linear-gradient(
    to right top,
    #57d398,
    #5fcb7e,
    #6ac262,
    #76b845,
    #83ae23
  );
}
.bg {
  background-image: linear-gradient(
    to top,
    #b8e7d1,
    #9cdbb0,
    #8bce88,
    #83bf5b,
    #83ae23
  ) !important;
}
</style>
