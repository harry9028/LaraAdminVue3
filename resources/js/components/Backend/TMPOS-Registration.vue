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
              <li class="breadcrumb-item active">POS Users</li>
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
                <h3 class="card-title">Filter</h3>
                <div class="card-tools"></div>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>From - To Date</label>
                      <!-- <date-range-picker
                        class="form-control"
                        style="
                          min-width: 235px;
                          border-color: white;
                          padding: 0;
                          border-color: #3f4952;
                        "
                        ref="picker"
                        v-model="filter.dateRange"
                        id="dateRange"
                        :maxDate="maxDate"
                        :locale-data="{ firstDay: 1, format: 'yyyy-mm-dd' }"
                        :timePicker="false"
                        :timePicker24Hour="false"
                        :showWeekNumbers="false"
                        placeholder="Date time"
                        opens="center"
                      >
                        <template
                          v-slot:input="picker"
                          style="min-width: 350px"
                        >
                          {{ picker.startDate }} - {{ picker.endDate }}
                        </template>
                      </date-range-picker> -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-footer clearfix">
                <button class="btn btn-success" @click="getResults()">
                  Submit
                </button>
                <button class="btn btn-danger" @click="filterReset">
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Atlantic POS Users</h3>
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-default d-none d-sm-block"
                    v-if="access_level.add == 1"
                    @click="newModal"
                  >
                    Add New Atlantic POS User <i class="fas fa-user-plus"></i>
                  </button>
                  <!-- <button type="button" class="btn btn-secondary d-none d-sm-block" v-if="access_level.add==1" @click="download">Download Report <i class="fas fa-user-plus"></i></button> -->
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
                        <th>TMPOS Id</th>
                        <th>Username</th>
                        <th style="min-width: 150px">Outlet Name</th>
                        <th>Mobile</th>
                        <th style="min-width: 150px">Owner Name</th>
                        <th style="min-width: 80px">Is Active</th>
                        <th>Registerd At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in users.data" :key="index">
                        <td>{{ user.id }}</td>
                        <td>{{ user.tmpos_id }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.mobile }}</td>
                        <td>{{ user.owner_name }}</td>
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
                        <td>{{ user.registration_time }}</td>
                        <td>
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
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
                              v-if="access_level.payment_settings == 1"
                              @click="editPaymentMode(user.tmpos_id)"
                            >
                              <i class="fab fa-paypal"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              v-if="access_level.show_message_form == 1"
                              @click="messageModel(user)"
                            >
                              <i class="fas fa-paper-plane"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="copyText(user)"
                            >
                              <i class="fas fa-copy"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="resendMail(user)"
                            >
                              <i class="fas fa-envelope"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              @click="ViewTemplates(user)"
                            >
                              <i class="fas fa-list-alt"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr v-show="!users.data.length">
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
                  :data="users"
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
            <textarea
              type="text"
              class="form-control mb-3"
              rows="10"
              value=""
              id="CopyArea"
              placeholder="Copy Area"
            ></textarea>
          </div>
        </div>

        <b-modal
          ref="newModal"
          size="xl"
          scrollable
          :title="editmode ? 'Update Info' : 'Add New'"
        >
          <div class="row">
            <div class="col-md-3">
              <label for="tmpos_id">TMPOS Id:</label>
              <input
                v-model="form.tmpos_id"
                type="text"
                name="tmpos_id"
                placeholder="Enter Tmpos Id"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('tmpos_id') }"
                :disabled="editmode"
              />

              <div
                class="text-danger"
                v-if="form.errors.has('tmpos_id')"
                v-html="form.errors.get('tmpos_id')"
              />
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="country_id">Country:</label>
                <select
                  v-model="form.country_id"
                  name="country_id"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('country_id') }"
                >
                  <option
                    v-for="x in CountryList"
                    :key="x.id"
                    v-bind:value="x.id"
                  >
                    {{ x.name }}
                  </option>
                </select>

                <div
                  class="text-danger"
                  v-if="form.errors.has('country_id')"
                  v-html="form.errors.get('country_id')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="name">Outlet Name:</label>
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
            <div class="col-md-3">
              <div class="form-group">
                <label for="owner_name">Owner Name:</label>
                <input
                  v-model="form.owner_name"
                  type="text"
                  name="owner_name"
                  placeholder="Enter owner name"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('owner_name') }"
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
                <label for="username">Username:</label>
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
            <div class="col-md-3" v-if="!editmode">
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
            <div class="col-md-3">
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

            <div class="col-md-3">
              <div class="form-group">
                <label for="api_key">API Key:</label>
                <textarea
                  v-model="form.api_key"
                  name="api_key"
                  placeholder="Enter api key"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('api_key') }"
                  :disabled="true"
                ></textarea>

                <div
                  class="text-danger"
                  v-if="form.errors.has('api_key')"
                  v-html="form.errors.get('api_key')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_api_flag">SMS API:</label>
                <select
                  v-model="form.sms_api_flag"
                  name="sms_api_flag"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_api_flag') }"
                >
                  <!-- <option  v-for="x in SMSGetwayList" :key="x.id" v-bind:value="x.col2">{{x.col1}}</option> -->
                  <option value="0" selected disabled>Select SMS API</option>
                  <option value="1">SMS Horizon - India</option>
                  <option value="2">Nagpur - India</option>
                  <option value="3">Pinnacle SMS - India</option>
                  <option value="4">Message Bird - Universal</option>
                  <option value="5">Message Country - Universal</option>
                </select>

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_api_flag')"
                  v-html="form.errors.get('sms_api_flag')"
                />
              </div>
            </div>
            <div class="col-md-3">
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
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_sender_id">SMS Sender Id:</label>
                <input
                  v-model="form.sms_sender_id"
                  type="text"
                  :disabled="form.sms_api_flag == 4"
                  name="sms_sender_id"
                  placeholder="Enter sms sender id"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_sender_id') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_sender_id')"
                  v-html="form.errors.get('sms_sender_id')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_api_key">SMS API Key:</label>
                <input
                  v-model="form.sms_api_key"
                  type="text"
                  name="sms_api_key"
                  placeholder="Enter SMS API key"
                  class="form-control"
                  v-on:change="copyAPiPassword"
                  :class="{ 'is-invalid': form.errors.has('sms_api_key') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_api_key')"
                  v-html="form.errors.get('sms_api_key')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_api_user">SMS API User:</label>
                <input
                  v-model="form.sms_api_user"
                  type="text"
                  name="sms_api_user"
                  placeholder="Enter SMS API User"
                  class="form-control"
                  :disabled="form.sms_api_flag == 3 || form.sms_api_flag == 4"
                  :class="{ 'is-invalid': form.errors.has('sms_api_user') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_api_user')"
                  v-html="form.errors.get('sms_api_user')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_api_password">SMS API Password:</label>
                <input
                  v-model="form.sms_api_password"
                  type="text"
                  name="sms_api_password"
                  placeholder="Enter SMS Password"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_api_password') }"
                  disabled
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_api_password')"
                  v-html="form.errors.get('sms_api_password')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="peid">SMS PEID:</label>
                <input
                  v-model="form.peid"
                  type="text"
                  name="peid"
                  placeholder="Enter SMS PEID"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('peid') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('peid')"
                  v-html="form.errors.get('peid')"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_total">Total SMS:</label>
                <input
                  v-model="form.sms_total"
                  type="text"
                  name="sms_total"
                  placeholder="Enter SMS Password"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_total') }"
                  :disabled="false"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_total')"
                  v-html="form.errors.get('sms_total')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_left">Left SMS:</label>
                <input
                  v-model="form.sms_left"
                  type="text"
                  name="sms_left"
                  placeholder="Left SMS"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_left') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_left')"
                  v-html="form.errors.get('sms_left')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="sms_sent">Sent SMS:</label>
                <input
                  v-model="form.sms_sent"
                  type="text"
                  name="sms_sent"
                  placeholder="Sent SMS"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('sms_sent') }"
                  :disabled="false"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('sms_sent')"
                  v-html="form.errors.get('sms_sent')"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="dunzo_client_id">Dunzo Client ID: </label>
                <input
                  v-model="form.dunzo_client_id"
                  type="text"
                  name="dunzo_client_id"
                  placeholder="Dunzo Client ID"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('dunzo_client_id') }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('dunzo_client_id')"
                  v-html="form.errors.get('dunzo_client_id')"
                />
                <div class="valid-feedback" style="display: block">
                  Configure the webhook on dunzo portal for delivery boy status
                  updates
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="dunzo_client_secret">Dunzo Client Secret:</label>
                <input
                  v-model="form.dunzo_client_secret"
                  type="text"
                  name="dunzo_client_secret"
                  placeholder="Dunzo Client Secret"
                  class="form-control"
                  :class="{
                    'is-invalid': form.errors.has('dunzo_client_secret'),
                  }"
                  :disabled="false"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('dunzo_client_secret')"
                  v-html="form.errors.get('dunzo_client_secret')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="type">User Role:</label>
                <select
                  v-model="form.type"
                  name="type"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('type') }"
                  :disabled="false"
                >
                  <option value="">Select Role</option>
                  <option value="super">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="user">Standard User</option>
                </select>

                <div
                  class="text-danger"
                  v-if="form.errors.has('type')"
                  v-html="form.errors.get('type')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="email_verified_at">Email Verified At:</label>
                <VueCtkDateTimePicker
                  id="expired_at"
                  :error="form.errors.has('email_verified_at')"
                  color="#6c757d"
                  :dark="false"
                  :auto-close="true"
                  button-color="#6c757d"
                  v-model="form.email_verified_at"
                  :range="false"
                  :onlyDate="false"
                  :inline="false"
                  :noLabel="false"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('email_verified_at')"
                  v-html="form.errors.get('email_verified_at')"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <label for="login_deactive_message"
                  >If User De Activate Login Message :</label
                >
                <input
                  v-model="form.login_deactive_message"
                  type="text"
                  name="login_deactive_message"
                  placeholder="De activate message"
                  class="form-control"
                  :class="{
                    'is-invalid': form.errors.has('login_deactive_message'),
                  }"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('login_deactive_message')"
                  v-html="form.errors.get('login_deactive_message')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  v-model="form.show_poweredby"
                  name="show_poweredby"
                  class="custom-control-input"
                  id="show_poweredby"
                />
                <label class="custom-control-label" for="show_poweredby"
                  >Show Powered By TMBill on Print:</label
                >
              </div>
            </div>
            <div class="col-md-3">
              <div class="custom-control custom-switch">
                <input
                  type="checkbox"
                  v-model="form.send_notification"
                  name="send_notification"
                  class="custom-control-input"
                  id="send_notification"
                />
                <label class="custom-control-label" for="send_notification"
                  >Send Notification</label
                >
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="poc"
                  >Point of Contact:

                  <b-icon
                    @click="viewPointOfDetail()"
                    v-if="form.poc"
                    style="cursor: pointer"
                    icon="star-fill"
                    font-scale="2"
                    aria-hidden="true"
                    animation="throb"
                    shift-v="-0.25"
                    variant="info"
                    scale="0.75"
                  ></b-icon>
                </label>
                <select
                  v-model="form.poc"
                  name="poc"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('poc') }"
                  :disabled="false"
                >
                  <option value="">Select Name</option>
                  <option
                    v-for="(p, i) in PointOfContactList"
                    :key="i"
                    :value="p.poc_contact_no"
                  >
                    {{ p.full_name }}
                  </option>
                </select>

                <div
                  class="text-danger"
                  v-if="form.errors.has('poc')"
                  v-html="form.errors.get('poc')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="store_creation_limit">Store Creation Limit:</label>
                <input
                  v-model="form.store_creation_limit"
                  type="text"
                  name="store_creation_limit"
                  placeholder="Store creation limit"
                  class="form-control"
                  :class="{
                    'is-invalid': form.errors.has('store_creation_limit'),
                  }"
                  :disabled="!editmode"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('store_creation_limit')"
                  v-html="form.errors.get('store_creation_limit')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <label for="nextel_api_key">WhatsApp API Key:</label>
                <input
                  v-model="form.nextel_api_key"
                  type="text"
                  name="nextel_api_key"
                  placeholder="Key"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('nextel_api_key') }"
                  :disabled="!editmode"
                />

                <div
                  class="text-danger"
                  v-if="form.errors.has('nextel_api_key')"
                  v-html="form.errors.get('nextel_api_key')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    v-model="form.live_tracking_enabled"
                    name="live_tracking_enabled"
                    class="custom-control-input"
                    id="live_tracking_enabled"
                  />
                  <label
                    class="custom-control-label"
                    for="live_tracking_enabled"
                    >Enabled Live Tracking</label
                  >
                </div>

                <div
                  class="text-danger"
                  v-if="form.errors.has('live_tracking_enabled')"
                  v-html="form.errors.get('live_tracking_enabled')"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    v-model="form.upsale_integration"
                    name="upsale_integration"
                    class="custom-control-input"
                    id="upsale_integration"
                  />
                  <label class="custom-control-label" for="upsale_integration"
                    >UpSale Integration</label
                  >
                </div>

                <div
                  class="text-danger"
                  v-if="form.errors.has('upsale_integration')"
                  v-html="form.errors.get('upsale_integration')"
                />
              </div>
            </div>
          </div>
          <div class="row mt-3" v-if="form.access_level">
            <div class="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th>Menu Name</th>
                    <th>Is Show</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(x, index) in form.access_level" :key="index">
                    <td>{{ RemoveUnderscore(index) }}</td>
                    <td>
                      <b-form-checkbox
                        :id="index"
                        v-model="x.is_show"
                        value="1"
                        unchecked-value="0"
                      >
                      </b-form-checkbox>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <template v-slot:modal-footer>
            <b-button
              size="sm"
              v-if="editmode"
              variant="success"
              @click="updateUser()"
            >
              Update
            </b-button>
            <b-button
              size="sm"
              v-if="!editmode"
              variant="success"
              @click="createUser()"
            >
              Create
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancel
            </b-button>
          </template>
        </b-modal>
        <b-modal ref="pocModal" size="xl" title="Point Of Contact Detail">
          <div class="invoice p-3 mb-3">
            <!-- title row -->
            <div class="row">
              <div class="col-12">
                <h4>
                  <i class="fas fa-globe"></i> TMBill Inc.
                  <!-- <small class="float-right">Date: {{form.p_o_c.created_at }}</small> -->
                </h4>
              </div>
              <!-- /.col -->
            </div>
            <hr />
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-3 invoice-col">
                <b>Point Of Contact</b>
                <address>
                  <strong>{{ form.p_o_c.poc_name }}</strong
                  ><br />
                  {{ form.p_o_c.poc_address }}<br />
                  {{ form.p_o_c.poc_contact_no }}<br />
                  {{ form.p_o_c.poc_company_mail_id }}<br />
                  {{ form.p_o_c.poc_alternate_contact_no }}<br />
                </address>
              </div>
              <!-- /.col -->
              <div class="col-sm-3 invoice-col">
                <b>Reseller Details</b>
                <address>
                  <strong>{{ form.p_o_c.reseller_company_name }}</strong
                  ><br />
                  {{ form.p_o_c.reseller_company_address }}<br />
                  {{ form.p_o_c.reseller_company_mail_id }}<br />
                </address>
              </div>
              <div class="col-sm-3 invoice-col">
                <b>Sales Person Details</b>
                <address>
                  <strong>{{ form.p_o_c.sales_person_name }}</strong
                  ><br />
                  {{ form.p_o_c.sales_person_address }}<br />
                  {{ form.p_o_c.sales_person_mail_id }}
                </address>
              </div>
              <!-- /.col -->
              <div class="col-sm-3 invoice-col">
                <b>Lead Generated By</b>
                <address>
                  <strong>{{ form.p_o_c.lead_generated_by }}</strong
                  ><br />
                  {{ form.p_o_c.lead_generatedby_address }}<br />
                  {{ form.p_o_c.lead_generatedby_contactno }}<br />
                  {{ form.p_o_c.lead_generatedby_mail }}
                </address>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </b-modal>
        <div class="modal fade" id="PaymentModal">
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Payment Settings</h4>

                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="container mb-3">
                  <form>
                    <div class="row">
                      <div class="form-group col-md-4">
                        <label>Paymnet Getway Name:</label>
                        <select
                          class="form-control"
                          v-model="paymentForm.pay_gateway_flag"
                          @change="PayGetwayFlag()"
                          :disabled="editmode"
                          :class="{
                            'is-invalid':
                              paymentForm.errors.has('pay_gateway_name'),
                          }"
                        >
                          <option value="">Select Payment Getway</option>
                          <option value="1">RazorPay</option>
                          <option value="2">PayUMoney</option>
                          <option value="4">PayU</option>
                          <option value="6">PayTM</option>
                        </select>

                        <div
                          class="text-danger"
                          v-if="paymentForm.errors.has('pay_gateway_name')"
                          v-html="paymentForm.errors.get('pay_gateway_name')"
                        />
                      </div>
                      <!-- <div class="form-group col-md-2">
                                <label>Default Flag:</label>
                                <select class="form-control" v-model="paymentForm.default_flag">
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                                </select>
                              </div> -->
                      <div class="form-group col-md-4">
                        <label>Key Id:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="paymentForm.key_id"
                          placeholder="Key Id"
                          :class="{
                            'is-invalid': paymentForm.errors.has('key_id'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="paymentForm.errors.has('key_id')"
                          v-html="paymentForm.errors.get('key_id')"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label>Secret Key:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="paymentForm.key_secret"
                          placeholder="Secret key"
                          :class="{
                            'is-invalid': paymentForm.errors.has('key_secret'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="paymentForm.errors.has('key_secret')"
                          v-html="paymentForm.errors.get('key_secret')"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-if="!editmode"
                      @click="AddNewPayment"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-if="editmode"
                      @click="SavePaymentSettings"
                    >
                      Update
                    </button>
                    <button type="button" class="btn btn-danger" @click="Reset">
                      Reset
                    </button>
                  </form>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Payment Settings</h3>
                    <div class="card-tools"></div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Paymnet Getway Name</th>
                            <!-- <th>Default Flag</th> -->
                            <th>Key</th>
                            <th>Secret</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(x, index) in UserPaymentGetwayList"
                            :key="index"
                          >
                            <td>{{ ++index }}</td>
                            <td>{{ x.pay_gateway_name }}</td>
                            <!-- <td>
                                     
                                      <span v-if="x.default_flag==1" class="badge badge-primary">Yes</span>
                                      <span v-else class="badge badge-danger">No</span>
                                    </td> -->
                            <td>{{ x.key_id }}</td>
                            <td>{{ x.key_secret }}</td>
                            <td>
                              <div class="btn-group">
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  @click="UpdatePayment(x)"
                                >
                                  Edit
                                </button>
                                <!-- <button type="button" class="btn btn-danger" @click="DeletePayment(x.id)">Delete</button> -->
                              </div>
                            </td>
                          </tr>
                          <tr v-if="!UserPaymentGetwayList.length">
                            <td colspan="7">No data</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="overlay dark" v-if="isLoad">
                    <i class="fas fa-2x fa-sync-alt fa-spin"></i>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="TemplateModal">
          <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">SMS & WhatsApp Templates</h4>

                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="container mb-3">
                  <form>
                    <div class="row">
                      <div class="form-group col-md-4">
                        <label>Template ID:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="TemplateForm.template_id"
                          placeholder="Template Id"
                          :class="{
                            'is-invalid':
                              TemplateForm.errors.has('template_id'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="TemplateForm.errors.has('template_id')"
                          v-html="TemplateForm.errors.get('template_id')"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label>Template Name:</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="TemplateForm.template_name"
                          placeholder="Template Name"
                          :class="{
                            'is-invalid':
                              TemplateForm.errors.has('template_name'),
                          }"
                        />

                        <div
                          class="text-danger"
                          v-if="TemplateForm.errors.has('template_name')"
                          v-html="TemplateForm.errors.get('template_name')"
                        />
                      </div>
                      <div class="form-group col-md-4">
                        <label>Message Type:</label>
                        <select
                          v-model="TemplateForm.type"
                          name="type"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('type') }"
                        >
                          <option value="">Select SMS API</option>
                          <option value="0">Text Message</option>
                          <option value="1">WhatsApp Message</option>
                        </select>

                        <div
                          class="text-danger"
                          v-if="TemplateForm.errors.has('type')"
                          v-html="TemplateForm.errors.get('type')"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Template Message:</label>
                        <textarea
                          class="form-control"
                          v-model="TemplateForm.template_message"
                          placeholder="Template Message"
                          :class="{
                            'is-invalid':
                              TemplateForm.errors.has('template_message'),
                          }"
                        ></textarea>

                        <div
                          class="text-danger"
                          v-if="TemplateForm.errors.has('template_message')"
                          v-html="TemplateForm.errors.get('template_message')"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label>WhatsApp Message Payload:</label>
                        <textarea
                          class="form-control"
                          :disabled="TemplateForm.type == 1 ? false : true"
                          v-model="TemplateForm.whats_app_json"
                          placeholder="WhatsApp Message Payload"
                          :class="{
                            'is-invalid':
                              TemplateForm.errors.has('whats_app_json'),
                          }"
                        ></textarea>

                        <div
                          class="text-danger"
                          v-if="TemplateForm.errors.has('whats_app_json')"
                          v-html="TemplateForm.errors.get('whats_app_json')"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-if="!isEditTemplate"
                      @click="AddTemplate"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-if="isEditTemplate"
                      @click="UpdateTemplate"
                    >
                      Update
                    </button>
                    <button type="button" class="btn btn-danger" @click="Reset">
                      Reset
                    </button>
                  </form>
                </div>
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Templates List</h3>
                    <div class="card-tools"></div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body p-0">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Template ID</th>
                            <th>Template Name</th>
                            <th>Template Message</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(x, index) in TemplatesLists" :key="index">
                            <td>{{ ++index }}</td>
                            <td>{{ x.template_id }}</td>
                            <td>{{ x.template_name }}</td>
                            <td>{{ x.template_message }}</td>
                            <td>{{ x.created_at }}</td>
                            <td>{{ x.updated_at }}</td>
                            <td>
                              <div class="btn-group">
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  @click="EditTemplate(x)"
                                >
                                  Edit
                                </button>
                                <!-- <button type="button" class="btn btn-danger" @click="DeletePayment(x.id)">Delete</button> -->
                              </div>
                            </td>
                          </tr>
                          <tr v-if="!TemplatesLists.length">
                            <td colspan="7">No data</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- <div class="overlay dark" v-if="isLoad">
                            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
                          </div> -->
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <common-form v-bind:item="smsForm"></common-form>
    </section>
  </div>
</template>

<script>
// import DateRangePicker from "vue2-daterange-picker";
// import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
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
      SMSGetwayList: {},
      CountryList: {},
      form: new Form({
        id: "",
        tmpos_id: "",
        name: "",
        email: "",
        mobile: "",
        username: "",
        address: "",
        owner_name: "",
        password: "",
        firebase_token: "",
        send_notification: false,
        registration_time: "",
        registration_date: "",
        is_active: false,
        store_creation_limit: 1,
        msg: "",
        country: "",
        country_id: 98,
        currency: "",
        sms_api_flag: 0,
        sms_total: 0,
        sms_sender_id: "",
        sms_api_key: "",
        sms_api_user: "",
        sms_api_password: "",
        sms_left: 0,
        sms_sent: 0,
        profile_photo: "",
        email_verified_at: null,
        type: "super",
        dunzo_client_id: "",
        dunzo_client_secret: "",
        peid: null,
        template_id: null,
        show_poweredby: 1,
        login_deactive_message: "",
        access_level: {
          dashboard: {
            is_show: 0,
          },
          live_tracking: {
            is_show: 0,
          },
          atlantic_pos: {
            is_show: 0,
          },
          digital_order: {
            is_show: 0,
          },
          crm: {
            is_show: 0,
          },
          customer_loyalty: {
            is_show: 0,
          },
          inventory_management: {
            is_show: 0,
          },
          tmchannel_connect: {
            is_show: 0,
          },
          settings: {
            is_show: 0,
          },
          about_tmbill: {
            is_show: 0,
          },
          tmbill_atlantic_products: {
            is_show: 0,
          },
          delete_account_permanent: {
            is_show: 0,
          },
          delete_inventory: {
            is_show: 0,
          },
        },
        poc: "",
        p_o_c: {
          id: null,
          lead_generated_by: null,
          lead_generatedby_address: null,
          lead_generatedby_contactno: null,
          lead_generatedby_mail: null,
          poc_address: null,
          poc_alternate_contact_no: null,
          poc_company_mail_id: null,
          poc_contact_no: null,
          poc_name: null,
          reseller_company_address: null,
          reseller_company_mail_id: null,
          reseller_company_name: null,
          sales_person_address: null,
          sales_person_mail_id: null,
          sales_person_name: null,
          tmpos_id: null,
          created_at: "",
          updated_at: "",
        },
        nextel_api_key: "",
        live_tracking_enabled: 0,
        upsale_integration: false,
      }),

      smsForm: new Form({
        api_flag: "",
        mobile: "",
        smsText: "",
      }),
      paymentForm: new Form({
        id: null,
        tmpos_id: "",
        pay_gateway_name: "RazorPay",
        pay_gateway_flag: "1",
        // default_flag:"0",
        key_id: "",
        key_secret: "",
      }),
      UserPaymentGetwayList: [],
      access_level: {},
      PointOfContactList: [],
      TemplateForm: new Form({
        id: null,
        tmpos_id: "",
        template_id: "",
        template_name: "",
        template_message: "",
        created_at: "",
        updated_at: "",
        type: "",
        whats_app_json: "",
      }),
      isLoading: false,
      AtlanticUsers: [],
      isEditTemplate: false,
      TemplatesLists: [],
      filter: new Form({
        dateRange: {
          startDate: moment().format("YYYY-MM-DD"),
          endDate: moment().format("YYYY-MM-DD"),
        },
      }),
      maxDate: moment().format("YYYY-MM-DD"),
      search: "",
    };
  },
  methods: {
    Reset() {
      this.paymentForm.reset();

      this.TemplateForm.reset();
      this.editmode = false;
      this.isEditTemplate = false;
    },
    filterReset() {
      this.filter.reset();
      this.getResults();
    },
    PayGetwayFlag() {
      if (this.paymentForm.pay_gateway_flag == 1) {
        //Razorpay
        this.paymentForm.pay_gateway_name = "RazorPay";
      } else if (this.paymentForm.pay_gateway_flag == 2) {
        //Payumoney
        this.paymentForm.pay_gateway_name = "PayUMoney";
      } else if (this.paymentForm.pay_gateway_flag == 4) {
        this.paymentForm.pay_gateway_name = "PayU";
      } else if (this.paymentForm.pay_gateway_flag == 6) {
        this.paymentForm.pay_gateway_name = "PayTM";
      }
    },
    UpdatePayment(payment) {
      this.editmode = true;
      this.paymentForm.fill(payment);
    },
    DeletePayment(id) {},
    SavePaymentSettings() {
      this.isLoad = true;
      this.paymentForm
        .post("api/tmpos-payment-settings/" + this.paymentForm.id)
        .then(() => {
          this.editPaymentMode(this.paymentForm.tmpos_id);
          this.Reset();
        })
        .catch(() => {});
    },
    AddNewPayment() {
      this.isLoad = true;

      this.paymentForm
        .post("api/tmpos-payment-settings")
        .then((data) => {
          this.editPaymentMode(this.paymentForm.tmpos_id);
          this.Reset();
        })
        .catch(() => {});
    },
    editPaymentMode(tmpos_id) {
      this.paymentForm.reset();

      this.editmode = false;
      axios
        .get("api/tmpos-payment-settings?tmpos_id=" + tmpos_id)
        .then((result) => {
          this.isLoad = false;
          this.UserPaymentGetwayList = result.data.result;
          this.paymentForm.tmpos_id = tmpos_id;

          $("#PaymentModal").modal("show");
        });
    },
    messageModel(user) {
      this.smsForm.mobile = user.mobile;
      Fire.$emit("openSendSMSModal");
    },
    loadUsers() {
      axios.all([
        this.getUsersList(),
        this.getSMSList(),
        this.getCountryList(),
      ]);
    },
    getUsersList() {
      this.isLoad = true;
      axios.get("api/tmpos-users").then((data) => {
        this.users = data.data;
        // this.AtlanticUsers = data.data.data;
        this.isLoad = false;
      });
    },
    getSMSList() {
      axios
        .get("api/sms-getway")
        .then(({ data }) => (this.SMSGetwayList = data));
    },
    getCountryList() {
      axios
        .get("api/country-list")
        .then(({ data }) => (this.CountryList = data));
    },

    getResults(page = 1) {
      this.isLoad = true;
      this.page = page;
      axios
        .get("/api/tmpos-users", {
          params: {
            q: this.$parent.search,
            page: page,
            start: this.filter.dateRange.startDate
              ? moment(this.filter.dateRange.startDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
            end: this.filter.dateRange.endDate
              ? moment(this.filter.dateRange.endDate).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )
              : null,
          },
        })
        .then((response) => {
          this.users = response.data;
          this.isLoad = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    newModal() {
      this.editmode = false;
      this.form.reset();
      if (!this.form.email_verified_at) {
        this.form.email_verified_at = moment().format("YYYY-MM-DD hh:mm a");
      }
      this.form.tmpos_id = this.randomNumber();

      this.$refs["newModal"].show();
    },
    randomNumber: function () {
      return Math.floor(Math.random() * (100000000 - 1 + 1)) + 1;
    },
    editModal(user) {
      this.editmode = true;
      this.form.reset();
      this.$refs["newModal"].show();
      this.form.fill(user);

      if (user.p_o_c) {
        this.form.poc = user.p_o_c.poc_contact_no;
      } else {
        this.form.p_o_c = {
          id: "",
          lead_generated_by: "",
          lead_generatedby_address: "",
          lead_generatedby_contactno: "",
          lead_generatedby_mail: "",
          poc_address: "",
          poc_alternate_contact_no: "",
          poc_company_mail_id: "",
          poc_contact_no: "",
          poc_name: "",
          reseller_company_address: "",
          reseller_company_mail_id: "",
          reseller_company_name: "",
          sales_person_address: "",
          sales_person_mail_id: "",
          sales_person_name: "",
          tmpos_id: "",
          created_at: "2020-12-03 12:12:12",
          updated_at: "",
        };
        // console.log(this.form.p_o_c);
      }

      this.form.is_active = user.is_active == 1 ? true : false;
      this.form.send_notification = user.send_notification == 1 ? true : false;
      this.form.show_poweredby = user.show_poweredby == 1 ? true : false;
      if (!this.form.access_level) {
        this.form.access_level = {
          dashboard: {
            is_show: 0,
          },
          atlantic_pos: {
            is_show: 0,
          },
          digital_order: {
            is_show: 0,
          },
          crm: {
            is_show: 0,
          },
          inventory_management: {
            is_show: 0,
          },
          tmchannel_connect: {
            is_show: 0,
          },
          settings: {
            is_show: 0,
          },
          about_tmbill: {
            is_show: 0,
          },
          delete_account_permanent: {
            is_show: 0,
          },
          delete_inventory_permanent: {
            is_show: 0,
          },
        };
      } else if (!this.form.access_level.hasOwnProperty("about_tmbill")) {
        this.form.access_level.about_tmbill = { is_show: 0 };
        console.log(this.form.access_level);
      } else if (!this.form.access_level.hasOwnProperty("customer_loyalty")) {
        this.form.access_level.customer_loyalty = { is_show: 0 };
      } else if (
        !this.form.access_level.hasOwnProperty("tmbill_atlantic_products")
      ) {
        this.form.access_level.tmbill_atlantic_products = { is_show: 0 };
      } else if (
        !this.form.access_level.hasOwnProperty("delete_account_permanent")
      ) {
        this.form.access_level.delete_account_permanent = { is_show: 0 };
      } else if (
        !this.form.access_level.hasOwnProperty("delete_inventory_permanent")
      ) {
        this.form.access_level.delete_inventory_permanent = { is_show: 0 };
      } else if (!this.form.access_level.hasOwnProperty("live_tracking")) {
        this.form.access_level.live_tracking = { is_show: 0 };
      }

      if (!this.form.email_verified_at) {
        this.form.email_verified_at = moment().format("YYYY-MM-DD hh:mm a");
      }
    },

    createUser() {
      this.form
        .post("api/tmpos-users")
        .then(({ data }) => {
          this.$refs["newModal"].hide();
          toast.fire({
            type: "success",
            title: "User Created successfully",
          });
          this.getResults(this.page);
        })
        .catch(() => {});
    },
    updateUser() {
      this.form
        .post("api/tmpos-users/" + this.form.id)
        .then(() => {
          this.$refs["newModal"].hide();
          this.getResults(this.page);
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    searchUser(query, page = 1) {
      this.isLoad = true;
      axios
        .get("api/tmpos-users?q=" + query + "&page=" + page)
        .then((data) => {
          this.users = data.data;
          this.isLoad = false;
        })
        .catch(() => {});
    },
    copyAPiPassword() {
      this.form.sms_api_password = this.form.sms_api_key;
    },
    copyText(user) {
      var txt =
        "*TMBill Master/Head-Office/Back-Office Login details*" +
        "\n\nUsername: " +
        user.username;
      txt += "\nMail id: " + user.email;
      txt +=
        "\nPassword: Password has sent to your registered Mail id, if you forgot then please reset the password from the login page.";
      txt += "\nLogin Link: https://backoffice.tmbill.in\n ";
      txt += "\n*For Support Drop Mail on support@tmbill.in*\n ";
      txt += "\nTeam\nTMBill ";
      $("#CopyArea").val(txt);
      var copyText = document.getElementById("CopyArea");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      toast.fire({
        type: "success",
        title: "Copy success",
      });
    },
    cancel() {
      this.$refs["newModal"].hide();
    },
    getPontOfContactList() {
      // PointOfContactList
      axios
        .get("api/point-of-contact-users")
        .then((data) => {
          // console.log(data.data);
          this.PointOfContactList = data.data;
        })
        .catch(() => {});
    },
    viewPointOfDetail() {
      // console.log(this.form.p_o_c);

      this.$refs["pocModal"].show();
    },
    download() {
      var url = "../tmpos-users";
      window.location = url;
    },
    resendMail(user) {
      axios
        .get("api/resend-mail/" + user.id)
        .then((response) => {
          console.log(response.data);

          Swal.fire(
            "Good job!",
            "The Client info has been sent email",
            "success"
          );
        })
        .catch(() => {});
    },
    ViewTemplates(user) {
      $("#TemplateModal").modal("show");
      this.TemplateForm.reset();
      this.TemplateForm.clear();
      this.TemplateForm.tmpos_id = user.tmpos_id;
      this.isEditTemplate = false;
      this.getTemplates(user.tmpos_id);
    },
    getTemplates(tmpos_id) {
      axios.get("api/sms-template/" + tmpos_id).then((result) => {
        this.TemplatesLists = result.data;
      });
    },
    EditTemplate(x) {
      this.isEditTemplate = true;
      this.TemplateForm.fill(x);
    },
    AddTemplate() {
      this.TemplateForm.post("api/sms-template")
        .then(({ data }) => {
          this.getTemplates(this.TemplateForm.tmpos_id);
          this.TemplateForm.reset();

          toast.fire({
            type: "success",
            title: "Template has been added",
          });
        })
        .catch(() => {});
    },
    UpdateTemplate() {
      this.TemplateForm.post("api/sms-template/" + this.TemplateForm.id)
        .then(() => {
          this.getTemplates(this.TemplateForm.tmpos_id);
          this.TemplateForm.reset();
          this.isEditTemplate = false;
          toast.fire({
            type: "success",
            title: "Template has been updated",
          });
        })
        .catch(() => {});
    },
    RemoveUnderscore(text) {
      const mytxt = text.replace(/_|-/g, " ");
      const title = this.TitleCase(mytxt);
      return title;
    },
    TitleCase(str) {
      var splitStr = str.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    },
  },
  mounted() {
    this.loadUsers();
    this.getPontOfContactList();

    this.access_level =
      window.gate.user.access_level.atlantic_pos.activated_users;
  },
};
</script>
