Morning Block — 9am to 12pm (3 hours)
Goal: EmployeeDetailView with tabs

Task 25 — Build EmployeeDetailView.vue shell first (30 mins)
File: src/views/admin/EmployeeDetailView.vue
Start with just the page shell:

Import PageHeader
Hardcoded employee object in data() with fields: id, name, email, department, role, phone, salary
Show employee name and department in PageHeader
A v-card below showing all employee fields in two columns
Run it, confirm the page renders when you navigate to /admin/employees/1

What to google: vue router params access, meaning how to read the :id from the URL using this.$route.params.id

Task 26 — Build EmployeeDetailTabs and immediately wire it (1 hour)
File: src/components/admin/EmployeeDetailTabs.vue
Build it and import it into EmployeeDetailView straight away:
Component needs:

Props: employeeId (String or Number)
Use v-tabs and v-tab for four tabs: Attendance, Leaves, Work Logs, Paycheck
Use v-tabs-items and v-tab-item for each tab panel
For now each tab panel just shows a placeholder <p> with the tab name — you will fill content next
One data() value: activeTab bound to v-tabs with v-model

In EmployeeDetailView immediately after building:

Import EmployeeDetailTabs
Pass employee.id as employeeId prop
Run it and confirm tabs render and switch correctly

What to google: vuetify 2 v-tabs v-tabs-items, vuetify 2 tabs example

Task 27 — Fill Attendance tab inside EmployeeDetailTabs (45 mins)
Still in EmployeeDetailTabs.vue:

Import AttendanceTable component you already built on Day 1
Place it inside the Attendance v-tab-item
Add hardcoded attendanceRecords array in data() with 4 records
Pass it into AttendanceTable as items
Run it and confirm the attendance table shows inside the tab

No new component needed here — you are reusing what you already built.

Task 28 — Fill Leaves tab inside EmployeeDetailTabs (45 mins)
Still in EmployeeDetailTabs.vue:

Import LeaveRequestTable component you already built on Day 2
Place it inside the Leaves v-tab-item
Add hardcoded leaveRecords array in data() with 3 records
Pass it into LeaveRequestTable as items, set showActions to false — admin is just viewing here
Run it and confirm leave table shows inside the tab


Afternoon Block — 1pm to 5pm (4 hours)
Goal: Admin Attendance + LeaveManagement pages

Task 29 — Build EditAttendanceForm then wire it (45 mins)
File: src/components/attendance/EditAttendanceForm.vue
Build it:

Props: visible (Boolean), record (Object)
Use v-dialog
Fields pre-filled from record prop: date (read only), check in time, check out time, status dropdown
Status dropdown options: Present, Absent, Late
Cancel emits close
Save emits save with updated record data

Then immediately in src/views/admin/AttendanceView.vue:

Build the page with PageHeader, hardcoded records array, and AttendanceTable with showEdit prop set to true
Import EditAttendanceForm and wire it up
When AttendanceTable emits edit, set selectedRecord and open the dialog
When dialog emits save, find the record in the array and update it
Run it and confirm edit flow works end to end

What to google: javascript array findIndex, vue update object in array reactivity

Task 30 — Build LeaveManagementView.vue (1 hour)
File: src/views/admin/LeaveManagementView.vue
What it needs:

Import LeaveRequestTable, PageHeader
Hardcoded leaves array with 5 records covering all three statuses
A v-select filter at the top to filter by status: All, Pending, Approved, Rejected
filteredLeaves as a computed property that filters the array based on selected status
Pass filteredLeaves into LeaveRequestTable, set showActions to true
When approve is emitted, find that record in the array and change its status to "approved"
When reject is emitted, find that record and change status to "rejected"
Run it and confirm approve and reject buttons update the chip color immediately

What to google: vue computed property with filter, javascript array find

Task 31 — Build Admin WorkLogView.vue (45 mins)
File: src/views/admin/WorkLogView.vue
What it needs:

Import WorkLogTable, PageHeader
Hardcoded logs array with 5 records from different employees — add an employeeName field to each record
Add employeeName as an extra column in the table
A search v-text-field at top — filter logs by employee name using a computed property
Read only — no add or edit buttons for admin


Task 32 — End of day cleanup and verify (30 mins)

Navigate through every admin page and confirm no broken imports
Confirm EmployeeDetailView tabs all show correct content
Confirm approve/reject in LeaveManagementView updates chip color instantly
Confirm edit attendance dialog saves correctly
No red errors in console


End of day checklist:

EmployeeDetailView shows employee info and working tabs
Attendance tab shows attendance table
Leaves tab shows leave table
Admin AttendanceView edit dialog works end to end
LeaveManagement filter and approve/reject work
Admin WorkLogView search filters by employee name
No red errors in console


Files created by end of Day 4:

src/views/admin/EmployeeDetailView.vue
src/components/admin/EmployeeDetailTabs.vue
src/components/attendance/EditAttendanceForm.vue
src/views/admin/AttendanceView.vue
src/views/admin/LeaveManagementView.vue
src/views/admin/WorkLogView.vue

Come back in the evening and we plan Day 5 starting from Task 33.