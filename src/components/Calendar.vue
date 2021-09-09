<template>
        <v-date-picker
          max="2020-08-28"
          min="2020-08-21"
          max-width="500px"
          justify-self="center"
          reactive
          scrollable
          range
          no-title
          v-model="$store.state.date"
        ></v-date-picker>
</template>

<script>
export default {
  name: "Calendar",
}
</script>

<style scoped>
  .date-picker{
    margin: 50px auto;
    padding: 10px;
  }
  .max-width{
    max-width: 300px;
  }
</style>