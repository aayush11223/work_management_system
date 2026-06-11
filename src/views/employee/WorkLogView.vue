<template>
  <div>
    <PageHeader
      title="My Work Logs"
      btnName="LOG WORK"
      @doAction="showDialog = true"
    />

    <EmptyStateVue
      v-if="!logs.length"
      class="text-center mt-6"
      icon="mdi-alert-circle-outline"
      message="No data found for this period"
    />

    <div v-else>
      <TaBle :headers="headers" :items="logs" :loading="loading" />
      <WorkLogForm
        :visible="showDialog"
        @close="showDialog = false"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageBtn.vue";
import TaBle from "@/components/common/TaBle.vue";
import WorkLogForm from "@/components/worklog/WorkLogForm.vue";
import EmptyStateVue from "@/components/common/EmptyState.vue";
import { store } from "@/store/store.js";

export default {
  components: {
    PageHeader,
    TaBle,
    WorkLogForm,
    EmptyStateVue,
  },

  data() {
    return {
      headers: [
        { text: "Date", value: "date", align: "start" },
        { text: "Description", value: "description" },
        { text: "Units", value: "units" },
        { text: "Hours", value: "hours" },
      ],

      loading: false,
      showDialog: false,
      logs: store.logs,
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