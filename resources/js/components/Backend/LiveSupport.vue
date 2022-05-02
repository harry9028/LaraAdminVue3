<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMPOS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMPOS</a></li>
              <li class="breadcrumb-item active">Live Support</li>
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
                <div class="row">
                  <div class="col-md-10">
                    <h3 class="card-title">Live Support</h3>
                  </div>
                  <div class="col-md-2">
                    <!-- <button type="button" class="btn btn-outline-secondary pull-right" @click="Export">Export <i class="fas fa-cloud-download-alt"></i></button> -->
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div
                style="overflow-x: auto"
                class="card-body p-0 table-responsive"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Need Support On</th>
                      <th>Date</th>
                      <th>Status</th>
                      <!-- <th>Address</th> -->
                      <!-- <th>No.of times</th> -->
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in EnquiryLIst.data" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>{{ user.user_id }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.mobile }}</td>
                      <td>{{ user.need_support_on }}</td>
                      <td>{{ user.time_date }}</td>
                      <td>
                        <span
                          class="badge badge-danger"
                          v-if="user.status_of_query == 'pending'"
                          >{{ user.status_of_query }}</span
                        >
                        <span class="badge badge-success" v-else>{{
                          user.status_of_query
                        }}</span>
                      </td>
                      <td>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            class="btn btn-secondary"
                            v-if="access_level.edit == 1"
                            @click="viewModal(user)"
                          >
                            <i class="fas fa-edit"></i>
                          </button>
                          <!-- <button type="button" class="btn btn-secondary" @click="messageModel(user)"><i class="fas fa-paper-plane"></i></button> -->
                        </div>
                      </td>
                    </tr>
                    <tr v-show="!EnquiryLIst.data.length">
                      <td colspan="9">No data found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="overlay" v-if="isLoad">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
              </div>
              <div class="card-footer clearfix">
                <pagination
                  :data="EnquiryLIst"
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
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">
                  View
                </h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">
                  Update Info
                </h5>
                <button type="button" class="close" @click="closeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Name:</label>
                        <input
                          v-model="form.user_id"
                          type="text"
                          name="user_id"
                          placeholder="Enter email"
                          class="form-control"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label>Mobile No:</label>
                      <input
                        v-model="form.mobile"
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile"
                        class="form-control"
                        disabled
                      />
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>Email:</label>
                        <input
                          v-model="form.email"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          class="form-control"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <label>Date Time:</label>
                      <input
                        v-model="form.time_date"
                        type="text"
                        name="time_date"
                        placeholder="Enter mobile"
                        class="form-control"
                        disabled
                      />
                    </div>
                    <div class="col-md-4">
                      <label>Submitted Through:</label>
                      <input
                        v-model="form.submitted_through"
                        type="text"
                        name="submitted_through"
                        placeholder="Enter mobile"
                        class="form-control"
                        disabled
                      />
                    </div>
                    <div class="col-md-4">
                      <label>Outlet Name:</label>
                      <input
                        v-model="form.outlet_name"
                        type="text"
                        class="form-control"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <label>Solved by team name:</label>
                      <input
                        v-model="form.solved_by_team_name"
                        type="text"
                        name="solved_by_team_name"
                        class="form-control"
                        placeholder="Solved by team name"
                      />
                    </div>
                    <div class="col-md-4">
                      <label>Assign To:</label>
                      <input
                        v-model="form.assigned_to"
                        type="text"
                        name="assigned_to"
                        class="form-control"
                        placeholder="Assign to"
                      />
                    </div>
                    <div class="col-md-4">
                      <label>Status:</label>
                      <select
                        class="form-control"
                        v-model="form.status_of_query"
                        :class="{
                          'is-invalid': form.errors.has('status_of_query'),
                        }"
                      >
                        <option value="pending">Pending</option>
                        <option value="solved">Solved</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Need Support On:</label>
                      <textarea
                        disabled
                        v-model="form.need_support_on"
                        placeholder="Enter need_support_on"
                        class="form-control"
                      ></textarea>
                    </div>
                    <div class="col-md-6">
                      <label>Remark by team member:</label>
                      <textarea
                        v-model="form.remark_by_team_member"
                        placeholder="Remark by team member"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has(
                            'remark_by_team_member'
                          ),
                        }"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="closeModal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="UpdateLiveSupport"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="ImportExportModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ImportExportModal"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!ImportExport" id="addNewLabel">
                  Export
                </h5>
                <h5 class="modal-title" v-show="ImportExport" id="addNewLabel">
                  Import
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form
                @submit.prevent="ImportExport ? importUser() : exportUser()"
              >
                <div class="modal-body">
                  <div class="form-group" v-show="!ImportExport">
                    <select
                      class="form-control"
                      id="sel1"
                      v-model="exportForm.exportType"
                      name="exportType"
                      :class="{
                        'is-invalid': exportForm.errors.has('exportType'),
                      }"
                    >
                      <option value="">Export Type</option>
                      <option value="xlsx">xlsx</option>
                      <option value="xls">xls</option>
                      <option value="csv">csv</option>
                      <option value="pdf">pdf</option>
                      <option value="ods">ods</option>
                      <option value="tsv">tsv</option>
                      <option value="html">html</option>
                    </select>

                    <div
                      class="text-danger"
                      v-if="exportForm.errors.has('exportType')"
                      v-html="exportForm.errors.get('exportType')"
                    />
                  </div>
                  <div class="form-group" v-show="!ImportExport">
                    <VueCtkDateTimePicker
                      v-model="exportForm.dateRange"
                      :range="true"
                      :onlyDate="true"
                      :inline="false"
                      :noLabel="false"
                      :error="exportForm.errors.has('dateRange')"
                    />

                    <div
                      class="text-danger"
                      v-if="exportForm.errors.has('dateRange')"
                      v-html="exportForm.errors.get('dateRange')"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-show="!ImportExport"
                  >
                    Export
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-show="ImportExport"
                  >
                    Import
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <common-form v-bind:item="smsForm"></common-form>
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
      ImportExports: false,
      ImportExport: false,
      editmode: false,
      EnquiryLIst: { data: [] },
      isLoad: false,
      page: 1,
      form: new Form({
        id: "",
        store_id: "",
        mobile: "",
        email: "",
        need_support_on: "",
        time_date: "",
        user_id: "",
        submitted_through: "",
        status_of_query: "",
        solved_by_team_name: "",
        remark_by_team_member: "",
        assigned_to: "",
        outlet_name: "",
      }),
      exportForm: new Form({
        exportType: "",
        dateRange: "",
      }),
      smsForm: new Form({
        api_flag: "",
        mobile: "",
        smsText: "",
      }),
      access_level: {},
      search: "",
    };
  },
  methods: {
    messageModel(user) {
      this.smsForm.mobile = user.mobile;
      $("#smsFormModal").modal("show");
    },
    loadEnquiry() {
      this.isLoad = true;
      axios.get("api/live-support").then((response) => {
        this.EnquiryLIst = response.data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/live-support?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.EnquiryLIst = response.data;
          this.isLoad = false;
        });
    },
    viewModal(user) {
      this.editmode = true;
      this.form.fill(user);
      $("#newModal").modal("show");
    },
    Export() {
      this.ImportExport = false;
      $("#ImportExportModal").modal("show");
    },
    exportUser(e) {
      this.exportForm.post("/enquiry-export").then(({ data }) => {
        var url = "enquiry-export?" + $.param(this.exportForm);
        window.location = url;
        $("#ImportExportModal").modal("hide");
      });
    },
    UpdateLiveSupport() {
      this.form
        .post("api/live-support/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.getResults(this.page);
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.loadEnquiry();

    this.access_level =
      window.gate.user.access_level.atlantic_pos.support_queries;
  },
};
</script>
<style scoped>
</style>