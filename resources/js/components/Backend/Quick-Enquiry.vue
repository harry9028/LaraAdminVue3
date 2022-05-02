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
              <li class="breadcrumb-item"><a href="#">Enquiry</a></li>
              <li class="breadcrumb-item active">ENQUIRY DETAILS</li>
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
                <h3 class="card-title">ENQUIRY DETAILS</h3>
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
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <!-- <th>Date</th> -->
                        <th style="min-width: 100px">Comment</th>
                        <!-- <th>Trial Date</th>
                        <th>Amount</th> -->
                        <th>Ref From</th>
                        <!-- <th>Product Name</th> -->
                        <!-- <th>Address</th> -->
                        <th style="min-width: 175px">Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in QuickEnquiryList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.mobile }}</td>
                        <!-- <td>{{user.required_date}}</td> -->
                        <td>
                          <address v-bind:id="user.id" style="display: block">
                            {{ user.comment || capital(7) }}
                            <a
                              v-show="user.comment.length > 10"
                              @click="readMore(user)"
                              title="Read More"
                              >....</a
                            >
                          </address>
                        </td>
                        <!-- <td>{{user.trial_date}}</td>
                          <td>{{user.amount}}</td> -->
                        <td>{{ user.ref_from }}</td>
                        <!-- <td>{{user.product_name}}</td> -->
                        <!-- <td>{{user.address}}</td> -->
                        <td>{{ user.date }}</td>

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
                              @click="editModal(user)"
                            >
                              <i class="fas fa-user-edit"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!QuickEnquiryList.data.length">
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
                  :data="QuickEnquiryList"
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
                  Add New
                </h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">
                  Update Info
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
              <form @submit.prevent="editmode ? updateUser() : createUser()">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                        />

                        <div
                          v-if="form.errors.has('name')"
                          v-html="form.errors.get('name')"
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
                          v-if="form.errors.has('email')"
                          v-html="form.errors.get('email')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="mobile">Mobile:</label>
                        <input
                          v-model="form.mobile"
                          type="text"
                          name="mobile"
                          placeholder="Enter mobile"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('mobile') }"
                        />

                        <div
                          v-if="form.errors.has('mobile')"
                          v-html="form.errors.get('mobile')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="product_name">Product Name:</label>
                        <select
                          class="form-control"
                          v-model="form.product_name"
                          name="product_name"
                          :class="{
                            'is-invalid': form.errors.has('product_name'),
                          }"
                        >
                          <option value="">--Select Product--</option>
                          <option value="TMBill">TMBill</option>
                          <option value="FeedbackLegend">FeedbackLegend</option>
                          <option value="Other">Other</option>
                        </select>
                        <div
                          v-if="form.errors.has('product_name')"
                          v-html="form.errors.get('product_name')"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="required_date">Required Date:</label>
                        <input
                          v-model="form.required_date"
                          type="date"
                          name="required_date"
                          placeholder="Enter required_date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('required_date'),
                          }"
                        />
                        <div
                          v-if="form.errors.has('required_date')"
                          v-html="form.errors.get('required_date')"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="trial_date">Trial Date:</label>
                        <input
                          v-model="form.trial_date"
                          type="date"
                          name="trial_date"
                          placeholder="Enter trial date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('trial_date'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('trial_date')"
                          v-html="form.errors.get('trial_date')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="amount">Amount:</label>
                        <input
                          v-model="form.amount"
                          type="number"
                          step="00.1"
                          name="amount"
                          placeholder="Enter amount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('amount') }"
                        />

                        <div
                          v-if="form.errors.has('amount')"
                          v-html="form.errors.get('amount')"
                        />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="ref_from">Ref From:</label>
                        <input
                          v-model="form.ref_from"
                          type="text"
                          name="ref_from"
                          placeholder="Enter ref from"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('ref_from') }"
                        />

                        <div
                          v-if="form.errors.has('ref_from')"
                          v-html="form.errors.get('ref_from')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea
                          v-model="form.comment"
                          name="comment"
                          placeholder="Enter comment"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('comment') }"
                        >
                        </textarea>

                        <div
                          v-if="form.errors.has('comment')"
                          v-html="form.errors.get('comment')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="address">Address:</label>

                        <textarea
                          v-model="form.address"
                          name="address"
                          placeholder="Enter address"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('address') }"
                        >
                        </textarea>

                        <div
                          v-if="form.errors.has('address')"
                          v-html="form.errors.get('address')"
                        />
                      </div>
                    </div>
                  </div>
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
                    v-show="editmode"
                    type="submit"
                    class="btn btn-success"
                  >
                    Update
                  </button>
                  <button
                    v-show="!editmode"
                    type="submit"
                    class="btn btn-success"
                  >
                    Create
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
      QuickEnquiryList: { data: [] },
      isLoad: false,
      page: 1,
      form: new Form({
        id: "",
        name: "",
        email: "",
        mobile: "",
        required_date: "",
        comment: "",
        trial_date: "",
        amount: "",
        ref_from: "",
        product_name: "",
        address: "",
        date: "",
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
    SoftwareList() {
      this.isLoad = true;
      axios.get("api/quick-enquiry").then(({ data }) => {
        this.QuickEnquiryList = data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      axios
        .get("api/quick-enquiry?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.QuickEnquiryList = response.data;
          this.isLoad = false;
        });
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("#newModal").modal("show");
    },
    updateUser() {
      this.form
        .post("api/quick-enquiry/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.SoftwareList();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    createUser() {
      this.form
        .post("api/quick-enquiry")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "Link Created successfully",
          });
          this.SoftwareList();
        })
        .catch(() => {});
    },
    readMore(user) {
      $("#" + user.id).text(user.comment);
    },
    Export() {
      this.ImportExport = false;
      $("#ImportExportModal").modal("show");
    },
    exportUser(e) {
      this.exportForm.post("/export-quick-enquiry").then(({ data }) => {
        var url = "export-quick-enquiry?" + $.param(this.exportForm);
        window.location = url;
        $("#ImportExportModal").modal("hide");
      });
    },
  },
  filters: {
    capital: function (value, length) {
      if (!value) return "";
      value = value.toString();
      if (value.length > length) {
        return value.substring(0, length);
      } else {
        return value;
      }
    },
  },
  mounted() {
    this.SoftwareList();

    this.access_level = window.gate.user.access_level.enquiry.quick_enquiry;
  },
};
</script>
