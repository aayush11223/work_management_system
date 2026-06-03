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
          return "green darken-1";

        case "pending":
          return "yellow darken-3";

        case "rejected":
          return "red darken-1";

        default:
          return "grey";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>