import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyAWf90AXW-MDfhFq5XOyvS5asZAKarsY9g',
  authDomain: 'agro-flora.firebaseapp.com',
  databaseURL: 'https://agro-flora.firebaseio.com',
  projectId: 'agro-flora',
  storageBucket: 'agro-flora.appspot.com',
  messagingSenderId: '367794534838',
  appId: '1:367794534838:web:b0458f5f3ac9236ec82917',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})
