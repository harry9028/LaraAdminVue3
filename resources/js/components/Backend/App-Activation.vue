<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>App Activation</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">App Activation</li>
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
                <h3 class="card-title">App Activation</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Product Key</th>
                        <th>Mobile</th>
                        <th style="min-width: 105px">Start Date</th>
                        <th style="min-width: 105px">End Date</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Activation/Trial</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in AppActivationList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.Product_key }}</td>
                        <td>{{ user.mobile }}</td>
                        <td>{{ user.start_date }}</td>
                        <td>{{ user.end_date }}</td>
                        <td>{{ user.durationIn_days }}</td>
                        <td>
                          <span
                            v-if="user.activation_status == 1"
                            class="badge badge-primary"
                            >Active</span
                          >
                          <span v-else class="badge badge-danger"
                            >Deactive</span
                          >
                        </td>
                        <td>
                          <p v-if="user.Activate_trial_flag == 1">Activation</p>
                          <p v-else>Trail</p>
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
                              v-if="access_level.edit == 1"
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
                      <tr v-show="!AppActivationList.data.length">
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
                  :data="AppActivationList"
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
          <div class="modal-dialog modal-dialog-centered" role="document">
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="end_date">End Date:</label>
                        <input
                          v-model="form.end_date"
                          type="date"
                          name="end_date"
                          placeholder="Enter end date"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('end_date') }"
                        />

                        <div
                          v-if="form.errors.has('end_date')"
                          v-html="form.errors.get('end_date')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="activation_status">Status:</label>
                        <div class="custom-control custom-switch">
                          <input
                            type="checkbox"
                            v-model="form.activation_status"
                            name="activation_status"
                            class="custom-control-input"
                            id="activation_status"
                          />
                          <label
                            class="custom-control-label"
                            for="activation_status"
                          ></label>
                        </div>
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
      AppActivationList: { data: [] },
      page: 1,
      isLoad: false,
      form: new Form({
        id: "",
        activation_status: "",
        end_date: "",
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
    getAppActivationList() {
      this.isLoad = true;

      axios.get("api/app-activation").then((response) => {
        this.isLoad = false;
        this.AppActivationList = response.data;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/app-activation?q=" + this.search + "&page=" + this.page)
        .then((response) => {
          this.isLoad = false;
          this.AppActivationList = response.data;
        });
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
        .post("api/app-activation/" + this.form.id)
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
    this.getAppActivationList();
    this.access_level =
      window.gate.user.access_level.pos_offline_activation.captain_app;
    // console.log(this.access_level);
  },
};
</script>
