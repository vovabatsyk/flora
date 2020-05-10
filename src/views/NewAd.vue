<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary ml-3 ">Create new ad</h1>
        <v-card class="elevation-12 ma-3">
          <v-card-text>
            <v-form @submit.prevent="sabmitHandler" ref="form" v-model="valid">
              <v-text-field
                label="Title"
                name="title"
                :rules="[v => !!v || 'Title is required']"
                type="text"
                v-model="title"
                required
              />

              <v-textarea
                label="Ad description"
                name="description"
                auto-grow
                outlined
                row-height="15"
                :rules="[v => !!v || 'Description is required']"
                type="text"
                messages
                v-model="description"
                required
              />

              <v-text-field
                label="URL"
                name="url"
                :rules="[v => !!v || 'URL is required']"
                type="text"
                v-model="url"
                required
              />
              <v-card-actions>
                <v-switch
                  v-model="promo"
                  label="add to promo"
                  color="success"
                ></v-switch>
                <v-spacer></v-spacer>
                <v-switch
                  v-model="avalable"
                  label="avalable"
                  color="success"
                ></v-switch>
              </v-card-actions>
              <v-row>
                <v-col xs5>
                  <v-text-field
                    label="Price"
                    name="price"
                    :rules="[v => !!v || 'Price is required']"
                    type="number"
                    v-model="price"
                    required
                  />
                </v-col>
                <v-col xs7>
                  <v-text-field
                    label="Country"
                    name="country"
                    :rules="[v => !!v || 'URL is required']"
                    type="text"
                    v-model="country"
                    required
                  />
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer />
                <v-btn color="success" :disabled="!valid" type="submit"
                  >Add</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewAd',
  data: () => ({
    valid: false,
    title: '',
    description: '',
    url: '',
    promo: false,
    avalable: true,
    price: 0,
    country: 'Україна',
  }),
  methods: {
    sabmitHandler() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          url: this.url,
          promo: this.promo,
          avalable: this.avalable,
          price: this.price,
          country: this.country,
        }
        this.$store.dispatch('createAd', ad)

        console.log(ad)
        this.title = ''
        this.description = ''
        this.url = ''
        this.promo = false
        this.avalable = true
      }
    },
  },
}
</script>