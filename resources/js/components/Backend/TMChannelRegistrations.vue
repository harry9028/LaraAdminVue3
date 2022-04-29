<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMChannel</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMChannel</a></li>
              <li class="breadcrumb-item active">Registration</li>
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
                  @click="searchUser"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">TMChannel Users</h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default d-none d-sm-block"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    Add New TMChannel User <i class="fas fa-user-plus"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-default d-block d-sm-none d-md-none"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    <i class="fas fa-user-plus"></i>
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
                        <th>Tracking Id</th>
                        <!-- <th>Name</th> -->
                        <th>Mobile</th>
                        <th>Username</th>
                        <th>Owner Name</th>
                        <!-- <th>Api Key</th> -->
                        <th>Registered At</th>
                        <th>Is Active</th>
                        <th>Is Sub Admin</th>
                        <th>Is TMBill User</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in users.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.tracking_id }}</td>
                        <!-- <td>{{user.name | upText}}</td> -->
                        <td>{{ user.mobile }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.owner_name }}</td>
                        <!-- <td>{{user.api_key}}</td> -->
                        <td>{{ user.created_at }}</td>
                        <td>
                          <span
                            v-if="user.is_active == 1"
                            class="badge badge-pill badge-success"
                            >Yes</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >No</span
                          >
                        </td>
                        <td>
                          <span
                            v-if="user.is_subadmin == 1"
                            class="badge badge-pill badge-success"
                            >Yes</span
                          >
                          <span v-else class="badge badge-pill badge-danger"
                            >No</span
                          >
                        </td>
                        <td>
                          <span
                            v-if="user.is_tmbill_user == 1"
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
                              class="btn btn-secondary"
                              v-if="access_level.show_message_form == 1"
                              @click="messageModel(user)"
                            >
                              <i class="fas fa-paper-plane"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!users.data.length">
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
                  :data="users"
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
            </div>
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
            class="modal-dialog modal-dialog-centered modal-xl"
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
                <button type="button" class="close" @click="closeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateUser() : createUser()">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <label for="tracking_id">Tracking Id:</label>
                      <input
                        v-model="form.tracking_id"
                        type="text"
                        name="tracking_id"
                        placeholder="Enter Tracking Id"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('tracking_id'),
                        }"
                        :disabled="editmode"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('tracking_id')"
                        v-html="form.errors.get('tracking_id')"
                      />
                    </div>
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
                          class="text-danger"
                          v-if="form.errors.has('name')"
                          v-html="form.errors.get('name')"
                        />
                      </div>
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
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input
                          v-model="form.username"
                          type="text"
                          name="username"
                          placeholder="Enter username"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('username') }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('username')"
                          v-html="form.errors.get('username')"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                          v-model="form.password"
                          type="text"
                          name="password"
                          placeholder="Enter password"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('password')"
                          v-html="form.errors.get('password')"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
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
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="mobile">Mobile No.</label>
                        <input
                          v-model="form.mobile"
                          type="text"
                          name="mobile"
                          placeholder="Enter mobile"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('mobile') }"
                        />

                        <div
                          class="text-danger"
                          v-if="form.errors.has('mobile')"
                          v-html="form.errors.get('mobile')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
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
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="api_key">API Key:</label>
                        <textarea
                          v-model="form.api_key"
                          name="api_key"
                          placeholder="Enter api key"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('api_key') }"
                          :disabled="editmode"
                        ></textarea>

                        <div
                          class="text-danger"
                          v-if="form.errors.has('api_key')"
                          v-html="form.errors.get('api_key')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="notification_flag"
                          >Notification Flag:</label
                        >
                        <select
                          v-model="form.notification_flag"
                          name="notification_flag"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('notification_flag'),
                          }"
                        >
                          <option value="0">Admin</option>
                          <option value="1">Sub Admin</option>
                          <option value="2">Mobile App</option>
                          <option value="3">Desktop MPOS</option>
                        </select>

                        <div
                          class="text-danger"
                          v-if="form.errors.has('notification_flag')"
                          v-html="form.errors.get('notification_flag')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          v-model="form.is_active"
                          name="is_active"
                          class="custom-control-input"
                          id="isActive"
                        />
                        <label class="custom-control-label" for="isActive"
                          >Is Active</label
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          v-model="form.is_subadmin"
                          name="is_subadmin"
                          class="custom-control-input"
                          id="is_subadmin"
                        />
                        <label class="custom-control-label" for="is_subadmin"
                          >Is Sub Admin</label
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          v-model="form.is_tmbill_user"
                          name="is_tmbill_user"
                          class="custom-control-input"
                          id="is_tmbill_user"
                        />
                        <label class="custom-control-label" for="is_tmbill_user"
                          >Is TMBill User</label
                        >
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
            </div>
          </div>
        </div>
      </div>
      <common-form v-bind:item="smsForm"></common-form>
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
      users: { data: [] },
      page: 1,
      isLoad: false,
      form: new Form({
        id: "",
        username: "",
        name: "",
        email: "",
        owner_name: "",
        mobile: "",
        address: "",
        api_key: "",
        password: "",
        firebase_token: "",
        firebase_token_desktop: "",
        firebase_token_mobile: "",
        is_active: false,
        is_subadmin: false,
        is_tmbill_user: false,
        notification_flag: "",
        referance_url: "",
        registration_date: "",
        registration_time: "",
        tracking_id: "",
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
      Fire.$emit("openSendSMSModal");
    },
    loadUsers() {
      this.isLoad = true;

      // axios.get("api/tmchannel-users").then(({ data }) => (this.users = data));
      axios.get("api/tmchannel-users").then((response) => {
        this.users = response.data;
        this.isLoad = false;
      });
    },
    randomNumber: function () {
      return Math.floor(Math.random() * (100000000 - 1 + 1)) + 1;
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios.get("api/tmchannel-users?page=" + page).then((response) => {
        this.users = response.data;
        this.isLoad = false;
      });
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      this.form.tracking_id = this.randomNumber();
      $("#newModal").modal("show");
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);

      this.form.is_active = user.is_active == 1 ? true : false;
      this.form.is_subadmin = user.is_subadmin == 1 ? true : false;
      this.form.is_tmbill_user = user.is_tmbill_user == 1 ? true : false;
    },
    createUser() {
      this.form
        .post("api/tmchannel-users")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "User Created successfully",
          });
          this.loadUsers();
        })
        .catch(() => {});
    },
    updateUser() {
      // console.log('Editing data');
      this.form
        .post("api/tmchannel-users/" + this.form.id)
        .then(() => {
          // success
          $("#newModal").modal("hide");
          this.loadUsers();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    searchUser() {
      this.isLoad = true;
      axios
        .get("api/tmchannel-users?q=" + this.search)
        .then((data) => {
          this.isLoad = false;
          this.users = data.data;
        })
        .catch(() => {});
    },
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.loadUsers();

    this.access_level = window.gate.user.access_level.tmchannel.activated_users;
    // console.log(this.access_level);
  },
};
</script>
