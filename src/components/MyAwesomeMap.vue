<template> 
 <div class="ma-1 vue2leaflet-map" style="height: 400px; width: 100%">
    <l-map :zoom="zoom" :center="center" style="height: 80%">
      <l-tile-layer :url="url" />
      <l-marker
      v-for="coords in $store.state.coordinates"
      :key="coords"
      :lat-lng="coords"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

//Snippet to correct error, market icon not showing
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/flame.png'),
  iconUrl: require('../assets/flame.png'),
  shadowUrl: require('../assets/flame.png'),
});

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 3,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
  }
};
</script>

<style scoped>
  .vue2leaflet-map {
    z-index: 0;
  }
</style>