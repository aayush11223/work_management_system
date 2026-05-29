<template>
  <!-- Page Header with Apply Leave button -->
  <div>
    <PageHeader title="My Leave Requests" />

    <div class="d-flex justify-end">
      <v-btn class="my-3" color="primary" @click="showDialog = true">
        Apply Leave
      </v-btn>
    </div>

    <!-- Leave Request Table -->
    <LeaveRequestTable :items="leaves" :loading="false" :showActions="false" />

    <!-- Leave Request Form Dialog -->
    <LeaveRequestForm
      :visible="showDialog"
      @close="showDialog = false"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import LeaveRequestTable from "@/components/leave/LeaveRequestTable.vue";
import LeaveRequestForm from "@/components/leave/LeaveRequestForm.vue";

export default {
  name: "LeaveView",

  components: {
    PageHeader,
    LeaveRequestTable,
    LeaveRequestForm,
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