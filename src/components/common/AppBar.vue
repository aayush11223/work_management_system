<template>
  <div>
    <v-app-bar dark flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="text-body-1"> {{ name }}</v-toolbar-title>

      <v-btn class="ml-1" icon to="/profile">
        <v-icon x-large> mdi-account-circle </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>