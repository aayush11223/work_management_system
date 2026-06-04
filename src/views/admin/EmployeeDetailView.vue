<template>
  <div>
    <v-card flat>
      <v-card-title class="pl-4">
        {{ title }}
      </v-card-title>
      <v-card-subtitle class="pl-4">
        {{ subtitle }}
      </v-card-subtitle>

      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 101,
      name: "Aayush",
      email: "aayush@gmail.com",
      department: "Development",
      role: "Front End Developer",
      phone: "+977-9800000000",
      salary: 30000,
    };
  },

  components: {},
};
</script>

<style lang="scss" scoped>
</style>