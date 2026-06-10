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
    };
  },
  computed: {
    leaves() {
      return store.leave;
    },
  },
  methods: {
    handleSubmit(formData) {
      // Create new leave object with a unique id and pending status
      const newLeave = {
        id: store.leave.length + 1,
        type: formData.leaveType,
        from: formData.fromDate,
        to: formData.toDate,
        reason: formData.reason,
        status: "pending",
      };

      // Push into the store array; Vue reactivity automatically updates the UI
      store.leave.push(newLeave);

      // Close the dialog
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
</style>
