<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Atlantic POS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Atlantic</a></li>
              <li class="breadcrumb-item active">
                POS Users + TMChannel Mapping
              </li>
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
                  @click="getAtlanticPosUsersMapping"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  Atlantic POS + TMChannel Mapping Users
                </h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default d-none d-sm-block"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    New Atlantic POS + TMChannel User Mapping
                    <i class="fas fa-user-plus"></i>
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
                        <th>TMPOS ID</th>
                        <th>TMPOS Owner Name</th>
                        <th>Outlet Store Name</th>
                        <th>TMChannel Owner Name</th>
                        <th>TMChannel Store Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(x, index) in MappingUsers.data" :key="index">
                        <td>{{ x.id }}</td>
                        <td>{{ x.tmpos_id }}</td>
                        <td>{{ x.owner.owner_name }}</td>
                        <td>{{ x.outlet.name }}</td>
                        <td>
                          {{
                            x.channel_store
                              ? x.channel_store.channel_owner.owner_name
                              : ""
                          }}
                        </td>
                        <td>
                          {{ x.channel_store ? x.channel_store.name : "" }}
                        </td>
                        <td></td>
                      </tr>
                      <tr v-show="!MappingUsers.data.length">
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
                  :data="MappingUsers"
                  :limit="8"
                  @pagination-change-page="getAtlanticPosUsersMapping"
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
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-show="!editmode" id="addNewLabel">
                TMPOS Users + TMChannel Mapping
              </h5>

              <button type="button" class="close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="createMap()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">TMPOS Owner:</label>
                      <select
                        v-model="MappingForm.tmpos_id"
                        @change="onchange()"
                        name="tmpos_id"
                        class="form-control"
                        :class="{
                          'is-invalid': MappingForm.errors.has('tmpos_id'),
                        }"
                      >
                        <option value="">Select Store</option>
                        <option
                          v-for="(x, index) in AtlanticUsers"
                          :key="index"
                          :value="x.tmpos_id"
                        >
                          {{ x.name }}
                        </option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="MappingForm.errors.has('tmpos_id')"
                        v-html="MappingForm.errors.get('tmpos_id')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">TMChannel Owner:</label>
                      <select
                        v-model="channel"
                        @change="onchange2()"
                        name="channel_owner"
                        class="form-control"
                      >
                        <option value="">Select TMChannel User</option>
                        <option
                          v-for="(x, index) in ChannelOwner"
                          :key="index"
                          :value="x.tracking_id"
                        >
                          {{ x.owner_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">TMPOS Outlet:</label>
                      <select
                        name="tmpos_store_id"
                        class="form-control"
                        :disabled="!Outlets.length"
                        v-model="MappingForm.tmpos_store_id"
                        :class="{
                          'is-invalid':
                            MappingForm.errors.has('tmpos_store_id'),
                        }"
                      >
                        <option value="">Select TMPOS Outlet</option>
                        <option
                          v-for="(x, index) in Outlets"
                          :key="index"
                          :value="x.store_id"
                        >
                          {{ x.name }}
                        </option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="MappingForm.errors.has('tmpos_store_id')"
                        v-html="MappingForm.errors.get('tmpos_store_id')"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">TMChannel Stores:</label>
                      <select
                        name="tmchannel_store_id"
                        class="form-control"
                        :disabled="!ChannelStores.length"
                        v-model="MappingForm.tmchannel_store_id"
                        :class="{
                          'is-invalid':
                            MappingForm.errors.has('tmchannel_store_id'),
                        }"
                      >
                        <option value="">Select TMChannel Store</option>
                        <option
                          v-for="(x, index) in ChannelStores"
                          :key="index"
                          :value="x.ref_id"
                        >
                          {{ x.name }}
                        </option>
                      </select>
                      <div
                        class="text-danger"
                        v-if="MappingForm.errors.has('tmchannel_store_id')"
                        v-html="MappingForm.errors.get('tmchannel_store_id')"
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
      channel: "",
      isLoad: false,
      editmode: false,
      page: 1,
      MappingForm: new Form({
        id: null,
        tmpos_store_id: "",
        tmchannel_store_id: "",
        tmpos_id: "",
      }),
      MappingUsers: { data: [] },
      AtlanticUsers: [],
      Outlets: [],
      ChannelOwner: [],
      ChannelStores: [],
      access_level: {},
    };
  },
  methods: {
    getAtlanticPosUsersMapping(page = 1) {
      this.page = page;
      this.isLoad = true;
      axios
        .get("api/tmpos-users-mapping?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.MappingUsers = response.data;
          this.isLoad = false;
        });
    },
    getTMPOSOwner() {
      axios.get("api/tmpos-users?all=1").then((response) => {
        this.AtlanticUsers = response.data;
      });
    },
    getTMChannelOwner() {
      axios.get("api/tmchannel-users?all=1").then((response) => {
        this.ChannelOwner = response.data;
      });
    },
    onchange() {
      this.Outlets = [];
      axios
        .get("api/tmpos-outlets/" + this.MappingForm.tmpos_id)
        .then((response) => {
          this.Outlets = response.data;
        });
    },
    onchange2() {
      this.ChannelStores = [];
      axios.get("api/channel-stores/" + this.channel).then((response) => {
        this.ChannelStores = response.data;
      });
    },
    newModal() {
      this.Outlets = [];
      this.ChannelStores = [];
      this.MappingForm.reset();
      this.channel = "";
      $("#newModal").modal("show");
    },
    createMap() {
      $("#newModal").modal("hide");
      Swal.fire({
        title: "Are you sure Atlantic POS + TMChannel create mapping?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Create",
      }).then((result) => {
        if (typeof result.value !== "undefined") {
          this.MappingForm.post("api/tmpos-users-mapping")
            .then(({ data }) => {
              $("#newModal").modal("hide");
              Swal.fire(
                "Success",
                "Atlantic POS + TMChannel User mapping successfully.",
                "success"
              );
              this.getAtlanticPosUsersMapping(this.page);
            })
            .catch(() => {
              $("#newModal").modal("show");
            });
        } else {
          $("#newModal").modal("show");
        }
      });
    },
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.getAtlanticPosUsersMapping();
    this.getTMPOSOwner();
    this.getTMChannelOwner();
    this.access_level =
      window.gate.user.access_level.atlantic_pos.atlantic_pos_plus_tmchannel;
  },
};
</script>