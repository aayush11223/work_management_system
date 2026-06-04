<template>
  <v-app-bar app dark flat>
    <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-title class="text-body-1"> {{ name }}</v-toolbar-title>

    <v-btn class="ml-1" icon to="/profile">
      <v-icon x-large> mdi-account-circle </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  methods: {
    toggleNav() {
      this.$emit("enable", !this.drawer);
    },
  },
};
</script>