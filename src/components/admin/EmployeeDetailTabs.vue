<template>
  <div></div>
</template>

<script>
export default {
  props: {
    employeeId: {
      type: [String, Number],
    },
  },

  // Build it and import it into EmployeeDetailView straight away:
  // Component needs:

  // Props: employeeId (String or Number)
  // Use v-tabs and v-tab for four tabs: Attendance, Leaves, Work Logs, Paycheck
  // Use v-tabs-items and v-tab-item for each tab panel
  // For now each tab panel just shows a placeholder <p> with the tab name — you will fill content next
  // One data() value: activeTab bound to v-tabs with v-model

  // In EmployeeDetailView immediately after building:

  // Import EmployeeDetailTabs
  // Pass employee.id as employeeId prop
  // Run it and confirm tabs render and switch correctly

  // What to google: vuetify 2 v-tabs v-tabs-items, vuetify 2 tabs example
};
</script>

<style lang="scss" scoped>
</style>