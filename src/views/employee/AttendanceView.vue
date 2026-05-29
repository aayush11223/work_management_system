<template>
  <div>
    <PageHeader :title="title" class="mt-3" />
    <div class="d-flex justify-end">
      <v-btn depressed color="primary" class="my-3" @click="showDialog = true">
        Mark Attendance
      </v-btn>
    </div>
    <AttendanceTable :headers="headers" :items="items" />

    <MarkAttendanceForm
      :visible="showDialog"
      @close="showDialog = false"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import AttendanceTable from "@/components/attendance/AttendanceTable.vue";
import MarkAttendanceForm from "@/components/attendance/MarkAttendanceForm.vue";

export default {
  name: "AttendanceView",
  components: {
    PageHeader,
    AttendanceTable,
    MarkAttendanceForm,
  },
  data() {
    return {
      title: "Attendance",
      showDialog: false,
      headers: [
        { text: "Date", value: "date" },
        { text: "Check In", value: "CheckIn" },
        { text: "Check Out", value: "CheckOut" },
        { text: "Status", value: "Status" },
      ],
      items: [
        {
          date: "May 20, 2026",
          CheckIn: "09:05:15",
          CheckOut: "06:08:50",
          Status: "Late In - Late Out",
        },
        {
          date: "May 21, 2026",
          CheckIn: "08:58:15",
          CheckOut: "06:08:50",
          Status: "Early In - Late Out",
        },
        {
          date: "May 22, 2026",
          CheckIn: "09:05:15",
          CheckOut: "06:08:50",
          Status: "Late In - Late Out",
        },
        {
          date: "May 23, 2026",
          CheckIn: "09:05:15",
          CheckOut: "05:59:50",
          Status: "Early In - Early Out",
        },
        {
          date: "May 24, 2026",
          CheckIn: "09:05:15",
          CheckOut: "06:08:50",
          Status: "Late In - Late Out",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
</style>
