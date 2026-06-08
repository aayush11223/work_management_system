<template>
  <v-dialog
    :value="visible"
    @input="$emit('close')"
    max-width="500px"
    persistent
  >
    <v-card>
      <div class="d-flex justify-space-between align-center">
        <v-card-title> Mark Attendance </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="text-right" icon @click="$emit('close')">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              type="time"
              v-model="form.checkIn"
              label="Check In Time"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="time"
              v-model="form.checkOut"
              label="Check Out Time"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="submitForm"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: {
        checkIn: "",
        checkOut: "",
      },
    };
  },

  methods: {
    submitForm() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
</style>


