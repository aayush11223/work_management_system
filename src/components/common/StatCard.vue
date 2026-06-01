<template>
  <v-card class="pa-4" elevation="2">
    <div class="d-flex align-center justify-space-between">
      <div>
        <div class="caption grey--text text-uppercase font-weight-bold pl-3">
          {{ label }}
        </div>
        <div class="headline font-weight-medium mt-1 pl-3">
          {{ value }}
        </div>
      </div>

      <div class="pr-3">
        <v-avatar :color="color" size="48">
          <v-icon dark>
            {{ icon }}
          </v-icon>
        </v-avatar>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>
