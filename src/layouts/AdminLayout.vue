<template>
  <v-container fluid>
    <v-card height="100vh">
      <v-app-bar color="deep-purple" dark flat>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Work Management System - Admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-body-1"> Aayush Basnet </v-toolbar-title>
        <v-btn class="ml-1" icon>
          <v-icon x-large> mdi-account-circle </v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon> {{ item.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-title> {{ item.title }} </v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <!-- logout part -->
            <v-list-item to="/login" class="red--text">
              <v-list-item-icon>
                <v-icon class="red--text"> mdi-logout </v-icon>
              </v-list-item-icon>
              <v-list-item-title> Log Out </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      menuItems: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          route: "/admin/dashboard",
        },

        {
          title: "Employees",
          icon: "mdi-account-group",
          route: "/admin/employees",
        },

        {
          title: "Attendance",
          icon: "mdi-calendar-account",
          route: "/admin/attendance",
        },

        {
          title: "Leaves",
          icon: "mdi-briefcase-account-outline",
          route: "/admin/leaves",
        },

        { title: "Work Logs", icon: "mdi-clock", route: "/admin/worklogs" },

        { title: "Reports", icon: "mdi-poll", route: "/admin/reports" },
      ],
    };
  },
};
</script>
