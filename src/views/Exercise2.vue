<template>
  <div class="exercise2">
    <div class="mb-5">
      <v-container>
        <v-card v-if="$vuetify.breakpoint.mdAndUp">
          <v-tabs
            v-model="activeTab"
            color="cyan"
            dark
            slider-color="yellow"
          >
            <v-tab
              v-for="(item, index) in items"
              :key="index"
              ripple
            >
              {{ item.title }}
            </v-tab>
            <v-tab-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-card flat>
                <v-card-text v-html="item.content"/>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <v-card-actions>
            <v-btn @click="prevTab">previous</v-btn>
            <v-spacer/>
            <v-btn @click="nextTab">next</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="$vuetify.breakpoint.smAndDown">
          <v-expansion-panels v-model="activeAccordion">
            <v-expansion-panel
              v-for="(item,index) in items"
              :key="'accord-' + index"
            >
              <v-expansion-panel-header>
                <div>{{ item.title.toUpperCase() }}</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-text v-html="item.content"/>
                  <div style="text-align: right;">
                    <v-btn @click="nextAccord">next</v-btn>
                  </div>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-container>
    </div>
    
  </div>
</template>

<script>
import Items from '../../src/assets/data.json'

export default {
  name: 'Exercise2',
  data: () => ({
    activeTab: 0,
    activeAccordion: 0,
    items: Items
  }),
  methods: {
    nextTab() {
      if (this.activeTab === this.items.length) {
        this.activeTab = 0
      } else {
        this.activeTab++
      }
    },
    prevTab() {
      if (this.activeTab === 0) {
        this.activeTab = this.items.length - 1
      } else {
        this.activeTab--
      }
    },
    nextAccord() {
      if (this.activeAccordion >= this.items.length - 1) {
        this.activeAccordion = 0
      } else {
        this.activeAccordion++
      }
    }
  }
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

