<template>
  <div>
    <v-app-bar color="deep-purple" dark flat>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Attendence System</v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-toolbar-title class="text-body-1"> Aayush Basnet </v-toolbar-title>
      <v-icon class="mx-4" x-large>mdi-account-circle</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- absolute -- floats above content 
      temporary -- closes automatically
      after click -->

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/attendance">
            <v-list-item-icon>
              <v-icon>mdi-calendar-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Attendence</v-list-item-title>
          </v-list-item>

          <v-list-item to="/leave">
            <v-list-item-icon>
              <v-icon>mdi-briefcase-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Leave</v-list-item-title>
          </v-list-item>

          <v-list-item to="/worklog">
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Work Log</v-list-item-title>
          </v-list-item>

          <v-list-item to="/summary">
            <v-list-item-icon>
              <v-icon>mdi-poll</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Summary</v-list-item-title>
          </v-list-item>

          <v-divider> </v-divider>
          <v-list-item class="red--text">
            <v-list-item-icon>
              <v-icon class="red--text">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>