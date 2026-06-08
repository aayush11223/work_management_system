<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:[`item.status`]="{ item }">
      <LeaveStatusChip :status="item.status" />
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <div v-if="item.status === 'pending'">
        <v-btn
          depressed
          small
          color="success"
          class="mr-2"
          @click="$emit('approve', item)"
        >
          Approve
        </v-btn>
        <v-btn depressed small color="error" @click="$emit('reject', item)">
          Reject
        </v-btn>
      </div>
      <span v-else class="text-caption grey--text">Processed</span>
    </template>
  </v-data-table>
</template>

<script>
import LeaveStatusChip from "./LeaveStatusChip.vue";

export default {
  name: "LeaveRequestTable",
  components: {
    LeaveStatusChip,
  },
  props: {
    items: {
      type: Array,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    showActions: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    headers() {
      const headerTitle = [
        { text: "Type", value: "type" },
        { text: "From", value: "from" },
        { text: "To", value: "to" },
        { text: "Reason", value: "reason" },
        { text: "Status", value: "status" },
      ];

      if (this.showActions) {
        headerTitle.push({
          text: "Actions",
          value: "actions",
          sortable: false,
        });
      }

      return headerTitle;
    },
  },
};
</script>

<style scoped></style>