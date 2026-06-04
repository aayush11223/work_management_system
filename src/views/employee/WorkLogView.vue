<template>
  <div>
    <PageHeader
      title="My Work Logs"
      btnName="LOG WORK"
      @doAction="showDialog = true"
    />

    <TaBle :headers="headers" :items="logs" :loading="loading" />

    <WorkLogForm
      :visible="showDialog"
      @close="showDialog = false"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageBtn.vue";
import TaBle from "@/components/common/TaBle.vue";
import WorkLogForm from "@/components/worklog/WorkLogForm.vue";

export default {
  components: {
    PageHeader,
    TaBle,
    WorkLogForm,
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