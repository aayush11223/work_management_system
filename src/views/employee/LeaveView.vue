<template>
  <!-- Page Header with Apply Leave button -->
  <div>
    <PageHeader
      title="My Leave Requests"
      btnName="APPLY LEAVE"
      @doAction="showDialog = true"
    />

    <EmptyStateVue
      v-if="!leaves.length"
      class="text-center mt-6"
      icon="mdi-alert-circle-outline"
      message="No data found for this period"
    />

    <div v-else>
      <LeaveRequestTable
        :items="leaves"
        :loading="false"
        :showActions="false"
      />
      <LeaveRequestForm
        :visible="showDialog"
        @close="showDialog = false"
        @submit="handleSubmit"
      />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageBtn.vue";
import LeaveRequestTable from "@/components/leave/LeaveRequestTable.vue";
import LeaveRequestForm from "@/components/leave/LeaveRequestForm.vue";
import EmptyStateVue from "@/components/common/EmptyState.vue";

export default {
  name: "LeaveView",

  components: {
    PageHeader,
    LeaveRequestTable,
    LeaveRequestForm,
    EmptyStateVue,
  },

  data() {
    return {
      showDialog: false,

      leaves: [
        {
          id: 1,
          type: "Annual Leave",
          from: "2024-01-10",
          to: "2024-01-15",
          reason: "Family vacation",
          status: "approved",
        },
        {
          id: 2,
          type: "Sick Leave",
          from: "2024-02-05",
          to: "2024-02-06",
          reason: "Fever and cold",
          status: "rejected",
        },
        {
          id: 3,
          type: "Emergency Leave",
          from: "2024-03-01",
          to: "2024-03-02",
          reason: "Family emergency",
          status: "pending",
        },
        {
          id: 4,
          type: "Annual Leave",
          from: "2024-04-10",
          to: "2024-04-12",
          reason: "Personal work",
          status: "approved",
        },
      ],
    };
  },

  methods: {
    handleSubmit(formData) {
      // Create new leave object with a unique id and pending status
      const newLeave = {
        id: this.leaves.length + 1,
        type: formData.leaveType,
        from: formData.fromDate,
        to: formData.toDate,
        reason: formData.reason,
        status: "pending",
      };

      // Push into leaves array — Vue reactivity automatically updates the table
      this.leaves.push(newLeave);

      // Close the dialog
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
</style>