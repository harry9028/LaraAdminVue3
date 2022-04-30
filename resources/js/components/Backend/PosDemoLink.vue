<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>POS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">POS</a></li>
              <li class="breadcrumb-item active">Demo LInk</li>
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
                <h3 class="card-title">POS Demo Link</h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    Add <i class="fas fa-user-plus"></i>
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
                        <th>Title</th>
                        <th>Link</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in VideoList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.title }}</td>
                        <td>
                          <a v-bind:href="user.link" target="_blank">{{
                            user.link
                          }}</a>
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
                              @click="editModal(user)"
                            >
                              <i class="fas fa-user-edit"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!VideoList.data.length">
                        <td colspan="4">No data found</td>
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
                  :data="VideoList"
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
                <button type="button" class="close" @click="closeModel">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateUser() : createUser()">
                <div class="modal-body">
                  <div class="form-group">
                    <label for="title">Title:</label>

                    <textarea
                      v-model="form.title"
                      name="title"
                      placeholder="Enter title"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('title') }"
                    ></textarea>

                    <div
                      class="text-danger"
                      v-if="form.errors.has('title')"
                      v-html="form.errors.get('title')"
                    />
                  </div>
                  <div class="form-group">
                    <label for="link">Link:</label>

                    <textarea
                      v-model="form.link"
                      name="link"
                      placeholder="Enter link"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('link') }"
                    ></textarea>

                    <div
                      class="text-danger"
                      v-if="form.errors.has('link')"
                      v-html="form.errors.get('link')"
                    />
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
      // VideoList empty array
      editmode: false,
      VideoList: { data: [] },
      page: 1,
      isLoad: false,
      form: new Form({
        id: "",
        link: "",
        title: "",
      }),
      access_level: {},
    };
  },
  methods: {
    loadVideos() {
      this.isLoad = true;
      axios.get("api/videos").then(({ data }) => {
        this.VideoList = data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios.get("api/videos?page=" + page).then((response) => {
        this.VideoList = response.data;
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
        .post("api/videos/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.loadVideos();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    createUser() {
      this.form
        .post("api/videos")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "Video link Created successfully",
          });
          this.loadVideos();
        })
        .catch(() => {});
    },
    closeModel() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.loadVideos();

    this.access_level = window.gate.user.access_level.links.pos_demo_links;
  },
};
</script>
