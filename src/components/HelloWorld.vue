<template>
  <div class="main">
    <div class="d-flex justify-space-around align-center flex-wrap">
      <div class="pa-2 ma-2">
        <h1>Fires in a map</h1>
            <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            outlined
            v-bind="attrs"
            v-on="on"
          >Read what this project is about</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >FIRES ON A MAP</v-toolbar>
            <v-card-text>
              <div class="text pa-12">
                <h3>Premise</h3>
                <p>
                  Every day somewhere in the world a fire takes place. It can be caused by various causes both natural and by man. Thus, for some years now, thanks to its satellites and to help local authorities, NASA has been monitoring the global situation and automatically identifies and reports fires on the entire planet.
                </p>
                <h3>What is this</h3>
                <p>
                  this is a web application, which shows on a map the fires in the week of 21 to 28 August 2020.
                </p>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      </div>
      <calendar class="pa-2 ma-2 max-width" ></calendar>
      <v-btn
        @click="$store.dispatch('play')"
        elevation="2"
        color="primary"
        class="pa-2 ma-2"
      >Show Fires on the Map</v-btn>
    </div>
    <my-awesome-map></my-awesome-map>
  </div>
</template>

<script>
  import Calendar from './Calendar.vue';
  import MyAwesomeMap from './MyAwesomeMap.vue';

  export default {
    name: 'HelloWorld',
    data(){
      return{
        dialog:false
      }
    },
    components: { 
      Calendar,
      MyAwesomeMap 
    }
  }
</script>

<style scoped>
  .main{
    width: 93%;
    padding: 15px 0px;
    margin: auto;
  }
  .max-width{
    max-width: 300px;
  }
</style>