<!-- EmployeeDetailView.vue -->
<template>
  <v-card>
    <EmployeeDetailTabs :employeeId="employee.id" />

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
import EmployeeDetailTabs from "@/components/admin/EmployeeDetailTabs.vue";

const employees = [
  {
    id: 101,
    name: "Aayush",
    email: "aayush@gmail.com",
    department: "Development",
    role: "Front End Developer",
    salary: 30000,
    phone: "+977 9000000000",
  },
  {
    id: 102,
    name: "Rohan",
    email: "rohan@gmail.com",
    department: "Development",
    role: "Back End Developer",
    salary: 35000,
    phone: "+977 9111111111",
  },
  {
    id: 103,
    name: "Sita",
    email: "sita@gmail.com",
    department: "Design",
    role: "UI/UX Designer",
    salary: 28000,
    phone: "+977 9222222222",
  },
  {
    id: 104,
    name: "Niranjan",
    email: "niranjan@gmail.com",
    department: "Quality Assurance",
    role: "QA Engineer",
    salary: 25000,
    phone: "+977 9333333333",
  },
  {
    id: 105,
    name: "Anjali",
    email: "anjali@gmail.com",
    department: "Management",
    role: "Project Manager",
    salary: 45000,
    phone: "+977 9444444444",
  },
];

export default {
  name: "EmployeeDetailView",
  components: {
    EmployeeDetailTabs,
  },
  computed: {
    employee() {
      const id = Number(this.$route.params.id);
      return employees.find((emp) => emp.id === id);
    },
  },
};
</script>