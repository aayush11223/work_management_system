<template >
  <div>
    <AppBar :title="title" :name="name" />
    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="grey darken-1--text text--accent-4"
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

    <v-container>
      <v-card auto class="mt-10">
        <v-main> <router-view /> </v-main>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppBar from "@/components/common/AppBar.vue";
export default {
  components: {
    AppBar,
  },

  data() {
    return {
      title: "Work Management System",
      name: "Aayush Basnet",
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