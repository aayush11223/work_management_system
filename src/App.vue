<template>
  <v-app>
    <router-view />

    <AppSnackbar
      :message="snackbar.message"
      :type="snackbar.type"
      :visible="snackbar.visible"
      @close="snackbar.visible = false"
    />
  </v-app>
</template>

<script>
import AppSnackbar from "./components/common/AppSnackbar.vue";

export default {
  name: "App",
  components: { AppSnackbar },

  data() {
    return {
      snackbar: {
        visible: false,
        message: "",
        type: "success",
      },
    };
  },

  methods: {
    showSnackbar({ message, type }) {
      this.snackbar.message = message;
      this.snackbar.type = type;
      this.snackbar.visible = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>