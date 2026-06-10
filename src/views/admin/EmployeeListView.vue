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
import { store } from "@/store/store.js";

export default {
  name: "EmployeeListView",

  components: {
    EmployeeTable,
    PageHeader,
  },

  data() {
    return {
      searchQuery: "",
      employees: store.employees,
    };
  },

  methods: {
    viewEmployee(employee) {
      this.$router.push(`/admin/employees/${employee.id}`);
    },
  },
};
</script>