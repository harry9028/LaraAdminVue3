<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Atlantic Notifications</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Atlantic POS</a></li>
              <li class="breadcrumb-item active">Notifications</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Atlantic Notifications</h3>

                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    New Notification <i class="fas fa-user-plus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Popup Image</th>
                        <th>Notification Image</th>
                        <th>Type</th>
                        <th>Where to Show</th>
                        <th>User Type</th>
                        <th>Is Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(x, index) in Notifications.data" :key="index">
                        <td>{{ x.notification_title }}</td>
                        <td>
                          <img
                            v-if="x.image_popup_path"
                            class="direct-chat-img"
                            :src="x.image_popup_path"
                            alt="message user image"
                          />
                          <p v-else>N/A</p>
                        </td>
                        <td>
                          <img
                            v-if="x.notification_image_path"
                            class="direct-chat-img"
                            :src="x.notification_image_path"
                            alt="message user image"
                          />
                          <p v-else>N/A</p>
                        </td>
                        <td>
                          <small
                            class="badge badge-primary"
                            v-if="x.notification_type == 0"
                          >
                            All</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.notification_type == 1"
                          >
                            Mobile App</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.notification_type == 2"
                          >
                            Desktop POS</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.notification_type == 3"
                          >
                            Backoffice</small
                          >
                        </td>
                        <td>
                          <small
                            class="badge badge-primary"
                            v-if="x.where_to_show_notification == 1"
                          >
                            Before Login Popup</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.where_to_show_notification == 2"
                          >
                            After Login Popup</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.where_to_show_notification == 3"
                          >
                            Only Notification</small
                          >
                        </td>
                        <td>
                          <small
                            class="badge badge-primary"
                            v-if="x.user_type == 0"
                          >
                            All User</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.user_type == 1"
                          >
                            Old User</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.user_type == 2"
                          >
                            New User</small
                          >
                        </td>
                        <td>
                          <small
                            class="badge badge-danger"
                            v-if="x.is_active == 0"
                          >
                            No</small
                          >
                          <small
                            class="badge badge-primary"
                            v-if="x.is_active == 1"
                          >
                            Yes</small
                          >
                        </td>
                        <td>
                          <div class="btn-group btn-group-sm" role="group">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="editModal(x)"
                              title="Edit Notification"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <!-- <tr v-show="!Notifications.data.length">
                                                <td colspan="6">No data found</td>
                                            </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="overlay" v-if="isLoad">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
              </div>
              <div class="card-footer clearfix">
                <pagination
                  :data="Notifications"
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
              <button type="button" class="close" @click="closeModel">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form
              @submit.prevent="
                editmode ? updateNotification() : createNotification()
              "
            >
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="notification_title"
                        >Enter Notification Title:</label
                      >
                      <input
                        v-model="form.notification_title"
                        type="text"
                        name="notification_title"
                        placeholder="Enter notificatin title"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('notification_title'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('notification_title')"
                        v-html="form.errors.get('notification_title')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="notification_description"
                        >Enter Notification Description:</label
                      >
                      <input
                        v-model="form.notification_description"
                        type="text"
                        name="notification_description"
                        placeholder="Enter notificatin description"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has(
                            'notification_description'
                          ),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('notification_description')"
                        v-html="form.errors.get('notification_description')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="notification_type"
                        >Enter Notification Type:</label
                      >

                      <select
                        class="form-control"
                        name="notification_type"
                        v-model="form.notification_type"
                        :class="{
                          'is-invalid': form.errors.has('notification_type'),
                        }"
                      >
                        <option value="">--Select Type--</option>
                        <option value="0">All</option>
                        <option value="1">Mobile App</option>
                        <option value="2">Desktop POS</option>
                        <option value="3">Backoffice</option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('notification_type')"
                        v-html="form.errors.get('notification_type')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="where_to_show_notification"
                        >Where to show Notification :</label
                      >

                      <select
                        class="form-control"
                        name="where_to_show_notification"
                        v-model="form.where_to_show_notification"
                        :class="{
                          'is-invalid': form.errors.has(
                            'where_to_show_notification'
                          ),
                        }"
                      >
                        <option value="">--Select Type--</option>
                        <option value="1">Before Login Popup</option>
                        <option value="2">After Login Popup</option>
                        <option value="3">Only Notification</option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('where_to_show_notification')"
                        v-html="form.errors.get('where_to_show_notification')"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="image_popup_path"
                        >Select image popup (optional) :</label
                      >

                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            @change="updatePopupImage"
                            name="notification_popup"
                          />
                          <label class="custom-file-label">Choose file</label>
                        </div>
                      </div>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('image_popup_path')"
                        v-html="form.errors.get('image_popup_path')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="popup_click_link"
                        >Enter PopUp click link:</label
                      >
                      <input
                        v-model="form.popup_click_link"
                        type="text"
                        name="popup_click_link"
                        placeholder="Enter popup click link"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('popup_click_link'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('popup_click_link')"
                        v-html="form.errors.get('popup_click_link')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="notification_image_path"
                        >Select Notification image (optional) :</label
                      >

                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            name="notification_img"
                            @change="updateNotificationImage"
                          />
                          <label class="custom-file-label">Choose file</label>
                        </div>
                      </div>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('notification_image_path')"
                        v-html="form.errors.get('notification_image_path')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="user_type">User Type :</label>

                      <select
                        class="form-control"
                        name="user_type"
                        v-model="form.user_type"
                        :class="{ 'is-invalid': form.errors.has('user_type') }"
                      >
                        <option value="0">All User</option>
                        <option value="1">Old User</option>
                        <option value="2">New User</option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="form.errors.has('user_type')"
                        v-html="form.errors.get('user_type')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="user_type"></label>
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
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="closeModel"
                >
                  Close
                </button>
                <button v-show="editmode" type="submit" class="btn btn-success">
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
      Notifications: {
        data: [],
      },
      isLoad: false,
      editmode: false,
      form: new Form({
        id: null,
        notification_title: "",
        notification_description: "",
        notification_type: "",
        where_to_show_notification: "",
        image_popup_path: "",
        popup_click_link: "",
        notification_image_path: "",
        user_type: "0",
        is_read_count: "",
        is_active: "1",
        col1: "",
        col2: "",
        col3: "",
        col4: "",
      }),
      access_level: {},
    };
  },
  methods: {
    updatePopupImage(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      // let limit = 1024 * 1024 * 2;
      // if(file['size'] > limit){
      //     swal({
      //         type: 'error',
      //         title: 'Oops...',
      //         text: 'You are uploading a large file',
      //     })
      //     return false;
      // }
      reader.onloadend = (file) => {
        this.form.image_popup_path = reader.result;
        console.log(this.form);
      };
      reader.readAsDataURL(file);
    },
    updateNotificationImage(e) {
      let file = e.target.files[0];
      // console.log(file);
      let reader = new FileReader();

      // let limit = 1024 * 1024 * 2;
      // if(file['size'] > limit){
      //     swal({
      //         type: 'error',
      //         title: 'Oops...',
      //         text: 'You are uploading a large file',
      //     })
      //     return false;
      // }

      reader.onloadend = (file) => {
        this.form.notification_image_path = reader.result;
        console.log(this.form);
      };
      reader.readAsDataURL(file);
    },
    getResults(page = 1) {
      this.isLoad = true;

      axios.get("api/tmpos-notifications").then((response) => {
        this.isLoad = false;
        this.Notifications = response.data.result;
      });
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("#newModal").modal("show");
    },
    editModal(x) {
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(x);

      this.form.is_active = x.is_active == 1 ? true : false;
    },
    updateNotification() {
      this.isLoad = true;
      this.form
        .post("api/tmpos-notifications/" + this.form.id)
        .then(() => {
          // success
          $("#newModal").modal("hide");

          toast.fire({
            type: "success",
            title: "Notification has been updated",
          });
          this.getResults();
        })
        .catch(() => {});
    },
    createNotification() {
      this.isLoad = true;
      this.form
        .post("api/tmpos-notifications")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "Notification has been created",
          });
          this.getResults();
        })
        .catch(() => {});
    },
    closeModel() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    // console.log('Component mounted.');
    this.access_level =
      window.gate.user.access_level.atlantic_pos.activated_users;
    this.getResults();
  },
};
</script>
