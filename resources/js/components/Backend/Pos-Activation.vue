<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMBILL Users</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">TMBILL Users</li>
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
                  <div class="col-md-6 col-12 col-sm-12">
                    <h3 class="card-title">TMBILL Users</h3>
                  </div>
                  <div class="col-md-2 col-12 col-sm-12">
                    <form class="was-validated">
                      <div class="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          v-model="expire"
                          @change="ExpiresIn7Days()"
                          id="customControlValidation1"
                          required
                        />
                        <label
                          class="custom-control-label"
                          for="customControlValidation1"
                          >Expires in 7 days</label
                        >
                      </div>
                    </form>
                  </div>
                  <div class="col-md-4 col-12 col-sm-12">
                    <button
                      type="button"
                      class="btn btn-default"
                      v-if="access_level.generate_new_key == 1"
                      @click="newModal"
                    >
                      Generate New Activation Key
                      <i class="fas fa-user-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Key</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th style="min-width: 105px">Start Date</th>
                        <th style="min-width: 105px">Expire Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="user in POS_Activation_List.data"
                        :key="user.id"
                        v-bind:class="checkDate(user)"
                      >
                        <td>{{ user.id }}</td>
                        <td>{{ user.product }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.mobile }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.start_date }}</td>
                        <td>{{ user.end_date }}</td>
                        <td>
                          <span
                            v-if="user.activation_status"
                            class="badge badge-pill badge-success"
                            >Yes</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >No</span
                          >
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
                              v-if="access_level.generate_new_key == 1"
                              @click="editModal(user)"
                            >
                              <i class="fas fa-user-edit"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.show_message_form == 1"
                              @click="sendMessage(user)"
                            >
                              <i class="fas fa-paper-plane"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.copy_option == 1"
                              @click="copyText(user)"
                            >
                              <i class="fas fa-copy"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!POS_Activation_List.data.length">
                        <td colspan="8">No data found</td>
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
                  :data="POS_Activation_List"
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
              <common-form v-bind:item="smsForm"></common-form>
            </div>
            <textarea
              type="text"
              class="form-control mb-3"
              rows="8"
              value=""
              id="CopyArea"
              placeholder="Copy Area"
            ></textarea>
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
                        <label for="product">Product Key:</label>
                        <input
                          v-model="form.product"
                          type="text"
                          name="product"
                          placeholder="Enter product"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('product') }"
                          :disabled="!editmode"
                        />

                        <div
                          v-if="form.errors.has('product')"
                          v-html="form.errors.get('product')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="name">Bissiness Name:</label>
                        <input
                          v-model="form.name"
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                          :disabled="editmode"
                        />

                        <div
                          v-if="form.errors.has('name')"
                          v-html="form.errors.get('name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="mobile">Mobile No.:</label>
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
                        <label for="mac_address">Mac Address:</label>
                        <input
                          v-model="form.mac_address"
                          type="text"
                          name="mac_address"
                          placeholder="00-00-00-00-00-00"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('mac_address'),
                          }"
                          :disabled="!editmode"
                        />

                        <div
                          v-if="form.errors.has('mac_address')"
                          v-html="form.errors.get('mac_address')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="type_software">Software Type:</label>
                        <select
                          class="form-control"
                          name="type_software"
                          v-model="form.type_software"
                          :class="{
                            'is-invalid': form.errors.has('type_software'),
                          }"
                          :disabled="editmode"
                        >
                          <option value="">
                            --Select type_software Type--
                          </option>
                          <option value="Retailer">Retailer</option>
                          <option value="Restaurant">Restaurant</option>
                        </select>

                        <div
                          v-if="form.errors.has('type_software')"
                          v-html="form.errors.get('type_software')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="duration">Duration:</label>
                        <input
                          v-model="form.duration"
                          type="text"
                          min="1"
                          name="duration"
                          placeholder="Enter duration"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('duration') }"
                          :disabled="editmode"
                        />

                        <div
                          v-if="form.errors.has('duration')"
                          v-html="form.errors.get('duration')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="start_date">Start Date:</label>
                        <input
                          v-model="form.start_date"
                          type="date"
                          name="start_date"
                          placeholder="Enter start date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('start_date'),
                          }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('start_date')"
                          v-html="form.errors.get('start_date')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="end_date">End Date:</label>
                        <input
                          v-model="form.end_date"
                          type="date"
                          name="end_date"
                          placeholder="Enter end date"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('end_date') }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('end_date')"
                          v-html="form.errors.get('end_date')"
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
      expire: false,
      editmode: false,
      POS_Activation_List: { data: [] },
      SMSGetayList: {},
      page: 1,
      isLoad: false,
      form: new Form({
        id: "",
        product: "",
        name: "",
        mobile: "",
        email: "",
        start_date: "",
        end_date: "",
        duration: "",
        activation_status: false,
        mac_address: "",
        type_software: "",
        sms_getway: "",
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
    sendMessage(user) {
      this.smsForm.mobile = user.mobile;
      $("#smsFormModal").modal("show");
    },
    copyText(user) {
      var txt =
        "Name: " +
        user.name +
        "\nMobile No: " +
        user.mobile +
        "\nEmail: " +
        user.email +
        "\nProduct Key: " +
        user.product +
        "\nMAC Address: " +
        user.mac_address +
        "\nDuration: " +
        user.duration +
        "\nStart Date: " +
        user.start_date +
        "\nEnd Dates: " +
        user.end_date;
      $("#CopyArea").val(txt);
      var copyText = document.getElementById("CopyArea");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      toast.fire({
        type: "success",
        title: "Copy success",
      });
    },
    getActivationList() {
      this.isLoad = true;

      axios.get("api/tmbill-product").then((response) => {
        this.isLoad = false;
        this.POS_Activation_List = response.data;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get(
          "api/tmbill-product?q=" +
            this.search +
            "&expire7days=" +
            this.expire +
            "&page=" +
            this.page
        )
        .then((response) => {
          this.isLoad = false;
          this.POS_Activation_List = response.data;
        });
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      // this.form.product = this.randomNumber();
      $("#newModal").modal("show");
    },
    createUser() {
      // Submit the form via a POST request

      this.form
        .post("api/tmbill-product")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "User Created successfully",
          });
          this.getResults(this.page);
        })
        .catch(() => {});
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);
      this.form.activation_status = user.activation_status == 1 ? true : false;
    },
    updateUser() {
      this.form
        .post("api/tmbill-product/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.getResults(this.page);
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    searchUser(query, page = 1) {
      this.page = page;
      axios
        .get("api/tmbill-product?q=" + query + "&page=" + page)
        .then((data) => {
          this.POS_Activation_List = data.data;
        })
        .catch(() => {});
    },
    checkDate(row) {
      const date1 = new Date(moment().format("MM/DD/YYYY"));
      const date2 = new Date(moment(row.end_date).format("MM/DD/YYYY"));
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (
        date1 > date2 ||
        date2 == "Invalid Date" ||
        row.activation_status == 0
      ) {
        return "table-danger";
      } else if (7 > parseInt(diffDays)) {
        return "table-warning";
      } else {
        return "";
      }
    },
    ExpiresIn7Days() {
      this.getResults();
    },
  },
  mounted() {
    this.getActivationList();
    this.access_level =
      window.gate.user.access_level.pos_offline_activation.pos_activation_keys;
  },
};
</script>
