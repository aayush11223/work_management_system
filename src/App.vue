<template>
  <v-app>
    <router-view />
    <AppSnackbar
      :message="message"
      :visible="visible"
      @open="handleOpen"
      @close="handleClose"
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
      message: "Hello, I'm a snackbar",
      visible: false,
    };
  },

  methods: {
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
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