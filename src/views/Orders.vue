<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary ml-3">Orders</h1>
        <v-list subheader two-line flat class="ma-3">
          <v-list-item-group multiple>
            <v-list-item v-for="order in orders" :key="order.id">
              <v-list-item-action>
                <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn class="primary" :to="/ad/ + order.adId">Open</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Orders',
  data: () => ({
    orders: [
      {
        id: 'favw',
        name: 'Volodymyr',
        phone: '0632021517',
        adId: '1234',
        done: false,
      },
    ],
  }),
  methods: {
    markDone(order) {
      order.done = true
    },
  },
}
</script>