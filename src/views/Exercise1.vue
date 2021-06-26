<template>
  <div class="about">
    <div class="jumbotron mb-4" >
      <div 
        v-if="$vuetify.breakpoint.mdAndUp"
        class="jumbotron-image"
        :style="{
          backgroundImage: `url(${'http://via.placeholder.com/1920x650'})`
        }"
      />
      <div 
        v-if="$vuetify.breakpoint.smAndDown"
        class="jumbotron-image"
        :style="{
          backgroundImage: `url(${'http://via.placeholder.com/600x600'})`
        }"
      />
      <div class="jumbotron-text">
        <h1>Hello Developer!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
    <div class="mb-5">
      <v-container>
       <v-layout row fill-height>
           <v-flex
            v-for="(item, index) in items"
            :key="index"
            md4
            sm6
            xs12
            class="mb-4">
            <v-card class="ma-2" style="height: 100%;">
              <v-card-text>
                <v-card flat>
                  <v-img
                    :src="item.image"
                    aspect-ratio="1.2"
                  ></v-img>
                </v-card>
              </v-card-text>
              <v-card-text class="text-controls">{{ item.text }}</v-card-text>
              <div class="controls">
                <v-btn rounded outlined color="black" dark class="button">read more</v-btn>
              </div>
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
        image: 'http://via.placeholder.com/400x300',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        image: 'http://via.placeholder.com/400x300',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        image: 'http://via.placeholder.com/400x300',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
      }
    ]
  }),
};
</script>

<style scoped>
.jumbotron {
  text-align: center;
  height: 300px;
  position: relative;
}
.jumbotron .jumbotron-image {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
  pointer-events: none;
  z-index: 1;
}
.jumbotron .jumbotron-text {
  z-index: 2;
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
@media only screen and (max-width: 600px) {
  .jumbotron {
    
  }
}
.text-controls { 
  margin-bottom: 50px; /* Uses margin to allow 'controls' container to float below the card */
  color: black !important;
  text-align: center;
} 
.controls {
  text-align: center;
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
}
.controls .button { border: 3px solid black;}
</style>

