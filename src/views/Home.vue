<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
            :show-arrows="false"
            cycle
            height="250"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              v-for="(item, i) in promoAds"
              :key="i"
              :src="item.url"
            >
              <div class="car-link">
                <v-btn small outlined :to="/ad/ + item.id">{{
                  item.title
                }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(ad, i) in ads" :key="i">
          <v-card class="mx-auto" elevation="12" color="green darken-1">
            <v-img class="white--text align-end" height="200px" :src="ad.url">
              <v-card-title>{{ ad.title }}</v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div class="text-truncate">{{ ad.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="white" :to="/ad/ + ad.id">Open</v-btn>
              <v-btn color="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    promoAds() {
      return this.$store.getters.promoAds
    },
    ads() {
      return this.$store.getters.ads
    },
  },
}
</script>

<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
