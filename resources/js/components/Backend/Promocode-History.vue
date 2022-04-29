<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMBILL</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">Promocode History</li>
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
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Promocode History</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Mobile</th>
                        <th>Promocode Name</th>
                        <th>Code</th>
                        <th>Code Type</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Validity</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in PromocodeList.data" :key="user.id">
                        <td>{{ user.Id }}</td>
                        <td>{{ user.customerName }}</td>
                        <td>{{ user.customerMobile }}</td>
                        <td>{{ user.offerPromoName }}</td>
                        <td>{{ user.promoCode }}</td>
                        <td>
                          <span
                            v-if="user.promoCodeType == 1"
                            class="badge badge-pill badge-primary"
                            >Extend the trial</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >Offer on payment</span
                          >
                        </td>
                        <td>
                          {{ user.date }}
                        </td>
                        <td>{{ user.totalAmount }}</td>
                        <td>{{ user.validity }}</td>
                        <td>
                          <span
                            v-if="user.status == 2"
                            class="badge badge-pill badge-primary"
                            >Paid</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >Pending</span
                          >
                        </td>
                      </tr>
                      <tr v-show="!PromocodeList.data.length">
                        <td colspan="10">No data found</td>
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
                  :data="PromocodeList"
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
      PromocodeList: { data: [] },
      page: 1,
      isLoad: false,
      search: "",
    };
  },
  methods: {
    getPromocodeList() {
      this.isLoad = true;

      axios
        .get("api/promocode-history")
        .then(({ data }) => (this.PromocodeList = data));
      this.isLoad = false;
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/promocode-history?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.isLoad = false;
          this.PromocodeList = response.data;
        });
    },
  },
  mounted() {
    this.getPromocodeList();
  },
};
</script>
