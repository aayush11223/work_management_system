<template>
  <div>
    <!-- <v-btn dark @click="$emit('open')"> Open Snackbar </v-btn> -->
    <v-snackbar v-model="visible" timeout="3000">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="$emit('close')">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },

    type: {
      type: String,
      default: "info",
    },

    // visible: {
    //   type: Boolean,
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>