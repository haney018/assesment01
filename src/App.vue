<template>
  <v-app class="app">
    <v-toolbar dark color="primary" class="app__tb">
      <v-spacer></v-spacer>
      <v-btn class="mx-1" to="/exercise1">Exsercise 1</v-btn>
      <v-btn class="mx-1" to="/exercise2">Exsercise 2</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        fab
        color="error"
        bottom
        right
        absolute
        @click="dialog = !dialog"
      >
          <v-icon>mdi-alert-decagram</v-icon>
      </v-btn>
    </v-toolbar>
    <transition name='scale-transition'>
      <router-view/>
    </transition>
    <v-dialog
      v-model="dialog"
      width="500"
    >
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Bonus Question Answer
        </v-card-title>
        <v-card-text class="py-2">
          In the equation 'b' + 'a' + + 'a' + 'a':
          <br/>
          <ul>
            <li>'b' + 'a' = 'ba'</li>
            <li>+ 'a' regardless of letter will result to 'NaN' (Not a number)</li>
            <li>The first two will result 'baNaN'. Now add the + 'a' will result 'baNaNa</li>
          </ul>

          <br/>
          And with the toLowerCase function to change all text to lower case, it will have the result
          <br/>
          <strong>banana</strong>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    dialog: false
  }),
};
</script>

<style>
.v-application--wrap {
  min-height: 0px !important;
}
.app__tb {
  z-index: 80;
}
</style>
