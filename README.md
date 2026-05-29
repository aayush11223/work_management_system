

Task 5 — Build WorkLogTable component (45 mins)
File: src/components/worklog/WorkLogTable.vue
What it needs:

Props: items (Array), loading (Boolean)
Use v-data-table
Columns: Date, Description, Units, Hours
Read only — no action buttons, no emits needed

What to google: vuetify 2 v-data-table

Task 6 — Build WorkLogForm component (1 hour)
File: src/components/worklog/WorkLogForm.vue
What it needs:

Props: visible (Boolean)
Use v-dialog
Inside dialog: v-text-field for date, v-textarea for description, v-text-field for units (type number), v-text-field for hours (type number)
Validation rules: description min 5 chars, units must be positive integer, hours max 24
Cancel emits close
Submit validates first then emits submit with form data
After submit, reset the form fields back to empty

What to google: vuetify 2 v-form reset, vuetify 2 number field validation

Task 7 — Build WorkLogView.vue (45 mins)
File: src/views/employee/WorkLogView.vue
What it needs:

Import WorkLogTable, WorkLogForm, PageHeader
Hardcoded logs array in data() with at least 4 records, each having: id, date, description, units, hours
A floating action button (v-btn with fab prop) that opens the dialog
Pass logs into WorkLogTable as items
Pass showDialog into WorkLogForm as visible
On submit emit — push new log into logs array, close dialog

What to google: vuetify 2 v-btn fab fixed, vue fab button bottom right

Task 8 — End of day review and cleanup (30 mins)
Go through every file you touched today and do these things:

Remove any leftover console.log statements
Make sure every component has a name property in its export default
Check that every form resets after submit
Test on a narrow browser window — do tables scroll horizontally on small screens?


End of day checklist:

LeaveStatusChip shows correct color per status
LeaveView table shows hardcoded leaves with colored chips
Apply Leave dialog opens, validates, and adds to the table on submit
WorkLogView table shows hardcoded logs
FAB button opens the work log dialog
Submit adds new log to the table
No red errors in browser console


Files you will have created by end of Day 2:

src/components/leave/LeaveStatusChip.vue
src/components/leave/LeaveRequestTable.vue
src/components/leave/LeaveRequestForm.vue
src/components/worklog/WorkLogTable.vue
src/components/worklog/WorkLogForm.vue
src/views/employee/LeaveView.vue
src/views/employee/WorkLogView.vue

Come back in the evening and we plan Day 3. Good luck tomorrow.