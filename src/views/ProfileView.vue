<template>
  <div>
    <v-tabs dark v-model="activeTab">
      <v-tab>Profile Info</v-tab>
      <!-- Vuetify internally treats this as index 0  -->
      <v-tab>Change Password</v-tab>
      <!-- Vuetify internally treats this as index 1 -->
    </v-tabs>

    <!-- Both v-tabs and v-tabs-items share the same v-model -->

    <v-tabs-items v-model="activeTab">
      <!-- Tab 1: Profile Info -->
      <v-tab-item>
        <v-card flat class="mt-4">
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
      </v-tab-item>

      <!-- Tab 2: Change Password -->
      <v-tab-item>
        <v-card flat class="mt-4">
          <v-card-title>Change Password</v-card-title>
          <v-form ref="form" class="pl-4">
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
            <v-btn small class="mb-8" color="primary" @click="changePassword">
              Change Password
            </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-snackbar v-model="showSnackbar" color="success" top>
      Password updated successfully
    </v-snackbar>
  </div>
</template>

<script>
import { store } from "@/store/store.js";
export default {
  name: "ProfileView",

  data() {
    return {
      activeTab: 0, // <-- tracks which tab is active (0 = Profile, 1 = Password)

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

  computed: {
    user() {
      return store.user;
    },
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