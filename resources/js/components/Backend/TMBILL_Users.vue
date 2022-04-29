<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>POS Registrations</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMBILL</a></li>
              <li class="breadcrumb-item active">Users</li>
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
                <div class="row">
                  <div class="col-md-3">
                    <h3 class="card-title">Registered Users</h3>
                  </div>
                  <div class="col-md-9">
                    <div class="row">
                      <button
                        type="button"
                        class="
                          btn btn-warning btn-flat
                          col-lg-3 col-md-3 col-sm-12
                        "
                      >
                        OTP Registration Fail
                      </button>
                      <button
                        type="button"
                        class="
                          btn btn-danger btn-flat
                          col-lg-3 col-md-3 col-sm-12
                        "
                      >
                        Blocked Users
                      </button>
                      <button
                        type="button"
                        class="
                          btn btn-success btn-flat
                          col-lg-3 col-md-3 col-sm-12
                        "
                      >
                        Activated Users
                      </button>
                      <button
                        type="button"
                        class="
                          btn btn-secondary btn-flat
                          col-lg-3 col-md-3 col-sm-12
                        "
                        v-if="access_level.export == 1"
                        @click="Export"
                      >
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tracking Id / OTP</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Is Block</th>
                        <th>TMBill Edge</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(user, index) in TMBILL_USERS.data"
                        :key="index"
                        :class="getColor(user)"
                      >
                        <td>{{ user.blockingId }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.mobile }}</td>
                        <td>
                          <address v-bind:id="user.id" style="display: block">
                            {{ user.address || capital(10) }}
                            <a
                              v-show="user.address.length > 10"
                              @click="readMore(user)"
                              title="Read More"
                              >....</a
                            >
                          </address>
                        </td>
                        <td>{{ user.DemoTime }}</td>
                        <td>
                          <span
                            v-if="user.blockingFlag == 1"
                            class="badge badge-success"
                            >Yes</span
                          >
                          <span v-else class="badge badge-danger">No</span>
                        </td>
                        <td>
                          <span
                            v-if="user.isEdgeAppBlocked == 0"
                            class="badge badge-success"
                            >Yes</span
                          >
                          <span v-else class="badge badge-danger">No</span>
                        </td>
                        <td>
                          <div
                            class="btn-group btn-group-sm"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.update == 1"
                              @click="editModal(user)"
                              title="Edit User"
                            >
                              <i class="fas fa-user-edit"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="
                                access_level.message_credentials_update == 1
                              "
                              @click="updateSMSInfo(user)"
                              title="Update SMS Info"
                            >
                              <i class="fas fa-comment-alt"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.show_message_form == 1"
                              @click="sendMessage(user)"
                              title="Send Message"
                            >
                              <i class="fas fa-paper-plane"></i>
                            </button>

                            <button
                              type="button"
                              v-if="
                                user.history.length &&
                                access_level.show_user_log_details == 1
                              "
                              class="btn btn-warning"
                              @click="historyModal(user)"
                            >
                              <i class="fas fa-history"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="
                                user.pos_activation_data != null &&
                                access_level.pos_activation_update == 1
                              "
                              @click="editActivationModal(user)"
                              title="Edit User"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!TMBILL_USERS.data.length">
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
                  :data="TMBILL_USERS"
                  @pagination-change-page="getResults"
                  :limit="5"
                  :show-disabled="true"
                >
                  <span><i class="fas fa-caret-left"></i></span>
                  <span><i class="fas fa-caret-right"></i></span>
                </pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="newModal">
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  v-if="!editmode && !UserHistory.length"
                  id="addNewLabel"
                >
                  Add New
                </h5>
                <h5 class="modal-title" v-if="!editmode && UserHistory.length">
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
                v-if="!UserHistory.length"
                @submit.prevent="editmode ? updateUser() : createUser()"
              >
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-3">
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
                          v-if="form.errors.has('name')"
                          v-html="form.errors.get('name')"
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
                          v-if="form.errors.has('mobile')"
                          v-html="form.errors.get('mobile')"
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
                          v-if="form.errors.has('email')"
                          v-html="form.errors.get('email')"
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
                          v-if="form.errors.has('password')"
                          v-html="form.errors.get('password')"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="StartDate">Start Date:</label>
                        <input
                          v-model="form.StartDate"
                          type="text"
                          name="StartDate"
                          placeholder="Start date"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('StartDate'),
                          }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('StartDate')"
                          v-html="form.errors.get('StartDate')"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="EndDate">End Date:</label>
                        <input
                          v-model="form.EndDate"
                          type="text"
                          name="EndDate"
                          placeholder="End Date"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('EndDate') }"
                          disabled
                        />

                        <div
                          v-if="form.errors.has('EndDate')"
                          v-html="form.errors.get('EndDate')"
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="ResonForBlocking">Blocking ID / OTP:</label>
                        <input
                          class="form-control"
                          v-model="form.blockingId"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="ResonForBlocking">Recovery ID:</label>
                        <input
                          class="form-control"
                          v-model="form.RecoveryId"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="DemoFreeDays">Free Demo Days:</label>
                        <input
                          v-model="form.DemoFreeDays"
                          type="text"
                          name="DemoFreeDays"
                          placeholder="No. of days"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('DemoFreeDays'),
                          }"
                        />

                        <div
                          v-if="form.errors.has('DemoFreeDays')"
                          v-html="form.errors.get('DemoFreeDays')"
                        />
                        <small class="form-text text-danger"
                          >Before OTP verification</small
                        >
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="registration_flag"
                          >Registration Flag:</label
                        >
                        <div class="custom-control custom-switch">
                          <input
                            type="checkbox"
                            v-model="form.registration_flag"
                            name="registration_flag"
                            class="custom-control-input"
                            id="registration_flag"
                          />
                          <label
                            class="custom-control-label"
                            for="registration_flag"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="blockingFlag">Is Block:</label>
                        <div class="custom-control custom-switch">
                          <input
                            type="checkbox"
                            v-model="form.blockingFlag"
                            name="blockingFlag"
                            class="custom-control-input"
                            id="blockingFlag"
                          />
                          <label
                            class="custom-control-label"
                            for="blockingFlag"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="isEdgeAppBlocked">TMBill Edge:</label>
                        <div class="custom-control custom-switch">
                          <input
                            type="checkbox"
                            v-model="form.isEdgeAppBlocked"
                            name="isEdgeAppBlocked"
                            class="custom-control-input"
                            id="isEdgeAppBlocked"
                          />
                          <label
                            class="custom-control-label"
                            for="isEdgeAppBlocked"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
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
                          v-if="form.errors.has('address')"
                          v-html="form.errors.get('address')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="ResonForBlocking">Blocking Reason:</label>
                        <textarea
                          v-model="form.ResonForBlocking"
                          name="ResonForBlocking"
                          placeholder="Reason"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('ResonForBlocking'),
                          }"
                        ></textarea>

                        <div
                          v-if="form.errors.has('ResonForBlocking')"
                          v-html="form.errors.get('ResonForBlocking')"
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

              <div v-if="UserHistory.length" class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <p><b>Name:</b> {{ form.name }}</p>
                    <p><b>Mobile:</b> {{ form.mobile }}</p>
                  </div>
                  <div class="col-md-6">
                    <p><b>Email:</b> {{ form.email }}</p>
                    <p><b>Date:</b> {{ form.registration_time }}</p>
                  </div>
                </div>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Log In Time</th>
                      <th>Log Out Time</th>
                      <th>Date</th>
                      <th>MAC Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in UserHistory" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>{{ user.LogInTime }}</td>
                      <td>{{ user.LogOutTime }}</td>
                      <td>{{ user.date }}</td>
                      <td>{{ user.macaddress }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="newModal2"
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
                <h5 class="modal-title" v-show="!formSMS.id" id="addNewLabel">
                  Add New
                </h5>
                <h5 class="modal-title" v-show="formSMS.id" id="addNewLabel">
                  Update Info
                </h5>
                <button type="button" class="close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="editmode ? updateSMS() : createSMS()">
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="tracking_id">Tracking Id:</label>
                        <input
                          v-model="formSMS.tracking_id"
                          type="text"
                          name="tracking_id"
                          placeholder="Enter tracking id"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has('tracking_id'),
                          }"
                          disabled
                        />

                        <div
                          v-if="formSMS.errors.has('tracking_id')"
                          v-html="formSMS.errors.get('tracking_id')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input
                          v-model="formSMS.name"
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          class="form-control"
                          :class="{ 'is-invalid': formSMS.errors.has('name') }"
                        />

                        <div
                          v-if="formSMS.errors.has('name')"
                          v-html="formSMS.errors.get('name')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="sender_id">Sender Id:</label>
                        <input
                          v-model="formSMS.sender_id"
                          type="text"
                          name="sender_id"
                          placeholder="Enter sender id"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has('sender_id'),
                          }"
                        />

                        <div
                          v-if="formSMS.errors.has('sender_id')"
                          v-html="formSMS.errors.get('sender_id')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="username">Username:</label>
                        <input
                          v-model="formSMS.username"
                          type="text"
                          name="username"
                          placeholder="Enter username"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has('username'),
                          }"
                        />

                        <div
                          v-if="formSMS.errors.has('username')"
                          v-html="formSMS.errors.get('username')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="api_key">API Key:</label>
                        <input
                          v-model="formSMS.api_key"
                          type="text"
                          name="api_key"
                          placeholder="Enter api key"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has('api_key'),
                          }"
                          disabled
                        />

                        <div
                          v-if="formSMS.errors.has('api_key')"
                          v-html="formSMS.errors.get('api_key')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="sms_count_initial">Total SMS:</label>
                        <input
                          v-model="formSMS.sms_count_initial"
                          type="text"
                          name="sms_count_initial"
                          placeholder="Enter Total SMS"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              formSMS.errors.has('sms_count_initial'),
                          }"
                        />

                        <div
                          v-if="formSMS.errors.has('sms_count_initial')"
                          v-html="formSMS.errors.get('sms_count_initial')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="sms_count_remaining">Left SMS:</label>
                        <input
                          v-model="formSMS.sms_count_remaining"
                          type="text"
                          name="sms_count_remaining"
                          placeholder="Enter Left SMS"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has(
                              'sms_count_remaining'
                            ),
                          }"
                        />

                        <div
                          v-if="formSMS.errors.has('sms_count_remaining')"
                          v-html="formSMS.errors.get('sms_count_remaining')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="sms_count_used">API Key:</label>
                        <input
                          v-model="formSMS.sms_count_used"
                          type="text"
                          name="sms_count_used"
                          placeholder="Enter Used SMS"
                          class="form-control"
                          :class="{
                            'is-invalid': formSMS.errors.has('sms_count_used'),
                          }"
                        />

                        <div
                          v-if="formSMS.errors.has('sms_count_used')"
                          v-html="formSMS.errors.get('sms_count_used')"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="close">
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
        <div
          class="modal fade"
          id="ImportExportModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="ImportExportModal"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!ImportExport" id="addNewLabel">
                  Export
                </h5>
                <h5 class="modal-title" v-show="ImportExport" id="addNewLabel">
                  Import
                </h5>
                <button type="button" class="close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form
                @submit.prevent="ImportExport ? importUser() : exportUser()"
              >
                <div class="modal-body">
                  <div class="form-group" v-show="ImportExport">
                    <input
                      class="input"
                      type="hidden"
                      name="name"
                      placeholder="File name"
                      v-model="fileName"
                      required
                    />
                    <div class="btn btn-outline-secondary btn-file">
                      <i class="fas fa-file-excel"></i> Select Excel/CSV
                      <input type="file" ref="file" name="file" />
                    </div>
                    <p class="help-block">Max. 32MB</p>
                  </div>
                  <div class="form-group" v-show="!ImportExport">
                    <select
                      class="form-control"
                      id="sel1"
                      v-model="exportForm.exportType"
                      name="exportType"
                      :class="{
                        'is-invalid': exportForm.errors.has('exportType'),
                      }"
                    >
                      <option value="">Export Type</option>
                      <option value="xlsx">xlsx</option>
                      <option value="xls">xls</option>
                      <option value="csv">csv</option>
                      <option value="pdf">pdf</option>
                      <option value="ods">ods</option>
                      <option value="tsv">tsv</option>
                      <option value="html">html</option>
                    </select>

                    <div
                      v-if="exportForm.errors.has('exportType')"
                      v-html="exportForm.errors.get('exportType')"
                    />
                  </div>
                  <div class="form-group" v-show="!ImportExport">
                    <VueCtkDateTimePicker
                      v-model="exportForm.dateRange"
                      :range="true"
                      :onlyDate="true"
                      :inline="false"
                      :noLabel="false"
                      :error="exportForm.errors.has('dateRange')"
                    />

                    <div
                      v-if="exportForm.errors.has('dateRange')"
                      v-html="exportForm.errors.get('dateRange')"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="close"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-show="!ImportExport"
                  >
                    Export
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-show="ImportExport"
                  >
                    Import
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="ActivationModalForm"
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
                  POS Activation Info Update
                </h5>
                <button type="button" class="close" @click="close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form
                @submit.prevent="
                  editmode ? updateActivationUser() : createActivationUser()
                "
              >
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="product">Product Key:</label>
                        <input
                          v-model="formActivation.product"
                          type="text"
                          name="product"
                          placeholder="Enter product"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('product'),
                          }"
                          :disabled="!editmode"
                        />

                        <div
                          v-if="formActivation.errors.has('product')"
                          v-html="formActivation.errors.get('product')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="name">Bissiness Name:</label>
                        <input
                          v-model="formActivation.name"
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('name'),
                          }"
                          :disabled="editmode"
                        />

                        <div
                          v-if="formActivation.errors.has('name')"
                          v-html="formActivation.errors.get('name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="mobile">Mobile No.:</label>
                        <input
                          v-model="formActivation.mobile"
                          type="text"
                          name="mobile"
                          placeholder="Enter mobile"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('mobile'),
                          }"
                        />
                        <div
                          v-if="formActivation.errors.has('mobile')"
                          v-html="formActivation.errors.get('mobile')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                          v-model="formActivation.email"
                          type="text"
                          name="email"
                          placeholder="Enter email"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('email'),
                          }"
                        />

                        <div
                          v-if="formActivation.errors.has('email')"
                          v-html="formActivation.errors.get('email')"
                        />
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="mac_address">Mac Address:</label>
                        <input
                          v-model="formActivation.mac_address"
                          type="text"
                          name="mac_address"
                          placeholder="00-00-00-00-00-00"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              formActivation.errors.has('mac_address'),
                          }"
                          :disabled="!editmode"
                        />

                        <div
                          v-if="formActivation.errors.has('mac_address')"
                          v-html="formActivation.errors.get('mac_address')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="type_software">Software Type:</label>
                        <select
                          class="form-control"
                          name="type_software"
                          v-model="formActivation.type_software"
                          :class="{
                            'is-invalid':
                              formActivation.errors.has('type_software'),
                          }"
                          :disabled="editmode"
                        >
                          <option value="">
                            --Select type_software Type--
                          </option>
                          <option value="Retailer">Retailer</option>
                          <option value="Restaurant">Restaurant</option>
                        </select>

                        <div
                          v-if="formActivation.errors.has('type_software')"
                          v-html="formActivation.errors.get('type_software')"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="duration">Duration:</label>
                        <input
                          v-model="formActivation.duration"
                          type="text"
                          min="1"
                          name="duration"
                          placeholder="Enter duration"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('duration'),
                          }"
                          :disabled="editmode"
                        />

                        <div
                          v-if="formActivation.errors.has('duration')"
                          v-html="formActivation.errors.get('duration')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="start_date">Start Date:</label>
                        <input
                          v-model="formActivation.start_date"
                          type="date"
                          name="start_date"
                          placeholder="Enter start date"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              formActivation.errors.has('start_date'),
                          }"
                          disabled
                        />

                        <div
                          v-if="formActivation.errors.has('start_date')"
                          v-html="formActivation.errors.get('start_date')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="end_date">End Date:</label>
                        <input
                          v-model="formActivation.end_date"
                          type="date"
                          name="end_date"
                          placeholder="Enter end date"
                          class="form-control"
                          :class="{
                            'is-invalid': formActivation.errors.has('end_date'),
                          }"
                          disabled
                        />

                        <div
                          v-if="formActivation.errors.has('end_date')"
                          v-html="formActivation.errors.get('end_date')"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" @click="close">
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
        <common-form v-bind:item="formSendMessage"></common-form>
      </div>
    </section>
  </div>
</template>

<script>
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import Form from "vform";
import LaravelVuePagination from "laravel-vue-pagination";

export default {
  components: {
    pagination: LaravelVuePagination,
  },
  data() {
    return {
      // users empty array
      search: "",
      editmode: false,
      isLoad: false,
      ImportExport: false,
      fileName: "",
      UserHistory: [],
      TMBILL_USERS: {
        data: [],
      },
      page: 1,
      form: new Form({
        id: "",
        name: "",
        email: "",
        mobile: "",
        address: "",
        blockingId: "",
        RecoveryId: "",
        blockingFlag: "",
        ResonForBlocking: "",
        UnblockTime: "",
        StartDate: "",
        EndDate: "",
        DemoTime: "",
        DemoFreeDays: "",
        registration_flag: "",
        token: "",
        isEdgeAppBlocked: "",
        password: "",
      }),
      formSMS: new Form({
        id: null,
        tracking_id: "",
        name: "",
        api_key: "",
        sender_id: "",
        username: "",
        sms_count_initial: "0",
        sms_count_remaining: "0",
        sms_count_used: "0",
        timestamp: "",
      }),
      exportForm: new Form({
        exportType: "",
        dateRange: "",
      }),
      formSendMessage: new Form({
        mobile: "",
        smsText: "",
        api_flag: "",
      }),
      totalcharacter: 0,
      msgLength: 0,

      formActivation: new Form({
        id: "",
        product: "",
        name: "",
        mobile: "",
        email: "",
        start_date: "",
        end_date: "",
        duration: "",
        activation_status: false,
        mac_address: "",
        type_software: "",
        sms_getway: "",
      }),
      access_level: {},
    };
  },

  methods: {
    LoadUsers() {
      this.isLoad = true;

      axios.get("api/tmbill-users").then((response) => {
        this.isLoad = false;
        this.TMBILL_USERS = response.data;
      });
    },
    editModal(user) {
      this.UserHistory = [];
      this.editmode = true;
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);

      this.form.blockingFlag = user.blockingFlag == 1 ? true : false;
      this.form.registration_flag = user.registration_flag == 1 ? true : false;
      // 1 blocked 0 unbloack
      this.form.isEdgeAppBlocked = user.isEdgeAppBlocked == 1 ? false : true;
    },
    updateUser() {
      this.form
        .post("api/tmbill-users/" + this.form.id)
        .then(() => {
          $("#newModal").modal("hide");
          this.getResults();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      this.page = page;
      // this.TMBILL_USERS.data = [];
      this.isLoad = true;
      axios
        .get(`api/tmbill-users?q=${this.search}&page=${this.page}`)
        .then((response) => {
          this.TMBILL_USERS = response.data;
          this.isLoad = false;
        });
    },
    searchUser(query, page = 1) {
      axios
        .get("api/tmbill-users?q=" + query + "&page=" + page)
        .then((data) => {
          this.TMBILL_USERS = data.data;
        })
        .catch(() => {});
    },
    getColor(row) {
      if (row.registration_flag == 0) {
        return "table-warning";
      } else if (row.blockingFlag == 1) {
        return "table-danger";
      } else if (row.pos_activation_data != null) {
        return "table-success";
      }
    },
    readMore(user) {
      $("#" + user.id).text(user.address);
    },
    historyModal(user) {
      this.UserHistory = [];
      this.form.fill(user);
      this.UserHistory = user.history;
      $("#newModal").modal("show");
    },
    updateSMSInfo(user) {
      this.formSMS.reset();
      if (user.sms_info) {
        this.formSMS.fill(user.sms_info);
      } else {
        this.formSMS.tracking_id = user.blockingId;
      }
      this.formSMS.name = user.name;
      $("#newModal2").modal("show");
    },
    createSMS() {
      this.formSMS
        .post("api/sms-usage")
        .then((response) => {
          $("#newModal").modal("hide");
          toast.fire({
            type: "success",
            title: "SMS config successfully",
          });
        })
        .catch(() => {});
    },
    updateSMS() {
      this.formSMS
        .post("api/sms-usage/" + this.formSMS.id)
        .then(() => {
          $("#newModal").modal("hide");

          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    Export() {
      this.ImportExport = false;
      $("#ImportExportModal").modal("show");
    },
    Import() {
      this.ImportExport = true;
      $("#ImportExportModal").modal("show");
    },
    exportUser(e) {
      this.exportForm.post("/export").then(({ data }) => {
        var url = "export?" + $.param(this.exportForm);
        window.location = url;
        $("#ImportExportModal").modal("hide");
      });
    },

    sendMessage(user) {
      this.formSendMessage.mobile = user.mobile.toString();
      // Fire.$emit("openSendSMSModal");
      $("#smsFormModal").modal("show");
    },
    charCount: function () {
      this.totalcharacter = this.formSendMessage.smsText.length;
      this.msgLength = Math.ceil(this.formSendMessage.smsText.length / 160);
    },
    sendSMS() {
      this.formSendMessage
        .post("api/sms-send")
        .then(({ data }) => {
          $("#smsModal").modal("hide");
          Swal.fire("Successfully sent sms!", "", "success");

          this.formSendMessage.reset();
          this.charCount();
        })
        .catch(() => {});
    },
    editActivationModal(user) {
      this.editmode = true;
      this.formActivation.reset();
      $("#ActivationModalForm").modal("show");
      this.formActivation.fill(user.pos_activation_data);
      this.formActivation.activation_status =
        user.pos_activation_data.activation_status == 1 ? true : false;
    },
    updateActivationUser() {
      this.formActivation
        .post("api/tmbill-product/" + this.formActivation.id)
        .then(() => {
          $("#ActivationModalForm").modal("hide");
          this.getResults();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    closeModal() {
      $("#ActivationModalForm").modal("hide");
      $("#smsModal").modal("hide");
      $("#newModal").modal("hide");
      $("#newModal2").modal("hide");
      $("#smsFormModal").modal("hide");
    },
    reset() {
      this.search = "";
      this.getResults();
    },
  },

  mounted() {
    this.LoadUsers();
    this.access_level =
      window.gate.user.access_level.pos_offline_registration.pos_registration;
    // console.log(this.access_level);
  },
};
</script>
<style scoped>
address > a {
  cursor: pointer;
}
</style>
