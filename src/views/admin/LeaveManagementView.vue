<template>
  <div>
    <PageHeader title="Employees Leave" />

    <!-- Filter Section -->
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

    <!-- Leave Table -->
    <LeaveRequestTable
      :items="filteredLeaves"
      :loading="false"
      :showActions="true"
      @approve="handleApprove"
      @reject="handleReject"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import LeaveRequestTable from "@/components/leave/LeaveRequestTable.vue";

export default {
  name: "LeaveManagementView",
  components: {
    PageHeader,
    LeaveRequestTable,
  },
  data() {
    return {
      selectedStatus: "All",
      statusOptions: ["All", "Pending", "Approved", "Rejected"],
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
};
</script>

<style lang="scss" scoped>
</style>
