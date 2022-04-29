<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMBILL</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">Promocode</li>
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
                <h3 class="card-title">Promocode List</h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    <i class="fas fa-user-tag"></i> Add
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
                        <th>Name</th>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Start Date</th>
                        <th>Expires on</th>
                        <th>Duration</th>
                        <!-- <th>Extend days</th> -->
                        <th>Used Person</th>
                        <th>Max Users</th>
                        <!-- <th>Limit Person</th> -->
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in PromocodeList.data" :key="user.id">
                        <td>{{ user.Id }}</td>
                        <td>{{ user.offerPromoName }}</td>
                        <td>{{ user.promoCode }}</td>
                        <td>
                          <p v-if="user.promoCodeType == 1">Extend Trial</p>
                          <p v-if="user.promoCodeType == 0">Validate Offer</p>
                        </td>
                        <td>{{ user.startDate }}</td>
                        <td>{{ user.expirationDate }}</td>
                        <td>{{ user.validity }}</td>
                        <!-- <td>{{user.extendDays}}</td> -->
                        <td>{{ user.promoCodeUsedBy }}</td>
                        <td>{{ user.validForNumberOfUsers }}</td>
                        <!-- <td>{{user.validPerUser}}</td> -->
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
                              <i class="fas fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              v-if="access_level.delete == 1"
                              @click="deletePromocode(user)"
                            >
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!PromocodeList.data.length">
                        <td colspan="11">No data found</td>
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
                  :data="PromocodeList"
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
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">
                  Add New
                </h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">
                  Update Promocode Info
                </h5>
                <button type="button" class="close" @click="closeModal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateUser() : createUser()">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="offerPromoName">Offer Promo Name:</label>
                        <input
                          v-model="form.offerPromoName"
                          type="text"
                          name="offerPromoName"
                          placeholder="Enter Offer Promo Name"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('offerPromoName'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('offerPromoName')"
                          v-html="form.errors.get('offerPromoName')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="promoCode">Promo Code:</label>
                        <input
                          v-model="form.promoCode"
                          type="text"
                          name="promoCode"
                          placeholder="Enter PromoCode"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('promoCode'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('promoCode')"
                          v-html="form.errors.get('promoCode')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="validPerUser">Person Limit:</label>
                        <input
                          v-model="form.validPerUser"
                          type="text"
                          name="validPerUser"
                          placeholder="Enter validPerUser"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('validPerUser'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('validPerUser')"
                          v-html="form.errors.get('validPerUser')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="validity">Validity:</label>
                        <input
                          v-model="form.validity"
                          type="text"
                          name="validity"
                          placeholder="Enter validity"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('validity') }"
                        />

                        <div
                          v-if="form.errors.has('validity')"
                          v-html="form.errors.get('validity')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="extendDays">Extend Days:</label>
                        <input
                          v-model="form.extendDays"
                          type="text"
                          name="extendDays"
                          placeholder="Enter extendDays"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('extendDays'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('extendDays')"
                          v-html="form.errors.get('extendDays')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="discount">Discount:</label>
                        <input
                          v-model="form.discount"
                          type="text"
                          name="discount"
                          placeholder="Enter discount"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('discount') }"
                        />

                        <div
                          v-if="form.errors.has('discount')"
                          v-html="form.errors.get('discount')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="startDate">Start Date:</label>
                        <input
                          v-model="form.startDate"
                          type="date"
                          name="startDate"
                          placeholder="Enter start date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('startDate'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('startDate')"
                          v-html="form.errors.get('startDate')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="validForNumberOfUsers">User Limit:</label>
                        <input
                          v-model="form.validForNumberOfUsers"
                          type="number"
                          name="validForNumberOfUsers"
                          placeholder="Enter user limit"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has(
                              'validForNumberOfUsers'
                            ),
                          }"
                        />

                        <div
                          v-if="form.errors.has('validForNumberOfUsers')"
                          v-html="form.errors.get('validForNumberOfUsers')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="promoCodeType">Cody Type:</label>
                        <select
                          v-model="form.promoCodeType"
                          name="promoCodeType"
                          placeholder="Enter promocode type"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('promoCodeType'),
                          }"
                          disabled
                        >
                          <option value="1">Extend Trial</option>
                          <option value="2">Validate Offer</option>
                        </select>

                        <div
                          v-if="form.errors.has('promoCodeType')"
                          v-html="form.errors.get('promoCodeType')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="expirationDate">Expiration Date:</label>
                        <input
                          v-model="form.expirationDate"
                          type="date"
                          name="expirationDate"
                          placeholder="Enter expiration date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('expirationDate'),
                          }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('expirationDate')"
                          v-html="form.errors.get('expirationDate')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="discountType">Discount Type:</label>
                        <select
                          v-model="form.discountType"
                          name="discountType"
                          placeholder="Enter discount type"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('discountType'),
                          }"
                          disabled
                        >
                          <option value="0">Select Type</option>
                          <option value="1">Percentage</option>
                          <option value="2">Amount</option>
                        </select>

                        <div
                          v-if="form.errors.has('discountType')"
                          v-html="form.errors.get('discountType')"
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
                    class="btn btn-primary"
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
      PromocodeList: { data: [] },
      page: 1,
      isLoad: false,
      form: new Form({
        Id: "",
        offerPromoName: "",
        promoCode: "",
        promoCodeType: "1",
        validity: "",
        extendDays: "",
        startDate: "",
        expirationDate: "",
        validForNumberOfUsers: "",
        promoCodeUsedBy: "",
        validPerUser: "",
        time: "",
        discountType: "0",
        discount: "",
      }),
      access_level: {},
      search: "",
    };
  },
  methods: {
    getPromocodeList() {
      this.isLoad = true;

      axios.get("api/promocode").then((response) => {
        this.isLoad = false;
        this.PromocodeList = response.data;
        toast.fire({
          type: "success",
          title: "Enqiry load successfully",
        });
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.isLoad = true;
      this.page = page;
      axios
        .get("api/promocode?q=" + this.search + "&page=" + page)
        .then((response) => {
          this.isLoad = false;
          this.PromocodeList = response.data;
        });
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("#newModal").modal("show");
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);
    },
    createUser() {
      // Submit the form via a POST request

      this.form
        .post("api/promocode")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "Promocode has been generated",
          });
          this.getResults(this.page);
        })
        .catch(() => {});
    },
    updateUser() {
      // console.log('Editing data');
      this.form
        .post("api/promocode/" + this.form.Id)
        .then(() => {
          // success
          $("#newModal").modal("hide");
          this.getResults(this.page);
          Swal.fire("Good job!", "Promocode has been updated !", "success");
        })
        .catch(() => {});
    },
    deletePromocode(user) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.form
            .delete("api/promocode/" + user.Id)
            .then(() => {
              $("#newModal").modal("hide");
              this.getResults(this.page);
              Swal.fire("Deleted!", "Promocode has been deleted.", "success");
            })
            .catch(() => {});
        }
      });
    },
    closeModal() {
      $("#newModal").modal("hide");
    },
  },
  mounted() {
    this.getPromocodeList();
    this.access_level =
      window.gate.user.access_level.promocode_offline.promocode_pos;
  },
};
</script>
