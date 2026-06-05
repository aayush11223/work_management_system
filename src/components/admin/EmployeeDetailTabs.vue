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

      <!-- Leaves Placeholder -->
      <v-tab-item>
        <v-card flat>
          <v-card-text> Leaves Placeholder </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Work Logs Placeholder -->
      <v-tab-item>
        <v-card flat>
          <v-card-text> Work Logs Placeholder </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Paycheck Placeholder -->
      <v-tab-item>
        <v-card flat>
          <v-card-text> Paycheck Placeholder </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import TaBle from "@/components/common/TaBle.vue";

export default {
  name: "EmployeeDetailTabs",
  components: {
    TaBle,
  },
  data() {
    return {
      activeTab: null,

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
          CheckIn: "N/A",
          CheckOut: "N/A",
          Status: "Absent",
        },
        {
          date: "2026-06-04",
          CheckIn: "08:50 AM",
          CheckOut: "05:00 PM",
          Status: "Present",
        },
      ],
    };
  },
  props: {
    employeeId: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
