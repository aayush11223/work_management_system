<template>
  <v-app-bar class="pl-2" app dark flat>
    <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- v-menu -->
    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-1" dark icon v-bind="attrs" v-on="on">
          <v-icon x-large> mdi-account-circle </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/profile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Dynamic Toggle Route -->
        <v-list-item @click="handleToggle">
          <v-list-item-title>{{ toggleTitle }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <!-- Logout -->
        <v-list-item to="/login">
          <v-list-item-title class="red--text">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  },

  computed: {
    isUser() {
      return this.$route.path === "/dashboard";
    },
    toggleTitle() {
      return this.isUser ? "Go to Admin" : "Go to User";
    },
  },

  methods: {
    toggleNav() {
      this.$emit("enable", !this.drawer);
    },

    handleToggle() {
      if (this.isUser) {
        this.$router.push("/admin/dashboard");
      } else {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>
