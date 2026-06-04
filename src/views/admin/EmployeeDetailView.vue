<template>
  <div>
    <PageHeader title="Employee Details" />

    <v-card class="pa-4 mt-4" elevation="2">
      <v-row>
        <v-col cols="12" md="6">
          <p>ID: {{ employee.id }}</p>
          <p>Name: {{ employee.name }}</p>
          <p>Email: {{ employee.email }}</p>
          <p>Department: {{ employee.department }}</p>
        </v-col>
        <v-col cols="12" md="6">
          <p>Role: {{ employee.role }}</p>
          <p>Phone: {{ employee.phone }}</p>
          <p>Salary: {{ employee.salary }}</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";

export default {
  name: "EmployeeDetailView",
  components: {
    PageHeader,
  },
  data() {
    return {
      employee: {
        id: this.$route.params.id,
        name: "Aayush Basnet",
        email: "aayush@gmail.com",
        department: "Development",
        role: "Front End Developer",
        phone: "+977 9000000000",
        salary: "30,000",
      },
    };
  },
};
</script>
