<template>
  <div>
    <PageHeader
      :title="title"
      :btnName="btnName"
      @doAction="showDialog = true"
    />

    <TaBle :headers="headers" :items="attendance" />

    <MarkAttendanceForm
      :visible="showDialog"
      @close="showDialog = false"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageBtn.vue";
import TaBle from "@/components/common/TaBle.vue";
import MarkAttendanceForm from "@/components/attendance/MarkAttendanceForm.vue";
import { store } from "@/store/store.js";

export default {
  name: "AttendanceView",
  components: {
    PageHeader,
    TaBle,
    MarkAttendanceForm,
  },
  data() {
    return {
      title: "My Attendance",
      btnName: "MARK ATTENDANCE",
      showDialog: false,
      headers: [
        { text: "Date", value: "date" },
        { text: "Check In", value: "CheckIn" },
        { text: "Check Out", value: "CheckOut" },
        { text: "Status", value: "Status" },
      ],
    };
  },

  computed: {
    attendance() {
      return store.attendance;
    },
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
