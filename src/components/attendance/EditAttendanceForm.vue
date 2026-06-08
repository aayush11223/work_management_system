<template>
  <v-dialog max-width="500px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Attendance</span>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            label="Date"
            v-model="localRecord.date"
            readonly
          ></v-text-field>

          <v-text-field
            label="Check In Time"
            v-model="localRecord.checkIn"
          ></v-text-field>

          <v-text-field
            label="Check Out Time"
            v-model="localRecord.checkOut"
          ></v-text-field>

          <v-select
            label="Status"
            v-model="localRecord.status"
            :items="['Present', 'Absent', 'Late']"
          ></v-select>
          Task 29 — Build EditAttendanceForm then wire it (45 mins)
          <!-- File: src/components/attendance/EditAttendanceForm.vue
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

What to google: javascript array findIndex, vue update object in array reactivity -->
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditAttendanceForm",
  props: {
    visible: {
      type: Boolean,
    },
    record: {
      type: Object,
    },
  },
  data() {
    return {
      localRecord: {
        date: "",
        checkIn: "",
        checkOut: "",
        status: "",
      },
    };
  },

  methods: {
    handleCancel() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
