<template>
  <v-card>
    <EmployeeDetailTabs :employeeId="employee.id" />

    <PageHeader title="Employee Details" />

    <v-row class="ml-1 mt-1">
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
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import EmployeeDetailTabs from "@/components/admin/EmployeeDetailTabs.vue";

export default {
  name: "EmployeeDetailView",
  components: {
    PageHeader,
    EmployeeDetailTabs,
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
