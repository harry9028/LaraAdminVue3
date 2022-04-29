<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Payments List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Plan & Payments</a></li>
              <li class="breadcrumb-item active">Payments</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="input-group mb-3 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="search"
                aria-label="search"
                aria-describedby="basic-addon2"
                v-model="search"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-secondary"
                  @click="getResults"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Paymnets</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Plan Id</th>
                        <th>Plan Name</th>
                        <th>Validity</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in PlanList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.plan_id }}</td>
                        <td>
                          <p>{{ user.plan_name }}</p>
                        </td>
                        <td>{{ user.validity }}</td>
                        <td>{{ user.amount }}</td>
                      </tr>
                      <tr v-show="!PlanList.data.length">
                        <td colspan="5">No data found</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="overlay" v-if="isLoad">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
              </div>
              <div class="card-footer clearfix">
                <pagination
                  :data="PlanList"
                  @pagination-change-page="getResults"
                  :limit="8"
                  :show-disabled="true"
                >
                  <template #prev-nav>
                    <span>&lt; Previous</span>
                  </template>
                  <template #next-nav>
                    <span>Next &gt;</span>
                  </template>
                </pagination>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
import Form from "vform";
import LaravelVuePagination from "laravel-vue-pagination";
export default {
  components: {
    pagination: LaravelVuePagination,
  },
  data() {
    return {
      // users empty array
      editmode: false,
      PlanList: { data: [] },
      page: 1,
      isLoad: false,
      search: "",
    };
  },
  methods: {
    getPlanList() {
      this.isLoad = true;
      axios.get("api/plan").then((response) => {
        this.isLoad = false;
        this.PlanList = response.data;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/plan?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.isLoad = false;
          this.PlanList = response.data;
        });
    },
  },
  mounted() {
    this.getPlanList();
  },
};
</script>
