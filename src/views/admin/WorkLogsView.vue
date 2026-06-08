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

    <TaBle :headers="tableHeaders" :items="filteredLogs" />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import TaBle from "@/components/common/TaBle.vue";

export default {
  components: {
    PageHeader,
    TaBle,
  },
  data() {
    return {
      searchQuery: "",

      workLogs: [
        {
          id: 101,
          employeeName: "Aayush",
          date: "2026-06-01",
          task: "Fix navigation bug",
          hours: 4,
        },
        {
          id: 102,
          employeeName: "Rohan",
          date: "2026-06-01",
          task: "Update API documentation",
          hours: 6,
        },
        {
          id: 103,
          employeeName: "Sita",
          date: "2026-06-02",
          task: "Database migration",
          hours: 8,
        },
        {
          id: 104,
          employeeName: "Niranjan",
          date: "2026-06-02",
          task: "Implement new UI component",
          hours: 5,
        },
        {
          id: 105,
          employeeName: "Anjali",
          date: "2026-06-03",
          task: "Weekly code review",
          hours: 3,
        },
      ],

      tableHeaders: [
        { text: "Employee Name", value: "employeeName" },
        { text: "Date", value: "date" },
        { text: "Task", value: "task" },
        { text: "Hours", value: "hours" },
      ],
    };
  },
  computed: {
    // Computed property to filter work logs by employeeName
    filteredLogs() {
      if (!this.searchQuery) return this.workLogs;

      const query = this.searchQuery.toLowerCase();
      return this.workLogs.filter((log) =>
        log.employeeName.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style  scoped>
</style>
