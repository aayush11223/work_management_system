<template>
  <div>
    <PageHeader :title="title" />
    <v-row>
      <v-col
        v-for="(stat, index) in stats"
        :key="index"
        cols="12"
        sm="6"
        class="mt-2"
      >
        <StatCard
          :icon="stat.icon"
          :label="stat.label"
          :value="stat.value"
          :color="stat.color"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import StatCard from "@/components/common/StatCard.vue";

export default {
  name: "DashboardView",

  components: {
    StatCard,
    PageHeader,
  },

  computed: {
    isAdmin() {
      return this.$route.name === "admin-dashboard"; // matches name in router.js
    },

    title() {
      return this.isAdmin ? "Admin Dashboard" : "My Workspace";
    },

    stats() {
      if (this.isAdmin) {
        return [
          {
            label: "Total Employees",
            value: 24,
            icon: "mdi-account-group",
            color: "primary",
          },
          {
            label: "Present Today",
            value: 18,
            icon: "mdi-account-check",
            color: "success",
          },
          {
            label: "Pending Leave Requests",
            value: 5,
            icon: "mdi-account-clock",
            color: "warning",
          },
          {
            label: "Departments",
            value: 6,
            icon: "mdi-office-building",
            color: "info",
          },
        ];
      } else {
        return [
          {
            label: "Total Present",
            value: 42,
            icon: "mdi-account-check",
            color: "success",
          },
          {
            label: "Leaves Taken",
            value: 3,
            icon: "mdi-account-arrow-right",
            color: "warning",
          },
          {
            label: "Pending Leaves",
            value: 5,
            icon: "mdi-account-clock",
            color: "info",
          },
          {
            label: "Work Logs Submitted",
            value: 38,
            icon: "mdi-file-document-check",
            color: "primary",
          },
        ];
      }
    },
  },
};
</script>