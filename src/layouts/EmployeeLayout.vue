<template>
  <v-app>
    <AppBar
      :drawer="drawer"
      @enable="enableDrawer"
      :title="title"
      :name="name"
    />
    <NavigationDrawer
      :drawer="drawer"
      :group="group"
      :menuItems="menuItems"
      @toggle="enableDrawer"
    />

    <!-- Vuetify automatically injects the correct padding-left here when drawer is open -->
    <v-main>
      <v-container fluid class="mt-5 ml-1">
        <v-card>
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/common/AppBar.vue";
import NavigationDrawer from "@/components/common/NavigationDrawer.vue";

export default {
  components: {
    AppBar,
    NavigationDrawer,
  },
  data() {
    return {
      title: "Work Management System",
      drawer: true,
      group: null,
      menuItems: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        {
          title: "Attendance",
          icon: "mdi-calendar-account",
          route: "/attendance",
        },
        {
          title: "Leave",
          icon: "mdi-briefcase-account-outline",
          route: "/leave",
        },
        { title: "Work Log", icon: "mdi-clock", route: "/worklog" },
        { title: "Summary", icon: "mdi-poll", route: "/summary" },
      ],
    };
  },
  methods: {
    enableDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>