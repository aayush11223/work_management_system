Task 25 — Build EmployeeDetailView.vue shell first (30 mins)
File: src/views/admin/EmployeeDetailView.vue
Start with just the page shell:

Import PageHeader
Hardcoded employee object in data() with fields: id, name, email, department, role, phone, salary
Show employee name and department in PageHeader
A v-card below showing all employee fields in two columns
Run it, confirm the page renders when you navigate to /admin/employees/1

What to google: vue router params access, meaning how to read the :id from the URL using this.$route.params.id