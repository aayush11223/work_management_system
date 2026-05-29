<template>
  <div>
    <v-chip :color="chipColor">{{ status }} </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
    },
  },
  computed: {
    chipColor() {
      const currentStatus = this.status;
      //this line makes the status props as a dependency for computed porperty

      switch (currentStatus) {
        case "approved":
          return "green";

        case "pending":
          return "amber";

        case "rejected":
          return "red";

        default:
          return "grey";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>