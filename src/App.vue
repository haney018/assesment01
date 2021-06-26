<template>
  <v-app class="app">
    <v-toolbar dark color="primary">
      <v-spacer></v-spacer>

      <v-btn to="/exercise1">Exsercise 1</v-btn>
      <v-btn to="/exercise2">Exsercise 2</v-btn>
      <v-btn to="/about">About Me</v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <transition name='scale-transition'>
      <router-view/>
    </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application--wrap {
  min-height: 0px !important;
}
</style>
