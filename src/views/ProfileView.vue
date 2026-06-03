<template>
  <div>
    <!-- User Info Card -->
    <v-card class="pa-4 mb-4" flat>
      <v-card-title>Profile Information</v-card-title>

      <v-simple-table>
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>{{ user.name }}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>{{ user.email }}</td>
          </tr>

          <tr>
            <td><strong>Department</strong></td>
            <td>{{ user.department }}</td>
          </tr>

          <tr>
            <td><strong>Role</strong></td>
            <td>{{ user.role }}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
    <v-divider> </v-divider>

    <!-- Password Card -->
    <v-card class="pa-4" flat>
      <v-card-title>Change Password</v-card-title>

      <v-form ref="form">
        <v-text-field
          v-model="passwordForm.currentPassword"
          label="Current Password"
          type="password"
          :rules="[rules.required]"
        />

        <v-text-field
          v-model="passwordForm.newPassword"
          label="New Password"
          type="password"
          :rules="[rules.required, rules.minPassword]"
        />

        <v-text-field
          v-model="passwordForm.confirmPassword"
          label="Confirm New Password"
          type="password"
          :rules="[rules.required, rules.passwordMatch]"
        />

        <v-btn color="primary" @click="changePassword"> Change Password </v-btn>
      </v-form>
    </v-card>

    <v-snackbar v-model="showSnackbar" color="success">
      Password updated successfully
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "ProfileView",

  data() {
    return {
      user: {
        name: "Aayush Basnet",
        email: "aayush@example.com",
        department: "IT",
        role: "Frontend Developer",
        phone: "+977-9800000000",
      },

      passwordForm: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },

      showSnackbar: false,

      rules: {
        required: (v) => !!v || "This field is required",

        minPassword: (v) =>
          (v && v.length >= 6) || "Password must be at least 6 characters",

        passwordMatch: (v) =>
          v === this.passwordForm.newPassword || "Passwords do not match",
      },
    };
  },

  methods: {
    changePassword() {
      const valid = this.$refs.form.validate();

      if (!valid) return;

      this.showSnackbar = true;

      this.passwordForm = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      };
    },
  },
};
</script>