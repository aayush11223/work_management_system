<template>
  <div class="pa-4">
    <PageHeader title="Employee Work Logs" />

    <v-text-field
      v-model="searchQuery"
      label="Search by Employee Name"
      prepend-inner-icon="mdi-magnify"
      outlined
      dense
      class="mb-4"
    />

    <EmptyStateVue
      v-if="!adminLogs.length"
      class="text-center mt-6"
      icon="mdi-alert-circle-outline"
      message="No data found for this period"
    />

    <TaBle v-else :headers="tableHeaders" :items="filteredLogs" />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import TaBle from "@/components/common/TaBle.vue";
import EmptyStateVue from "@/components/common/EmptyState.vue";
import { store } from "@/store/store.js";

export default {
  components: {
    PageHeader,
    TaBle,
    EmptyStateVue,
  },
  data() {
    return {
      searchQuery: "",

      tableHeaders: [
        { text: "Employee Name", value: "employeeName" },
        { text: "Date", value: "date" },
        { text: "Task", value: "task" },
        { text: "Hours", value: "hours" },
      ],
    };
  },
  computed: {
    adminLogs() {
      return store.adminLogs;
    },
    // Computed property to filter work logs by employeeName
    filteredLogs() {
      if (!this.searchQuery) return store.adminLogs;

      const query = this.searchQuery.toLowerCase();
      return store.adminLogs.filter((log) =>
        log.employeeName.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style  scoped>
</style>
