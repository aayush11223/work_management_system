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
import { store } from "@/store/store.js";

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
      leaves: store.leave,
    };
  },

  methods: {
    handleSubmit(formData) {
      const newLeave = {
        id: this.leaves.length + 1,
        type: formData.leaveType,
        from: formData.fromDate,
        to: formData.toDate,
        reason: formData.reason,
        status: "pending",
      };

      this.leaves.push(newLeave);
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
</style>
