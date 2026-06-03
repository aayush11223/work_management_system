<template>
  <div>
    <PageHeader title="My Work Summary" />

    <MonthPicker
      class="mt-3"
      :value="{
        month: selectedMonth,
        year: selectedYear,
      }"
      @change="handleMonthChange"
    />

    <div
      v-for="(stat, index) in stats"
      :key="index"
      cols="12"
      class="mb-4 pt-0"
    >
      <StatCard
        :icon="stat.icon"
        :label="stat.label"
        :value="stat.value"
        :color="stat.color"
      />
    </div>

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

      stats: [
        {
          label: "Attendance Days",
          value: 22,
          icon: "mdi-account-check",
          color: "success",
        },
        {
          label: "Leaves Taken",
          value: 2,
          icon: "mdi-account-arrow-right",
          color: "warning",
        },
        {
          label: "Pending Leaves",
          value: 5,
          icon: "mdi-account-clock",
          color: "info",
        },
        {
          label: "Total Units",
          value: 145,
          icon: "mdi-file-document-check",
          color: "primary",
        },
      ],

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