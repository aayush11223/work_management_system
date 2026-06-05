<template>
  <div>
    <v-tabs v-model="activeTab" class="rounded-sm" dark center-active>
      <v-tab>Attendance</v-tab>
      <v-tab>Leaves</v-tab>
      <v-tab>Work Logs</v-tab>
      <v-tab>Paycheck</v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <v-card flat>
          <v-card-text> Attendance Placeholder </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text> Leaves Placeholder </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text> Work Logs Placeholder </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text> Paycheck Placeholder </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "EmployeeDetailTabs",
  data() {
    return {
      activeTab: null,
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
