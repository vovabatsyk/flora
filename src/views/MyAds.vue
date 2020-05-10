<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 text-center">My ads</h1>
        <v-card class="ma-3" elevation="10" v-for="ad in myAds" :key="ad.id">
          <v-layout>
            <v-flex xs4>
              <v-img :src="ad.url" height="85" width="85" class="ma-3"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>{{ ad.title }}</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MyAds',
  computed: {
    myAds() {
      return this.$store.getters.myAds
    },
  },
}
</script>