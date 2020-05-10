<template>
  <v-layout row>
    <v-flex xs12>
      <v-card class="ma-5">
        <v-img class="white--text align-end" :src="ad.url" height="300">
          <v-card-title>{{ ad.title }}</v-card-title>
        </v-img>
        <v-card-text>
          <p class="text--primary text-justify">{{ ad.description }}</p>
          <v-card-subtitle class="pa-0"
            >Country: {{ ad.country }}</v-card-subtitle
          >
        </v-card-text>

        <v-card-actions>
          <p>
            <small class="pl-2">{{ ad.price }}грн.</small>
          </p>
          <v-spacer></v-spacer>
          <v-btn depressed color="warning">Edit</v-btn>
          <v-btn class="success mr-3">Buy</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id
      return this.$store.getters.adById(id)
    },
  },
}
</script>
