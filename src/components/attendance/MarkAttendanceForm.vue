<template>
  <v-dialog
    :value="visible"
    @input="$emit('close')"
    max-width="500px"
    persistent
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Mark Attendance</span>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              readonly
              v-model="form.checkIn"
              label="Check In Time"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              readonly
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

  mounted() {
    const now = new Date();
    this.form.checkIn = now.toLocaleTimeString();

    const outDate = new Date();
    outDate.setSeconds(outDate.getSeconds() + 1);
    this.form.checkOut = outDate.toLocaleTimeString();
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


