<template>
  <div class="about">
    <div class="jumbotron">
      <h1>This is an adsadasd page</h1>
    </div>
    <div>
      <v-container>
       <v-layout align-center row fill-height>
           <v-flex
            v-for="(item, index) in items"
            :key="index"
            md4
            sm6
            xs12
            class="mb-4">
            <v-card class="ma-2">
              <v-card-text>{{ item.text }}</v-card-text>
            </v-card>
           </v-flex>
       </v-layout>
      </v-container>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data: () => ({
    items: [
      {
        image: '',
        text: 'A'
      },
      {
        image: '',
        text: 'B'
      },
      {
        image: '',
        text: 'C'
      }
    ]
  }),
};
</script>

