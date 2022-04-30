<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Backups</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Online</a></li>
              <li class="breadcrumb-item active">Backup</li>
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
                <h3 class="card-title">Online Backup</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tracking Id</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Backup Date</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in VersionList.data" :key="user.id">
                        <td>{{ user.backup_id }}</td>
                        <td>{{ user.tmbill_tracking_id }}</td>
                        <td>{{ user.owner_mobile }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.backup_time }}</td>
                        <td>
                          <a
                            class="btn btn-primary"
                            @click="getDownloadUrl(user.backup_link)"
                            title="Download sql"
                          >
                            <i class="fas fa-download"></i
                          ></a>
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
      file: new Form({
        url: "",
      }),
    };
  },
  methods: {
    SoftwareList() {
      this.isLoad = true;
      axios.get("api/online-backup").then(({ data }) => {
        this.VersionList = data;
        this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      axios
        .get("api/online-backup?q=" + this.$parent.search + "&page=" + page)
        .then((response) => {
          this.VersionList = response.data;
          this.isLoad = false;
        });
    },
    getDownloadUrl(backup_link) {
      backup_link = backup_link.replace("../../", "");
      this.file.url = backup_link;
      // return "http://www.techmainstay.in/tmbill/TmBillOnlineBackup/"+ backup_link;
      this.file
        .post("api/online-backup-copy-file")
        .then((response) => {
          console.log(response.data);
          var fileName = response.data.explode[2].replace(".sql", "");
          window.location.href =
            "download-file?folder=" +
            response.data.explode[1] +
            "&name=" +
            fileName;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.SoftwareList();
  },
};
</script>
