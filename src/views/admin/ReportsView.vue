<template>
  <div>
    <PageBtn
      @doAction="snackbar = true"
      title="Employee Report"
      btnName="Export"
    />

    <!-- Snackbar -->
    <v-snackbar top v-model="snackbar" :vertical="vertical">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Month Picker -->
    <MonthPicker
      :value="{ month: selectedMonth, year: selectedYear }"
      @change="handleMonthChange"
    />

    <!-- Table -->
    <TaBle :headers="headers" :items="reportData" />
  </div>
</template>

<script>
import MonthPicker from "@/components/paycheck/MonthPicker.vue";
import PageBtn from "@/components/common/PageBtn.vue";
import TaBle from "@/components/common/TaBle.vue";

export default {
  name: "ReportsView",
  components: {
    MonthPicker,
    PageBtn,
    TaBle,
  },
  data() {
    return {
      selectedMonth: new Date().getMonth() + 1,
      selectedYear: new Date().getFullYear(),

      headers: [
        { text: "Name", value: "employeeName" },
        { text: "Department", value: "department" },
        { text: "Attendance Days", value: "attendanceDays" },
        { text: "Leaves Taken", value: "leavesTaken" },
        { text: "Total Units", value: "totalUnits" },
        { text: "Net Pay", value: "netPay" },
      ],

      reportData: [
        {
          employeeName: "Aayush",
          department: "Development",
          attendanceDays: 28,
          leavesTaken: 2,
          totalUnits: 5,
          netPay: 30000,
        },
        {
          employeeName: "Rohan",
          department: "Development",
          attendanceDays: 27,
          leavesTaken: 3,
          totalUnits: 8,
          netPay: 35000,
        },
        {
          employeeName: "Sita",
          department: "Design",
          attendanceDays: 28,
          leavesTaken: 2,
          totalUnits: 5,
          netPay: 28000,
        },
        {
          employeeName: "Niranjan",
          department: "Quality Assurance",
          attendanceDays: 29,
          leavesTaken: 1,
          totalUnits: 4,
          netPay: 25000,
        },
        {
          employeeName: "Anjali",
          department: "Management",
          attendanceDays: 28,
          leavesTaken: 2,
          totalUnits: 5,
          netPay: 45000,
        },
      ],

      // Snackbar data
      snackbar: false,
      text: "Export coming soon",
      vertical: true,
    };
  },
  methods: {
    handleMonthChange(value) {
      this.selectedMonth = value.month;
      this.selectedYear = value.year;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
