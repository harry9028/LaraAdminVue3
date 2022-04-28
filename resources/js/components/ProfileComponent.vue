<style>
.widget-user-header {
  background-position: center center;
  background-size: cover;
  height: 250px !important;
}
.widget-user .card-footer {
  padding: 0;
}
</style>

<template>
  <div class="content-wrapper">
    <div class="container">
      <div class="row p-2">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header p-2">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a
                    class="nav-link active show"
                    href="#settings"
                    data-toggle="tab"
                    >Profile</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active show" id="settings">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label for="inputName" class="col-sm-2 control-label"
                        >Name</label
                      >

                      <div class="col-sm-12">
                        <input
                          type=""
                          v-model="form.name"
                          class="form-control"
                          id="inputName"
                          placeholder="Name"
                          :class="{ 'is-invalid': form.errors.has('name') }"
                        />
                        <div
                          v-if="form.errors.has('name')"
                          v-html="form.errors.get('name')"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail" class="col-sm-2 control-label"
                        >Email</label
                      >

                      <div class="col-sm-12">
                        <input
                          type="email"
                          v-model="form.email"
                          class="form-control"
                          id="inputEmail"
                          placeholder="Email"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                        />

                        <div
                          v-if="form.errors.has('email')"
                          v-html="form.errors.get('email')"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label
                        for="inputExperience"
                        class="col-sm-2 control-label"
                        >Experience</label
                      >
                    </div>
                    <div class="form-group">
                      <label for="photo" class="col-sm-2 control-label"
                        >Profile Photo</label
                      >
                      <div class="col-sm-12">
                        <input
                          type="file"
                          @change="updateProfile"
                          name="photo"
                          class="form-input"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="password" class="col-sm-12 control-label"
                        >Passport (leave empty if not changing)</label
                      >

                      <div class="col-sm-12">
                        <input
                          type="password"
                          v-model="form.password"
                          class="form-control"
                          id="password"
                          placeholder="Passport"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                        />

                        <div
                          v-if="form.errors.has('password')"
                          v-html="form.errors.get('password')"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-12">
                        <button
                          @click.prevent="updateInfo"
                          type="submit"
                          class="btn btn-success"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- /.tab-pane -->
              </div>
              <!-- /.tab-content -->
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.nav-tabs-custom -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
export default {
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        email: "",
        password: "",
        type: "",
        bio: "",
        photo: "",
      }),
    };
  },

  methods: {
    getProfilePhoto() {
      if (this.form.photo) {
        let photo =
          this.form.photo.length > 200
            ? this.form.photo
            : "/public/img/profile/" + this.form.photo;
        return photo;
      } else {
        return false;
      }
    },

    updateInfo() {
      if (this.form.password == "") {
        this.form.password = undefined;
      }
      this.form
        .put("api/profile")
        .then(() => {
          toast.fire({
            icon: "success",
            title: "Users prifile has been updated !",
          });
        })
        .catch(() => {});
    },
    updateProfile(e) {
      let file = e.target.files[0];
      console.log(file);
      let reader = new FileReader();

      let limit = 1024 * 1024 * 2;
      if (file["size"] > limit) {
        swal({
          type: "error",
          title: "Oops...",
          text: "You are uploading a large file",
        });
        return false;
      }

      reader.onloadend = (file) => {
        this.form.photo = reader.result;
      };
      reader.readAsDataURL(file);
    },
  },

  mounted() {
    console.log("Component mounted.");
  },
  created() {
    axios.get("api/user").then(({ data }) => this.form.fill(data));
  },
};
</script>
