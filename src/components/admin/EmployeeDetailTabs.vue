<template>
  <div>
    <v-tabs v-model="activeTab" class="rounded-sm" dark center-active>
      <v-tab>Attendance</v-tab>
      <v-tab>Leaves</v-tab>
      <v-tab>Work Logs</v-tab>
      <v-tab>Paycheck</v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <!-- Attendance Tab -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <TaBle :headers="headers" :items="items" />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Leaves Tab -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <TaBle :headers="leaveHeaders" :items="leaveRecords" />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Work Logs Tab -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <TaBle :headers="logHeaders" :items="logRecords" />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Paycheck  -->
      <!-- Import PaycheckSummaryCard and MonthPicker -->
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <MonthPicker
              :value="{ month: selectedMonth, year: selectedYear }"
              @change="handleMonthChange"
            />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TaBle from "@/components/common/TaBle.vue";
import MonthPicker from "../paycheck/MonthPicker.vue";

export default {
  name: "EmployeeDetailTabs",
  components: {
    TaBle,
    MonthPicker,
  },
  data() {
    return {
      activeTab: null,

      //  Attendance Tab
      headers: [
        { text: "Date", value: "date" },
        { text: "Check In", value: "CheckIn" },
        { text: "Check Out", value: "CheckOut" },
        { text: "Status", value: "Status" },
      ],

      items: [
        {
          date: "2026-06-01",
          CheckIn: "09:00 AM",
          CheckOut: "05:00 PM",
          Status: "Present",
        },
        {
          date: "2026-06-02",
          CheckIn: "09:15 AM",
          CheckOut: "05:05 PM",
          Status: "Present",
        },
        {
          date: "2026-06-03",
          CheckIn: "--:--",
          CheckOut: "--:--",
          Status: "Absent",
        },
        {
          date: "2026-06-04",
          CheckIn: "08:50 AM",
          CheckOut: "05:00 PM",
          Status: "Present",
        },
      ],

      // Leaves Tab
      leaveHeaders: [
        { text: "Leave Type", value: "leaveType" },
        { text: "Start Date", value: "startDate" },
        { text: "End Date", value: "endDate" },
        { text: "Status", value: "status" },
      ],
      leaveRecords: [
        {
          leaveType: "Sick Leave",
          startDate: "2026-01-10",
          endDate: "2026-01-12",
          status: "Approved",
        },
        {
          leaveType: "Annual Leave",
          startDate: "2026-03-15",
          endDate: "2026-03-20",
          status: "Approved",
        },
        {
          leaveType: "Unpaid Leave",
          startDate: "2026-05-02",
          endDate: "2026-05-02",
          status: "Pending",
        },
      ],

      // Work Logs Tab
      logHeaders: [
        { text: "Date", value: "date" },
        { text: "Description", value: "description" },
        { text: "Units", value: "units" },
        { text: "Hours", value: "hours" },
      ],
      logRecords: [
        {
          date: "2026-06-01",
          description: "System debugging and error log analysis",
          units: 2,
          hours: 4,
        },
        {
          date: "2026-06-02",
          description: "Frontend UI component redesign",
          units: 4,
          hours: 8,
        },
        {
          date: "2026-06-03",
          description: "Database schema migration and testing",
          units: 3,
          hours: 6,
        },
        {
          date: "2026-06-04",
          description: "Team sync and sprint planning documentation",
          units: 1,
          hours: 2,
        },
      ],

      // Paycheck Tab
      selectedMonth: new Date().getMonth() + 1,
      selectedYear: new Date().getFullYear(),
    };
  },
  props: {
    employeeId: {
      type: [String, Number],
      required: true,
    },
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
