<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Activated Outlets</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">Outlets</li>
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
                <h3 class="card-title">Filter</h3>
                <div class="card-tools"></div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Outlet Registered From - To Date</label>
                      <date-range-picker
                        class="form-control"
                        style="
                          min-width: 235px;
                          border-color: white;
                          padding: 0;
                        "
                        ref="picker"
                        v-model="filter.dateRange"
                        id="dateRange"
                        :maxDate="maxDate"
                        :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd' }"
                        :timePicker="false"
                        :timePicker24Hour="false"
                        :showWeekNumbers="false"
                        placeholder="Date time"
                        opens="center"
                      >
                      </date-range-picker>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Activation expires From - To Date</label>
                      <date-range-picker
                        class="form-control"
                        style="
                          min-width: 235px;
                          border-color: white;
                          padding: 0;
                        "
                        ref="picker"
                        v-model="filter.activation_expires"
                        id="dateRange"
                        :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd' }"
                        :timePicker="false"
                        :timePicker24Hour="false"
                        :showWeekNumbers="false"
                        placeholder="Date time"
                        opens="center"
                      >
                      </date-range-picker>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer clearfix">
                <button class="btn btn-success" @click="getResults()">
                  Submit
                </button>
                <button class="btn btn-danger" @click="Reset">Reset</button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Outlets</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>TMPOS ID</th>
                        <th>Outlet ID</th>
                        <th style="min-width: 150px">Restaurants Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th style="min-width: 190px">Last order sync POS</th>
                        <th style="min-width: 180px">Outlet Registered Date</th>
                        <th style="min-width: 180px">Activation expires at</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(outlet, index) in OutletList.data"
                        :key="index"
                      >
                        <td>{{ outlet.id }}</td>
                        <td>{{ outlet.tmpos_id }}</td>
                        <td>{{ outlet.store_id }}</td>
                        <td>{{ outlet.name }}</td>
                        <td>{{ outlet.contact_phone }}</td>
                        <td>{{ outlet.email }}</td>

                        <td>
                          <b-badge variant="primary" v-if="outlet.active == 1"
                            >Yes</b-badge
                          >
                          <b-badge variant="danger" v-else>No</b-badge>
                        </td>
                        <td>
                          <p v-if="outlet.last_order">
                            {{ outlet.last_order.orderDateTime | myDate2 }}
                          </p>
                          <p v-else>-</p>
                        </td>
                        <td>{{ outlet.created_at | myDate2 }}</td>
                        <td>
                          <p v-if="outlet.activation_expires_at">
                            {{ outlet.activation_expires_at | myDate2 }}
                          </p>
                          <p v-else>-</p>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            @click="viewModal(outlet)"
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                        </td>
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
                  :data="OutletList"
                  @pagination-change-page="getResults"
                  :limit="8"
                  :show-disabled="true"
                >
                  <span slot="prev-nav"><i class="fas fa-caret-left"></i></span>
                  <span slot="next-nav"
                    ><i class="fas fa-caret-right"></i
                  ></span>
                </pagination>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

        <div
          class="modal fade"
          id="newModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addNewTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addNewLabel">View</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body p-0">
                <table class="table">
                  <tbody>
                    <tr>
                      <th>Owner Name</th>
                      <td>{{ OutletInfo.atlantic_user.name }}</td>
                      <th>Owner Mobile</th>
                      <td>{{ OutletInfo.atlantic_user.mobile }}</td>
                    </tr>
                    <tr>
                      <th>Owner Email</th>
                      <td>{{ OutletInfo.atlantic_user.email }}</td>
                      <th>Owner Address</th>
                      <td>{{ OutletInfo.atlantic_user.address }}</td>
                    </tr>

                    <tr>
                      <th>Outlet ID</th>
                      <td>{{ OutletInfo.store_id }}</td>
                      <th>Outlet Mobile</th>
                      <td>{{ OutletInfo.contact_phone }}</td>
                    </tr>
                    <tr>
                      <th>Outlet Email</th>
                      <td>{{ OutletInfo.email }}</td>
                      <th>Restaurants Name</th>
                      <td>{{ OutletInfo.name }}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>Activation expires in days</label>
                      </td>
                      <td>
                        <input
                          v-model="OutletInfo.expired_days"
                          placeholder="days"
                          type="number"
                          class="form-control"
                        />
                      </td>
                      <th>Activation expires at</th>
                      <td>
                        <p v-if="OutletInfo.activation_expires_at">
                          {{ OutletInfo.activation_expires_at | myDate2 }}
                        </p>
                        <p v-else>-</p>
                      </td>
                    </tr>

                    <tr>
                      <th>Outlet Active</th>
                      <td>
                        <b-form-checkbox
                          v-model="OutletInfo.active"
                          name="check-button"
                          value="1"
                          unchecked-value="0"
                          switch
                        >
                        </b-form-checkbox>
                      </td>
                      <th>Outlet Registration</th>
                      <td>
                        {{ OutletInfo.created_at | myDate2 }}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <label>Outlet Deactivate Message</label>
                        <b-form-textarea
                          id="textarea"
                          v-model="OutletInfo.deactivate_message"
                          placeholder="Enter something..."
                          rows="3"
                          max-rows="6"
                        ></b-form-textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  @click="updateStore()"
                  class="btn btn-success"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  components: {
    DateRangePicker,
  },
  data() {
    return {
      editmode: false,
      page: 1,
      isLoad: false,
      form: new Form({
        id: "",
      }),
      OutletList: { data: [] },
      OutletInfo: new Form({
        contact_phone: "",
        email: "",
        id: null,
        name: "",
        store_id: "",
        tmpos_id: "",
        active: "",
        deactivate_message: "",
        atlantic_user: {
          name: null,
          mobile: null,
          email: null,
          address: null,
        },
        expired_days: "",
        activation_expires_at: "",
        created_at: "",
      }),
      filter: new Form({
        dateRange: {
          startDate: null,
          endDate: null,
        },
        activation_expires: {
          startDate: null,
          endDate: null,
        },
      }),
      maxDate: moment().format("YYYY-MM-DD"),
    };
  },
  methods: {
    Reset() {
      this.filter.reset();
      this.getResults();
    },
    getResults(page = 1) {
      this.isLoad = true;
      this.page = page;
      axios
        .get("/api/outlet-list", {
          params: {
            q: this.$parent.search,
            page: page,
            start: this.filter.dateRange.startDate
              ? moment(this.filter.dateRange.startDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
            end: this.filter.dateRange.endDate
              ? moment(this.filter.dateRange.endDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
            activation_expires_start: this.filter.activation_expires.startDate
              ? moment(this.filter.activation_expires.startDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
            activation_expires_end: this.filter.activation_expires.endDate
              ? moment(this.filter.activation_expires.endDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
          },
        })
        .then((response) => {
          this.OutletList = response.data;
          // console.log(this.OutletList);
          this.isLoad = false;
        })
        .catch((error) => {
          // console.log(error);
        });
    },
    viewModal(x) {
      this.OutletInfo.fill(x);

      if (x.activation_expires_at) {
        var startDate = moment();
        var endDate = moment(x.activation_expires_at);
        console.log(endDate.diff(startDate, "days"));
        if (endDate.diff(startDate, "days") > 0) {
          this.OutletInfo.expired_days = endDate.diff(startDate, "days") + 1;
        } else {
          this.OutletInfo.expired_days = 0;
        }
      }
      $("#newModal").modal("show");
    },
    updateStore() {
      this.$Progress.start();
      this.OutletInfo.post("api/outlet/" + this.OutletInfo.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.getResults();
          Swal.fire("Success", "Info has been updated !", "success");
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        });
    },
  },
  mounted() {
    this.getResults();
    Fire.$on("searching", () => {
      this.getResults();
    });
  },
};
</script>
