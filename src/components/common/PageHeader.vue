<template>
  <v-card flat>
    <v-card-title class="d-flex align-center">
      {{ title }}
      <v-spacer />
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider> </v-divider>
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