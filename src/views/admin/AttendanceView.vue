<template>
  <div>
    <PageHeader title="Employee Attendance" />

    <TaBle
      :headers="headers"
      :items="records"
      :loading="false"
      :showEdit="true"
      @edit="openEditDialog"
    />

    <EditAttendanceForm
      :visible="showDialog"
      :record="selectedRecord"
      @close="showDialog = false"
      @save="handleSave"
    />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import TaBle from "@/components/common/TaBle.vue";
import EditAttendanceForm from "@/components/attendance/EditAttendanceForm.vue";

export default {
  components: {
    PageHeader,
    TaBle,
    EditAttendanceForm,
  },
  data() {
    return {
      showDialog: false,
      selectedRecord: {},
      headers: [
        { text: "Date", value: "date" },
        { text: "Check In", value: "checkIn" },
        { text: "Check Out", value: "checkOut" },
        { text: "Status", value: "status" },
      ],
      records: [
        {
          id: 1,
          date: "2026-06-01",
          checkIn: "09:00",
          checkOut: "17:00",
          status: "Present",
        },
        {
          id: 2,
          date: "2026-06-02",
          checkIn: "09:30",
          checkOut: "17:00",
          status: "Late",
        },
        {
          id: 3,
          date: "2026-06-03",
          checkIn: "--:--",
          checkOut: "--:--",
          status: "Absent",
        },
      ],
    };
  },
  methods: {
    openEditDialog(record) {
      this.selectedRecord = record;
      this.showDialog = true;
    },
    handleSave(updatedRecord) {
      // Find index of the record that matches the modified id
      const index = this.records.findIndex((r) => r.id === updatedRecord.id);

      if (index !== -1) {
        // reactive array replacement
        this.$set(this.records, index, updatedRecord);
      }

      this.showDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>