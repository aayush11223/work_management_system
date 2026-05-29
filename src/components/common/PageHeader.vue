<template>
  <v-card fluid>
    <v-card-title class="d-flex align-center">
      <div class="title">{{ title }}</div>
      <v-spacer />
      <slot name="actions" />
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
</style>