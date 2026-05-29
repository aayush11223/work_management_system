<template>
  <div>
    <!-- Page Header -->
    <PageHeader title="Work Logs" subtitle="Track and manage daily work logs" />

    <!-- Work Log Table -->
    <WorkLogTable :items="logs" :loading="loading" />

    <!-- Work Log Form Dialog -->
    <WorkLogForm
      :visible="showDialog"
      @close="showDialog = false"
      @submit="handleSubmit"
    />

    <!-- Floating Action Button -->
    <v-btn
      fab
      color="primary"
      dark
      fixed
      bottom
      right
      class="mb-6 mr-6"
      @click="showDialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import WorkLogTable from "@/components/worklog/WorkLogTable.vue";
import WorkLogForm from "@/components/worklog/WorkLogForm.vue";

export default {
  name: "WorkLogView",

  components: {
    PageHeader,
    WorkLogTable,
    WorkLogForm,
  },

  data() {
    return {
      loading: false,

      showDialog: false,

      logs: [
        {
          id: 1,
          date: "2026-05-20",
          description: "Created employee dashboard UI",
          units: 2,
          hours: 5,
        },
        {
          id: 2,
          date: "2026-05-21",
          description: "Integrated attendance API",
          units: 1,
          hours: 4,
        },
        {
          id: 3,
          date: "2026-05-22",
          description: "Fixed login validation bugs",
          units: 3,
          hours: 6,
        },
        {
          id: 4,
          date: "2026-05-23",
          description: "Worked on leave management module",
          units: 2,
          hours: 7,
        },
      ],
    };
  },

  methods: {
    handleSubmit(newLog) {
      this.logs.push({
        id: this.logs.length + 1,
        date: newLog.date,
        description: newLog.description,
        units: newLog.units,
        hours: newLog.hours,
      });

      this.showDialog = false;
    },
  },
};
</script>