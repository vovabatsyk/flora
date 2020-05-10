<template>
  <v-container class="fill-height login" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="dark-grey" dark flat>
            <v-toolbar-title>Registration</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="sabmitHandler" ref="form" v-model="valid">
              <v-text-field
                label="Email"
                name="email"
                :rules="emailRules"
                prepend-icon="mdi-email-edit-outline"
                type="email"
                v-model="email"
              />

              <v-text-field
                id="password"
                label="Password"
                :rules="passwordRules"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
                v-model="password"
                :counter="6"
              />
              <v-text-field
                id="confirmPassword"
                label="Confirm password"
                :rules="[password === confirmPassword || 'Password must match']"
                name="confirmPassword"
                prepend-icon="mdi-lock-outline"
                type="password"
                v-model="confirmPassword"
                :counter="6"
              />
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" :disabled="!valid" type="submit"
                  >Register</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  props: {
    source: String,
  },
  data: () => ({
    valid: false,
    email: '',
    password: '',
    confirmPassword: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 6) || 'Minimum 6 characters',
    ],
  }),
  methods: {
    async sabmitHandler() {
      try {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password,
          }
          await this.$store.dispatch('registerUser', user)
          this.$router.push('/')
        }
      } catch (e) {}
    },
  },
}
</script>
