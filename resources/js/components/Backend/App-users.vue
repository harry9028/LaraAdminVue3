<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>App Users</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">App Users</li>
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
                <h3 class="card-title">App users</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Business Name</th>
                        <th>OTP</th>
                        <th>Device Limit</th>
                        <th>Current Login Device</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in TMBILL_APP_USERS.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.Name }}</td>
                        <td>{{ user.Mobile }}</td>
                        <td>{{ user.Email }}</td>
                        <td>{{ user.Business_name }}</td>
                        <td>{{ user.OTP }}</td>
                        <td>{{ user.ActiveDeviceLimit }}</td>
                        <td>{{ user.CurrrentActiveDevice }}</td>
                        <td>
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <!-- <button type="button" class="btn btn-secondary"><i class="fas fa-comment-alt"></i></button> -->
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.update == 1"
                              @click="editModal(user)"
                            >
                              <i class="fas fa-user-edit"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-warning"
                              v-if="access_level.history == 1"
                              @click="viewHistory(user)"
                            >
                              <i class="fas fa-history"></i>
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
                      <tr v-show="!TMBILL_APP_USERS.data.length">
                        <td colspan="9">No data found</td>
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
                  :data="TMBILL_APP_USERS"
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
                <h5
                  class="modal-title"
                  v-if="!editmode && !History.length"
                  id="addNewLabel"
                >
                  Add New
                </h5>
                <h5
                  class="modal-title"
                  v-if="!editmode && History.length"
                  id="addNewLabel"
                >
                  History
                </h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">
                  Update Info
                </h5>
                <button type="button" class="close" @click="closeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form
                v-if="!History.length"
                @submit.prevent="editmode ? updateUser() : createUser()"
              >
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="Name">Name:</label>
                        <input
                          v-model="form.Name"
                          type="text"
                          name="Name"
                          placeholder="Enter Name"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('Name') }"
                        />

                        <div
                          v-if="form.errors.has('Name')"
                          v-html="form.errors.get('Name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="Mobile">Mobile No.</label>
                        <input
                          v-model="form.Mobile"
                          type="text"
                          name="Mobile"
                          placeholder="Enter Mobile"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('Mobile') }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('Mobile')"
                          v-html="form.errors.get('Mobile')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="Email">Email:</label>
                        <input
                          v-model="form.Email"
                          type="text"
                          name="Email"
                          placeholder="Enter Email"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('Email') }"
                        />

                        <div
                          v-if="form.errors.has('Email')"
                          v-html="form.errors.get('Email')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="Business_name">Business Name:</label>
                        <input
                          v-model="form.Business_name"
                          type="text"
                          name="Business_name"
                          placeholder="Enter Business_name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('Business_name'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('Business_name')"
                          v-html="form.errors.get('Business_name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="form-group">
                        <label for="Address">Address:</label>
                        <textarea
                          v-model="form.Address"
                          name="Address"
                          placeholder="Enter Address"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('Address') }"
                        ></textarea>

                        <div
                          v-if="form.errors.has('Address')"
                          v-html="form.errors.get('Address')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="OTP">OTP:</label>
                        <input
                          v-model="form.OTP"
                          type="text"
                          name="OTP"
                          placeholder="Enter OTP"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('OTP') }"
                        />

                        <div
                          v-if="form.errors.has('OTP')"
                          v-html="form.errors.get('OTP')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="ActiveDeviceLimit">Device Limit</label>
                        <input
                          v-model="form.ActiveDeviceLimit"
                          type="text"
                          name="ActiveDeviceLimit"
                          placeholder="Enter Device Limit"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('ActiveDeviceLimit'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('ActiveDeviceLimit')"
                          v-html="form.errors.get('ActiveDeviceLimit')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="CurrrentActiveDevice"
                          >Currrent Active Device:</label
                        >
                        <input
                          v-model="form.CurrrentActiveDevice"
                          type="text"
                          name="CurrrentActiveDevice"
                          placeholder="Enter Currrent Active Device"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has(
                              'CurrrentActiveDevice'
                            ),
                          }"
                        />

                        <div
                          v-if="form.errors.has('CurrrentActiveDevice')"
                          v-html="form.errors.get('CurrrentActiveDevice')"
                        />
                      </div>
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
              <div v-show="History.length" class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Key</th>
                        <th>Mobile</th>
                        <th>Device IMEI</th>
                        <th>Status</th>
                        <th>Login Time</th>
                        <!-- <th>Logout Time</th> -->
                        <th>Version</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>OS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in History" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.Product_key }}</td>
                        <td>{{ user.Usermobile }}</td>
                        <td>{{ user.DeviceIMEI }}</td>
                        <td>
                          <span
                            v-if="user.isActive == 1"
                            class="badge badge-pill badge-primary"
                            >Yes</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >No</span
                          >
                        </td>
                        <td>{{ user.LogInTime }}</td>
                        <!-- <td>{{user.LogOutTime}}</td> -->
                        <td>{{ user.AndroidVersion }}</td>
                        <td>{{ user.Manufacturer }}</td>
                        <td>
                          {{ user.model }}
                        </td>
                        <td>
                          {{ user.osName }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
      editmode: false,
      TMBILL_APP_USERS: {
        data: [],
      },
      History: [],
      page: 1,
      isLoad: false,
      form: new Form({
        ActiveDeviceLimit: "",
        Address: "",
        Business_name: "",
        CurrrentActiveDevice: "",
        Email: "",
        Mobile: "",
        Name: "",
        OTP: "",
        id: "",
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
      this.smsForm.mobile = user.Mobile;
      $("#smsFormModal").modal("show");
    },
    LoadUsers() {
      this.isLoad = true;
      // axios.get("api/tmbill-app-users").then(({ data }) => (this.TMBILL_APP_USERS = data));
      axios.get("api/tmbill-app-users").then((response) => {
        this.TMBILL_APP_USERS = response.data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      this.page = page;
      axios
        .get("api/tmbill-app-users?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.TMBILL_APP_USERS = response.data;
          this.isLoad = false;
        });
    },
    editModal(user) {
      this.History = [];
      this.editmode = true;
      this.form.reset();
      this.form.fill(user);
      if (user.info) {
        this.form.Email = this.form.Email ? this.form.Email : user.info.email;
        this.form.Address = this.form.Address
          ? this.form.Address
          : user.info.address;
        this.form.Name = this.form.Name ? this.form.Name : user.info.name;
      }
      $("#newModal").modal("show");
    },
    updateUser() {
      this.form
        .post("api/tmbill-app-users/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.getResults(this.page);
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    viewHistory(user) {
      axios.get("api/device-info/" + user.Mobile).then((response) => {
        this.History = response.data;
        this.isLoad = false;
        $("#newModal").modal("show");
      });
    },
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.LoadUsers();
    this.access_level =
      window.gate.user.access_level.pos_offline_registration.captain_app;
  },
};
</script>
