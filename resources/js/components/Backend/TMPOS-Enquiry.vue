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
              <li class="breadcrumb-item active">Enquiry</li>
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
                    <h3 class="card-title">Enquiry</h3>
                  </div>
                  <div class="col-md-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary pull-right"
                      v-if="access_level.export == 1"
                      @click="Export"
                    >
                      Export <i class="fas fa-cloud-download-alt"></i>
                    </button>
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
                      <th>Hotel Name</th>
                      <th>Mobile</th>
                      <!-- <th>Email</th> -->
                      <th>City</th>
                      <!-- <th>Address</th> -->
                      <th>Date</th>
                      <th>No.of times</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(user, index) in EnquiryLIst.data"
                      :key="user.id"
                    >
                      <td>{{ EnquiryLIst.from + index }}</td>
                      <td>{{ user.owner_name }}</td>
                      <td>{{ user.hotel_name }}</td>
                      <td>{{ user.mobile }}</td>
                      <!-- <td>{{user.email}}</td> -->
                      <td>{{ user.city }}</td>
                      <!-- <td>{{user.address }}</td> -->
                      <td>{{ user.date_time }}</td>
                      <td>
                        {{ user.enquiry_count }}
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
                            v-if="access_level.view == 1"
                            @click="viewModal(user)"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            v-if="access_level.show_message_form == 1"
                            @click="messageModel(user)"
                          >
                            <i class="fas fa-paper-plane"></i>
                          </button>
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
                  :limit="5"
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
                      <label for="mobile">Tracking Id:</label>
                      <input
                        v-model="form.mobile"
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('mobile') }"
                        :disabled="editmode"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('mobile')"
                        v-html="form.errors.get('mobile')"
                      />
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="owner_name">Owner Name:</label>
                        <input
                          v-model="form.owner_name"
                          type="text"
                          name="owner_name"
                          placeholder="Enter owner name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('owner_name'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('owner_name')"
                          v-html="form.errors.get('owner_name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="hotel_name">Hotel Name:</label>
                        <input
                          v-model="form.hotel_name"
                          type="text"
                          name="hotel_name"
                          placeholder="Enter hotel name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('hotel_name'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('hotel_name')"
                          v-html="form.errors.get('hotel_name')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="city">City:</label>
                        <input
                          v-model="form.city"
                          type="text"
                          name="city"
                          placeholder="Enter city"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('city') }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('city')"
                          v-html="form.errors.get('city')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                          v-model="form.email"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('email')"
                          v-html="form.errors.get('email')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="enquiry_count">No.of times:</label>
                        <input
                          v-model="form.enquiry_count"
                          type="text"
                          name="enquiry_count"
                          placeholder="Enter enquiry count"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('enquiry_count'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('enquiry_count')"
                          v-html="form.errors.get('enquiry_count')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label for="address">Address:</label>
                      <textarea
                        v-model="form.address"
                        name="address"
                        placeholder="Enter address"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('address') }"
                      ></textarea>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('address')"
                        v-html="form.errors.get('address')"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="message">Message:</label>
                      <textarea
                        v-model="form.message"
                        name="message"
                        placeholder="Enter message"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('message') }"
                      ></textarea>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('message')"
                        v-html="form.errors.get('message')"
                      />
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
        mobile: "",
        owner_name: "",
        hotel_name: "",
        address: "",
        city: "",
        email: "",
        message: "",
        enquiry_count: "",
        date_time: "",
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
    };
  },
  methods: {
    messageModel(user) {
      this.smsForm.mobile = user.mobile;
      $("#smsFormModal").modal("show");
    },
    loadEnquiry() {
      this.isLoad = true;
      axios.get("api/tmpos-enquiry").then((response) => {
        this.EnquiryLIst = response.data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/tmpos-enquiry?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.EnquiryLIst = response.data;
          this.isLoad = false;
        });
    },
    viewModal(user) {
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
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.loadEnquiry();
    this.access_level = window.gate.user.access_level.atlantic_pos.demo_request;
    // console.log(this.access_level);
  },
};
</script>
<style scoped>
</style>