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
              <li class="breadcrumb-item active">Link</li>
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
                <h3 class="card-title">Link</h3>
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
                        <th>LINK</th>
                        <th>Version</th>
                        <th>Download</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in VersionList.data" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>
                          {{ user.link }}
                        </td>
                        <td>
                          {{ user.version }}
                        </td>
                        <td>
                          <a
                            v-bind:href="user.link"
                            title="Download exe"
                            download
                            ><i class="fas fa-download"></i
                          ></a>
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
                      <tr v-show="!VersionList.data.length">
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
                  :data="VersionList"
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
                    <label for="link">Link:</label>
                    <input
                      v-model="form.link"
                      type="text"
                      name="link"
                      placeholder="Enter link"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('link') }"
                    />

                    <div
                      class="text-danger"
                      v-if="form.errors.has('link')"
                      v-html="form.errors.get('link')"
                    />
                  </div>

                  <div class="form-group">
                    <label for="version">Version:</label>
                    <input
                      v-model="form.version"
                      type="text"
                      name="version"
                      placeholder="Enter version"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('version') }"
                    />

                    <div
                      class="text-danger"
                      v-if="form.errors.has('version')"
                      v-html="form.errors.get('version')"
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
      // users empty array
      editmode: false,
      VersionList: { data: [] },
      isLoad: false,
      page: 1,
      form: new Form({
        id: "",
        link: "",
        version: "",
      }),
      access_level: {},
      search: "",
    };
  },
  methods: {
    SoftwareList() {
      this.isLoad = true;
      axios.get("api/software").then(({ data }) => {
        this.VersionList = data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      axios
        .get("api/software?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.VersionList = response.data;
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
        .post("api/software/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          $this.getResults();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    createUser() {
      this.form
        .post("api/software")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "Link Created successfully",
          });
          $this.getResults();
        })
        .catch(() => {});
    },
    closeModel() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.SoftwareList();
    this.access_level = window.gate.user.access_level.links.pos_links;
  },
};
</script>
