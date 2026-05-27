<template>
  <div>
    <PageHeader :title="title" :subtitle="subtitle" class="mt-3 mb-6" />
    <v-row>
      <v-col v-for="(stat, index) in stats" :key="index" cols="12" class="mt-2">
        <StatCard
          :icon="stat.icon"
          :label="stat.label"
          :value="stat.value"
          :color="stat.color"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader.vue";
import StatCard from "@/components/common/StatCard.vue";

export default {
  name: "DashboardView",
  components: {
    StatCard,
    PageHeader,
  },
  data() {
    return {
      title: "My Workspace",

      subtitle:
        "Your personalized hub for today's priorities, upcoming deadlines, and assigned tasks.",

      stats: [
        {
          label: "Total Present",
          value: 42,
          icon: "mdi-account-check",
          color: "success",
        },
        {
          label: "Leaves Taken",
          value: 3,
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
          label: "Work Logs Submitted",
          value: 38,
          icon: "mdi-file-document-check",
          color: "primary",
        },
      ],
    };
  },
};
</script>
