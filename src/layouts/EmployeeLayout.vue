<template>
  <div>
    <v-app-bar color="deep-purple" dark flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Attendance System</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="text-body-1"> Aayush Basnet </v-toolbar-title>

      <v-icon class="mx-4" x-large> mdi-account-circle </v-icon>
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
            <!-- Makes :to, item behave like router link. -->

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
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
  </div>
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
          route: "/dashboard",
        },
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
        {
          title: "Work Log",
          icon: "mdi-clock",
          route: "/worklog",
        },
        {
          title: "Summary",
          icon: "mdi-poll",
          route: "/summary",
        },
      ],
    };
  },
};
</script>