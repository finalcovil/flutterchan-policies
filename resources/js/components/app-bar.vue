<template>
  <div>
    <v-app-bar color="blue-grey darken-3" flat dark height="75px">
      <image
        id="logo"
        height="100%"
        contain
        src="resources/images/flutter-chan.png"
        @click="navigateTo('/')"
      />
      <h1 style="color:white;" class="font-weight-thin">Flutterchan</h1>

      <v-spacer></v-spacer>

      <v-progress-linear
        :active="isLoading"
        :indeterminate="isLoading"
        absolute
        bottom
        color="white"
      ></v-progress-linear>
    </v-app-bar>
  </div>
</template>

<style scoped>
#logo:hover {
  cursor: pointer;
}
</style>

<script>
module.exports = {
  data: function() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    navigateTo(route, closeMobile) {
      if (closeMobile) {
        this.mobileMenuisOpen = false;
      }
      this.$store.commit("navigateTo", route);
    }
  }
};
</script>