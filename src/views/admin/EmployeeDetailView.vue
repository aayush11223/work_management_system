<template>
  <div>
    <PageHeader title="Aayush Basnet" subtitle="Development" />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
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

  components: {
    PageHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>