<template>
  <div>
    <PageHeader class="my-3" title="My Work Summary" />

    <MonthPicker
      :value="{
        month: selectedMonth,
        year: selectedYear,
      }"
      @change="handleMonthChange"
    />

    <v-row>
      <v-col cols="12" md="4">
        <StatCard
          label="Attendance Days"
          :value="stats.attendanceDays"
          color="success"
          icon="mdi-account-check"
        />
      </v-col>

      <v-col cols="12" md="4">
        <StatCard
          label="Leaves Taken"
          :value="stats.leavesTaken"
          icon="mdi-account-arrow-right"
          color="warning"
        />
      </v-col>

      <v-col cols="12" md="4">
        <StatCard
          label="Total Units"
          :value="stats.totalUnits"
          icon="mdi-file-document-check"
          color="info"
        />
      </v-col>
    </v-row>

    <PaycheckSummaryCard :summary="summary" />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import PaycheckSummaryCard from "@/components/paycheck/PaycheckSummaryCard.vue";
import StatCard from "@/components/common/StatCard.vue";
import MonthPicker from "@/components/paycheck/MonthPicker.vue";

export default {
  components: {
    PageHeader,
    PaycheckSummaryCard,
    StatCard,
    MonthPicker,
  },

  data() {
    return {
      selectedMonth: new Date().getMonth() + 1,
      selectedYear: new Date().getFullYear(),

      stats: {
        attendanceDays: 22,
        leavesTaken: 2,
        totalUnits: 145,
      },

      summary: {
        baseSalary: 3500,
        earnedBaseSalary: 3500,
        unitsBonus: 120,
        grossPay: 3620,
        taxDeduction: 150,
        netPay: 3470,
      },
    };
  },

  methods: {
    handleMonthChange(value) {
      this.selectedMonth = value.month;
      this.selectedYear = value.year;
    },
  },
};
</script>