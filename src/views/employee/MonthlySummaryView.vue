<template>
  <div>
    <v-card flat>
      <v-card-title class="pl-4">
        {{ title }}
      </v-card-title>
      <v-divider></v-divider>
    </v-card>

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
import PaycheckSummaryCard from "@/components/paycheck/PaycheckSummaryCard.vue";
import StatCard from "@/components/common/StatCard.vue";
import MonthPicker from "@/components/paycheck/MonthPicker.vue";
import { store } from "@/store/store.js";

export default {
  components: {
    PaycheckSummaryCard,
    StatCard,
    MonthPicker,
  },

  data() {
    return {
      title: "My Work Summary",
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
      ],

      summary: store.summary,
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