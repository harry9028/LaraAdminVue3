<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>ENQUIRY</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">POS</a></li>
              <li class="breadcrumb-item active">CAMPAIGN ENQUIRY</li>
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
                <h3 class="card-title">CAMPAIGN ENQUIRY</h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="
                      btn btn-outline-secondary
                      pull-right
                      d-none d-sm-block
                    "
                    v-if="access_level.export == 1"
                    @click="Export"
                  >
                    Export <i class="fas fa-cloud-download-alt"></i>
                  </button>
                  <button
                    type="button"
                    class="
                      btn btn-outline-secondary
                      pull-right
                      d-block d-sm-none d-md-none
                    "
                    v-if="access_level.export == 1"
                    @click="Export"
                  >
                    <i class="fas fa-cloud-download-alt"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Restaurant Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>City</th>
                        <th>Date</th>
                        <!-- <th>Action</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in EnquiryList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.restaurant_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.mobile }}</td>
                        <td>{{ user.city }}</td>
                        <td>{{ user.created_at }}</td>
                        <!-- <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-secondary" @click="editModal(user)"><i class="fas fa-user-edit"></i></button>
                            </div>
                          </td> -->
                      </tr>
                      <tr v-show="!EnquiryList.data.length">
                        <td colspan="6">No data found</td>
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
                  :data="EnquiryList"
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
                  <h5
                    class="modal-title"
                    v-show="!ImportExport"
                    id="addNewLabel"
                  >
                    Export
                  </h5>
                  <h5
                    class="modal-title"
                    v-show="ImportExport"
                    id="addNewLabel"
                  >
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

      EnquiryList: { data: [] },
      isLoad: false,
      page: 1,
      form: new Form({
        id: "",
        name: "",
        restaurant_name: "",
        email: "",
        mobile: "",
        city: "",
      }),
      ImportExport: false,
      exportForm: new Form({
        exportType: "",
        dateRange: "",
      }),
      access_level: {},
      search: "",
    };
  },
  methods: {
    GetEnquiryList() {
      this.isLoad = true;
      axios.get("api/campaign-enquiry").then(({ data }) => {
        this.EnquiryList = data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      axios
        .get("api/campaign-enquiry?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.EnquiryList = response.data;
          this.isLoad = false;
        });
    },
    Export() {
      this.ImportExport = false;
      $("#ImportExportModal").modal("show");
    },
    exportUser(e) {
      this.exportForm.post("/export-campaign-enquiry").then(({ data }) => {
        var url = "export-campaign-enquiry?" + $.param(this.exportForm);
        window.location = url;
        $("#ImportExportModal").modal("hide");
      });
    },
  },
  mounted() {
    this.GetEnquiryList();
    this.access_level = window.gate.user.access_level.enquiry.campaign_enquiry;
  },
};
</script>
