<template>
  <div>
    <PageHeader title="Employees Leave" />
    <EmptyStateVue
      v-if="!allLeaves.length"
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
import { store } from "@/store/store.js"; // Imported central store

export default {
  name: "LeaveManagementView",
  components: {
    PageHeader,
    LeaveRequestTable,
    EmptyStateVue,
    ConfirmDialog,
  },
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
    };
  },
  computed: {
    // Replaced hardcoded array with store.allLeaves
    allLeaves() {
      return store.allLeaves;
    },
    filteredLeaves() {
      if (this.selectedStatus === "All") return store.allLeaves;
      return store.allLeaves.filter(
        (leave) => leave.status === this.selectedStatus.toLowerCase()
      );
    },
  },
  methods: {
    // Find record and update status directly in store.allLeaves
    handleApprove(leaveItem) {
      const record = store.allLeaves.find((item) => item.id === leaveItem.id);
      if (record) {
        record.status = "approved";
      }
    },
    handleReject(leaveItem) {
      // Don't reject immediately — open the confirm dialog first
      this.confirmDialog.pendingLeaveItem = leaveItem;
      this.confirmDialog.title = "Reject Leave Request";
      this.confirmDialog.message = `Are you sure you want to reject this ${leaveItem.type} leave?`;
      this.confirmDialog.visible = true;
    },
    onConfirm() {
      // User confirmed — now do the actual rejection and update directly
      const record = store.allLeaves.find(
        (item) => item.id === this.confirmDialog.pendingLeaveItem.id
      );
      if (record) {
        record.status = "rejected";
      }
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
