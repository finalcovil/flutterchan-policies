<template>
  <v-container style="height:100%" fluid>
    <v-row style="height:100%" align="center" justify="center">
      <v-col align="center" justify="center" cols="12">
        <v-img
          src="resources/images/chaika404.png"
          :aspect-ratio="$vuetify.breakpoint.xsOnly ?1 : $vuetify.breakpoint.smAndDown?2: 3"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>
<script>
module.exports = {
  data: () => ({
    //
  })
};
</script>