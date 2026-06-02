<template>
  <div>
    <PageHeader title="Employees" />
    <v-text-field
      v-model="searchQuery"
      prepend-inner-icon="mdi-magnify"
      label="Search Employees"
      hide-details
      class="mb-4"
    />
    <EmployeeTable
      :items="employees"
      :search="searchQuery"
      @select="viewEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from "@/components/admin/EmployeeTable.vue";
import PageHeader from "@/components/common/PageHeader.vue";

export default {
  name: "EmployeeListView",

  components: {
    EmployeeTable,
    PageHeader,
  },

  data() {
    return {
      searchQuery: "",
      employees: [
        {
          id: 101,
          name: "Aayush",
          email: "aayush@gmail.com",
          department: "Development",
          role: "Front End Developer",
          salary: 30000,
        },
        {
          id: 102,
          name: "Rohan",
          email: "rohan@gmail.com",
          department: "Development",
          role: "Back End Developer",
          salary: 35000,
        },
        {
          id: 103,
          name: "Sita",
          email: "sita@gmail.com",
          department: "Design",
          role: "UI/UX Designer",
          salary: 28000,
        },
        {
          id: 104,
          name: "Niranjan",
          email: "niranjan@gmail.com",
          department: "Quality Assurance",
          role: "QA Engineer",
          salary: 25000,
        },
        {
          id: 105,
          name: "Anjali",
          email: "anjali@gmail.com",
          department: "Management",
          role: "Project Manager",
          salary: 45000,
        },
      ],
    };
  },

  methods: {
    viewEmployee(employee) {
      this.$router.push(`/admin/employees/${employee.id}`);
    },
  },
};
</script>