<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    class="elevation-1"
  >
    <!-- Status column with LeaveStatusChip -->
    <template v-slot:item.status="{ item }">
      <!-- v-slot is used to customize a v-data-table slots and in our case, we use it to render colorful chips in v-data-table-->
      <LeaveStatusChip :status="item.status" />
    </template>

    <!-- Actions column with Approve and Reject buttons -->
    <template v-slot:item.actions="{ item }">
      <div v-if="showActions">
        <v-btn
          color="success"
          small
          class="mr-2"
          @click="$emit('approve', item.id)"
        >
          Approve
        </v-btn>
        <v-btn color="error" small @click="$emit('reject', item.id)">
          Reject
        </v-btn>
      </div>
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
        });
      }

      return headerTitle;
    },
  },
};
</script>

<style scoped>
</style>