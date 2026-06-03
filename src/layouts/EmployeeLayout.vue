<template >
  <div>
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

    <v-container>
      <v-card auto class="mt-10">
        <v-main> <router-view /> </v-main>
      </v-card>
    </v-container>
  </div>
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
      dialog: false,

      //AppBar data
      title: "Work Management System",
      name: "Aayush Basnet",

      //NavigationDrawer data
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

  methods: {
    enableDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>
