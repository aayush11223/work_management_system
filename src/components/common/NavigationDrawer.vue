<template>
  <div>
    <v-navigation-drawer v-model="drawerValue" dark absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="grey darken-1--text text--accent-4">
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.route"
          >
            <!-- Makes :to, item behave like router link. -->

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <!-- logout part -->
          <v-list-item to="/login" class="red--text">
            <v-list-item-icon>
              <v-icon class="red--text"> mdi-logout </v-icon>
            </v-list-item-icon>

            <v-list-item-title> Log Out </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
    },
    group: {
      type: Boolean,
      default: null,
    },
    menuItems: {
      type: Array,
    },
  },
  computed: {
    drawerValue: {
      get() {
        return this.drawer;
      },
      set(newValue) {
        return this.$emit("toggle", newValue);
      },
    },
  },

  methods: {
    enableIt() {
      this.$emit("enableNavDrawer");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>