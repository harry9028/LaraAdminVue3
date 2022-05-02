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
                        <th>Order Id</th>
                        <th>Mobile No</th>
                        <th>Plan Name</th>
                        <th>Amount</th>
                        <th>Paymnet Mode</th>
                        <th>Paymnet Status</th>
                        <th>Paymnet Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in PaymentListData.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>
                          {{ user.order_id }}
                        </td>
                        <td>{{ user.mobile_no }}</td>
                        <td>
                          <p v-if="user.plan">{{ user.plan.plan_name }}</p>
                        </td>
                        <td>{{ user.amount }}</td>
                        <td>{{ user.payment_mode }}</td>
                        <td>{{ user.payment_status }}</td>
                        <td>{{ user.payment_date }}</td>
                      </tr>
                      <tr v-show="!PaymentListData.data.length">
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
                  :data="PaymentListData"
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
import LaravelVuePagination from "laravel-vue-pagination";
export default {
  components: {
    pagination: LaravelVuePagination,
  },
  data() {
    return {
      // users empty array
      editmode: false,
      PaymentListData: { data: [] },
      page: 1,
      isLoad: false,
      search: "",
    };
  },
  methods: {
    PaymentList() {
      this.isLoad = true;
      axios.get("api/payment").then((response) => {
        this.PaymentListData = response.data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      axios
        .get("api/payment?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.PaymentListData = response.data;
          this.isLoad = false;
        });
    },
  },
  mounted() {
    this.PaymentList();
  },
};
</script>
