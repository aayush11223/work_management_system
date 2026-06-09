<template>
  <div>
    <PageHeader title="Employees Leave" />
    <EmptyStateVue
      v-if="!leaves.length"
      class="text-center mt-6"
      icon="mdi-alert-circle-outline"
      message="No data found for this period"
    />
    <div v-else>
      <v-row class="mb-4">
        <v-col cols="12" sm="4">
          <v-select
            v-model="selectedStatus"
            :items="statusOptions"
            label="Filter by Status"
            outlined
            dense
            hide-details
          ></v-select>
        </v-col>
      </v-row>

      <LeaveRequestTable
        :items="filteredLeaves"
        :loading="false"
        :showActions="true"
        @approve="handleApprove"
        @reject="handleReject"
      />
    </div>

    <ConfirmDialog
      :visible="confirmDialog.visible"
      :title="confirmDialog.title"
      :message="confirmDialog.message"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import LeaveRequestTable from "@/components/leave/LeaveRequestTable.vue";
import EmptyStateVue from "@/components/common/EmptyState.vue";
import ConfirmDialog from "@/components/common/ConfirmDialog.vue";

export default {
  name: "LeaveManagementView",
  components: { PageHeader, LeaveRequestTable, EmptyStateVue, ConfirmDialog },

  data() {
    return {
      selectedStatus: "All",
      statusOptions: ["All", "Pending", "Approved", "Rejected"],

      confirmDialog: {
        visible: false,
        title: "",
        message: "",
        pendingLeaveItem: null, // holds the item waiting for confirmation
      },

      leaves: [
        {
          id: 1,
          type: "Annual",
          from: "2026-06-10",
          to: "2026-06-14",
          reason: "Family vacation",
          status: "pending",
        },
        {
          id: 2,
          type: "Sick",
          from: "2026-06-08",
          to: "2026-06-08",
          reason: "Fever",
          status: "approved",
        },
        {
          id: 3,
          type: "Maternity",
          from: "2026-07-01",
          to: "2026-08-01",
          reason: "Maternity leave",
          status: "pending",
        },
        {
          id: 4,
          type: "Annual",
          from: "2026-05-15",
          to: "2026-05-17",
          reason: "Out of town",
          status: "rejected",
        },
        {
          id: 5,
          type: "Unpaid",
          from: "2026-06-20",
          to: "2026-06-22",
          reason: "Personal work",
          status: "pending",
        },
      ],
    };
  },

  computed: {
    filteredLeaves() {
      if (this.selectedStatus === "All") return this.leaves;
      return this.leaves.filter(
        (leave) => leave.status === this.selectedStatus.toLowerCase()
      );
    },
  },

  methods: {
    handleApprove(leaveItem) {
      const record = this.leaves.find((item) => item.id === leaveItem.id);
      if (record) record.status = "approved";
    },

    handleReject(leaveItem) {
      // Don't reject immediately — open the confirm dialog first
      this.confirmDialog.pendingLeaveItem = leaveItem;
      this.confirmDialog.title = "Reject Leave Request";
      this.confirmDialog.message = `Are you sure you want to reject this ${leaveItem.type} leave?`;
      this.confirmDialog.visible = true;
    },

    onConfirm() {
      // User confirmed — now do the actual rejection
      const record = this.leaves.find(
        (item) => item.id === this.confirmDialog.pendingLeaveItem.id
      );
      if (record) record.status = "rejected";
      this.closeConfirmDialog();
    },

    onCancel() {
      // User changed their mind — just close, do nothing
      this.closeConfirmDialog();
    },

    closeConfirmDialog() {
      this.confirmDialog.visible = false;
      this.confirmDialog.pendingLeaveItem = null;
      this.confirmDialog.title = "";
      this.confirmDialog.message = "";
    },
  },
};
</script>