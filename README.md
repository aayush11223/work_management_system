

Task 22 — Build EmployeeTable component (45 mins)
File: src/components/admin/EmployeeTable.vue
What it needs:

Props: items (Array), loading (Boolean), search (String)
Use v-data-table with the search prop passed directly into it
Columns: Name, Email, Department, Role, Salary
Clicking a row emits select with the employee object
Use @click:row on v-data-table to handle row click

What to google: vuetify 2 v-data-table search, vuetify 2 v-data-table click row

Task 23 — Build EmployeeListView.vue (1 hour)
File: src/views/admin/EmployeeListView.vue
What it needs:

Import EmployeeTable, PageHeader
Hardcoded employees array in data() with at least 5 records each having: id, name, email, department, role, salary
A v-text-field with search icon at top for search input — bind to searchQuery in data
Pass employees as items and searchQuery as search into EmployeeTable
When select is emitted, navigate to /admin/employees/:id using this.$router.push

What to google: vue router push with params, vuetify 2 v-text-field prepend-icon

Task 24 — End of day cleanup (30 mins)

Add /profile route to router under EmployeeLayout children
Add all /admin/* routes to router under AdminLayout children
Test that clicking an employee row navigates to the correct URL with the id
Check AdminLayout nav links all work
No red errors in console


End of day checklist:

MonthPicker dropdowns render and emit correctly
MonthlySummaryView shows stat cards and paycheck breakdown
ProfileView shows user info and password form with validation
AdminLayout shell works with correct nav links
EmployeeListView table shows employees with working search
Clicking a row navigates to /admin/employees/:id
No red errors in console


Files created by end of Day 3:

src/components/paycheck/MonthPicker.vue
src/components/paycheck/PaycheckSummaryCard.vue
src/components/worklog/WorkLogForm.vue
src/views/employee/MonthlySummaryView.vue
src/views/ProfileView.vue
src/layouts/AdminLayout.vue
src/components/admin/EmployeeTable.vue
src/views/admin/EmployeeListView.vue
Placeholder files for all remaining admin views

