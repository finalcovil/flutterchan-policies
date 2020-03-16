<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="grey darken-1 white--text text-center">
      <v-card-text class="grey darken-2 d-flex justify-space-around align-center">
        <div>
          <v-btn
            v-for="item in items"
            :key="item.text"
            class="mx-2 white--text"
            @click="navigateTo(item.route)"
          >{{ item.text }}</v-btn>
        </div>
        <div>
          <strong>Contact: finalcovil@gmail.com</strong>
        </div>
        <div>
          <strong>Copyright © {{ new Date().getFullYear() }} Flutterchan</strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
module.exports = {
  data: () => ({
    items: [
      {
        text: "Politics",
        route: "/politics"
      },
      {
        text: "Terms",
        route: "/terms"
      }
    ]
  }),
  methods: {
    navigateTo(route) {
      this.$store.commit("navigateTo", route);
    }
  }
};
</script>