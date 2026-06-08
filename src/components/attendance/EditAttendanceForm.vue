<template>
  <v-dialog v-model="visible" max-width="500px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5">Edit Attendance</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-form ref="form">
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
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleCancel"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="handleSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "EditAttendanceForm",
  props: {
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
    handleSave() {
      this.$emit("save", this.localRecord);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
