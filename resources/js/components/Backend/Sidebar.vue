<template>
  <div>
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column nav-child-indent"
        data-widget="treeview"
        role="menu"
        data-accordion="true"
      >
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">
            <i class="fas fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <i class="fas fa-user-alt"></i>
            <p>Profile</p>
          </router-link>
        </li>

        <!--  -->
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>