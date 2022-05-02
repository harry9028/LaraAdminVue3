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
              <li class="breadcrumb-item active">Our Employee</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="container">
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
                @click="searchUser"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Users List</h3>

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
            <div class="card-body table-responsive p-0">
              <table class="table table-hover">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th style="min-width: 120px">Registered At</th>
                    <th>Action</th>
                  </tr>
                  <tr v-for="user in users.data" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.contact_no }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.type }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Button Group"
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
                          class="btn btn-warning"
                          v-if="access_level.message_credentials_update == 1"
                          @click="SMSModal(user)"
                        >
                          <i class="fas fa-envelope"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          v-if="access_level.delete == 1"
                          @click="deleteUser(user.id)"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer">
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

            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="newModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addNewTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-full"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-show="!editmode" id="addNewLabel">
                Add New
              </h5>
              <h5 class="modal-title" v-show="editmode" id="addNewLabel">
                Update User's Info
              </h5>
              <button type="button" class="close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="editmode ? updateUser() : createUser()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="name" class="control-label">Name:</label>
                      <input
                        v-model="form.name"
                        type="text"
                        name="name"
                        id="name"
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
                      <label for="email" class="control-label">Email:</label>
                      <input
                        v-model="form.email"
                        type="text"
                        name="email"
                        id="email"
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
                      <label for="contact_no" class="control-label"
                        >Contact No:</label
                      >
                      <input
                        v-model="form.contact_no"
                        type="text"
                        name="contact_no"
                        id="contact_no"
                        placeholder="Enter contact no"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('contact_no') }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('contact_no')"
                        v-html="form.errors.get('contact_no')"
                      />
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="password" class="control-label"
                        >Password (leave empty if not changing)</label
                      >
                      <input
                        type="password"
                        v-model="form.password"
                        class="form-control"
                        id="password"
                        placeholder="Passport"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('password')"
                        v-html="form.errors.get('password')"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">Access Levels</h3>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body">
                        <div class="row">
                          <div class="form-group col-md-2">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="dashboard"
                                v-model="form.access_level.dashboard"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="exampleCheck1"
                                >Show dashboard tab</label
                              >
                            </div>
                          </div>
                          <div class="form-group col-md-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="feedback"
                                v-model="form.access_level.feedback"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Show Feedback tab
                              </label>
                            </div>
                          </div>
                          <div class="form-group col-md-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="backup_links"
                                v-model="form.access_level.backup_links"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Show backup links tab
                              </label>
                            </div>
                          </div>
                          <div class="form-group col-md-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="backup"
                                v-model="form.access_level.backup"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Show backup tab
                              </label>
                            </div>
                          </div>
                          <div class="form-group col-md-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="profile"
                                v-model="form.access_level.profile"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Show profile tab
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">POS Offline Registration</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="pos_offline_registration_pos_offline_registration_tab"
                                v-model="
                                  form.access_level.pos_offline_registration
                                    .pos_offline_registration_tab
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enabled POS Offline Registration Tab
                              </label>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">POS Registration</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Pos Registration Tab
                                          </label>
                                        </div>
                                      </div>

                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_update"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_export_option"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration.export
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Export
                                          </label>
                                        </div>
                                      </div>

                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration
                                                .show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_pos_activation_update"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration
                                                .pos_activation_update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Pos activation update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_show_user_log_details"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration
                                                .show_user_log_details
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show User log details
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-4">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_message_credentials_update"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .pos_registration
                                                .message_credentials_update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Update Message Credentials
                                            Option
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Captain App</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_registration_captain_app_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .captain_app.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Captain App Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="captain_app_update"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .captain_app.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="captain_app_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .captain_app.show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="captain_app_history"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .captain_app.history
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show History
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Kitchen App</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="kitchen_app_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .kitchen_app.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Captain App Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="kitchen_app_update"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .kitchen_app.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="kitchen_app_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .kitchen_app.show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="kitchen_app_history"
                                            v-model="
                                              form.access_level
                                                .pos_offline_registration
                                                .kitchen_app.history
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show History
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">POS Offline Activation</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="pos_offline_activation_pos_offline_activation_tab"
                                v-model="
                                  form.access_level.pos_offline_activation
                                    .pos_offline_activation_tab
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enabled Pos Offline Activation Tab
                              </label>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">POS Activation Keys</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_activation_keys_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .pos_activation_keys.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Pos Activation Keys Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_activation_keys_generate_new_key"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .pos_activation_keys
                                                .generate_new_key
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Generate New Key
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_activation_keys_edit"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .pos_activation_keys.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_activation_keys_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .pos_activation_keys
                                                .show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled show message form
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_activation_keys_copy_option"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .pos_activation_keys.copy_option
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled copy option
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Captain App</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_pos_registration_captain_app_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .captain_app.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Captain App Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_captain_app_edit"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .captain_app.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_captain_app_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .captain_app.show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Kitchen App</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_kitchen_app_show_tab"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .kitchen_app.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled Captain App Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_kitchen_app_edit"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .kitchen_app.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enabled update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="pos_offline_activation_kitchen_app_show_message_form"
                                            v-model="
                                              form.access_level
                                                .pos_offline_activation
                                                .kitchen_app.show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">Promocode Offline</h5>
                          <div class="card-body">
                            <div class="row">
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="promocode_offline_enabled_promocode_offline_tab"
                                    v-model="
                                      form.access_level.promocode_offline
                                        .enabled_promocode_offline_tab
                                    "
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Enabled promocode offline tab
                                  </label>
                                </div>
                              </div>
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="promocode_offline_promocode_pos"
                                    v-model="
                                      form.access_level.promocode_offline
                                        .promocode_history
                                    "
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Promocode History
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">Promocode POS</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="promocode_offline_promocode_pos_show_tab"
                                            v-model="
                                              form.access_level
                                                .promocode_offline.promocode_pos
                                                .show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Promocode POS Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="promocode_offline_promocode_pos_add"
                                            v-model="
                                              form.access_level
                                                .promocode_offline.promocode_pos
                                                .add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="promocode_offline_promocode_pos_edit"
                                            v-model="
                                              form.access_level
                                                .promocode_offline.promocode_pos
                                                .edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Edit
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="promocode_offline_promocode_pos_delete"
                                            v-model="
                                              form.access_level
                                                .promocode_offline.promocode_pos
                                                .delete
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Delete
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">POS Plan & Payment</h5>
                          <div class="card-body">
                            <div class="row">
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="pos_plan_and_payment_enabled_pos_plan"
                                    v-model="
                                      form.access_level.pos_plan_and_payment
                                        .enabled_pos_plan
                                    "
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Enabled POS Plan & Payment
                                  </label>
                                </div>
                              </div>
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="pos_plan_and_payment_plan"
                                    v-model="
                                      form.access_level.pos_plan_and_payment
                                        .plan
                                    "
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Plan
                                  </label>
                                </div>
                              </div>
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="pos_plan_and_payment_payment"
                                    v-model="
                                      form.access_level.pos_plan_and_payment
                                        .payment
                                    "
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Payment
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">TMChannel</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="tmchannel_enabled_tmchannel"
                                v-model="
                                  form.access_level.tmchannel.enabled_tmchannel
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enable TMChannel Tab
                              </label>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">TMChannel</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="tmchannel_activated_users_show_tab"
                                            v-model="
                                              form.access_level.tmchannel
                                                .activated_users.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Activated Masters
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="tmchannel_activated_users_add"
                                            v-model="
                                              form.access_level.tmchannel
                                                .activated_users.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="tmchannel_activated_users_update"
                                            v-model="
                                              form.access_level.tmchannel
                                                .activated_users.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="tmchannel_activated_users_show_message_form"
                                            v-model="
                                              form.access_level.tmchannel
                                                .activated_users
                                                .show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">Atlantic POS</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="atlantic_pos_enabled_atlantic_pos"
                                v-model="
                                  form.access_level.atlantic_pos
                                    .enabled_atlantic_pos
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enable Atlantic POS
                              </label>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">Activated Masters</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_activated_users_show_tab"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .activated_users.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Activated Masters
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_activated_users_add"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .activated_users.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_activated_users_update"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .activated_users.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_activated_users_show_message_form"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .activated_users
                                                .show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show message form
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_activated_users_payment_settings"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .activated_users
                                                .payment_settings
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Payment Settings
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">
                                  Atlantic POS + TMChannel
                                </h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_pos_plus_tmchannel_show_tab"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .atlantic_pos_plus_tmchannel
                                                .show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Activated Masters
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_pos_plus_tmchannel_add"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .atlantic_pos_plus_tmchannel.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Add
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Demo Request</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_pos_plus_demo_request_show_tab"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .demo_request.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Demo Request
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_demo_request_export"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .demo_request.export
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Export
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_demo_request_view"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .demo_request.view
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            view
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_demo_request_show_message_form"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .demo_request.show_message_form
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Show Message form
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Support Queries</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_pos_plus_support_queries_show_tab"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .support_queries.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Support Queries
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_support_queries_edit"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .support_queries.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Edit
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">
                                  Atlantic Notification
                                </h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_pos_atlantic_notification_show_tab"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .atlantic_notification.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Atlantic Notification
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_notification_add"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .atlantic_notification.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            New Notification
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-2">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="atlantic_pos_atlantic_notification_edit"
                                            v-model="
                                              form.access_level.atlantic_pos
                                                .atlantic_notification.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Notification Edit
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <h5 class="card-header">SMS</h5>
                          <div class="card-body">
                            <div class="row">
                              <div class="form-group col-md-3">
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="sms_send_sms"
                                    v-model="form.access_level.sms.send_sms"
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                  >
                                    Send SMS
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <h5 class="card-header">Links</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="links_enabled_links_tab"
                                v-model="
                                  form.access_level.links.enabled_links_tab
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enable POS Link
                              </label>
                            </div>
                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">POS Links</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_links_show_tab"
                                            v-model="
                                              form.access_level.links.pos_links
                                                .show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable POS Link
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_links_add"
                                            v-model="
                                              form.access_level.links.pos_links
                                                .add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_links_edit"
                                            v-model="
                                              form.access_level.links.pos_links
                                                .edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            edit
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">POS Demo Links</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_demo_links_show_tab"
                                            v-model="
                                              form.access_level.links
                                                .pos_demo_links.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable POS Demo Link
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_demo_links_add"
                                            v-model="
                                              form.access_level.links
                                                .pos_demo_links.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="links_pos_demo_links_edit"
                                            v-model="
                                              form.access_level.links
                                                .pos_demo_links.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            edit
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <h5 class="card-header">Enquiry</h5>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="enquiry_enabled_enquiry_tab"
                                v-model="
                                  form.access_level.enquiry.enabled_enquiry_tab
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enable Enquiry Tab
                              </label>
                            </div>
                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">Campaign Enquiry</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="enquiry_campaign_enquiry_show_tab"
                                            v-model="
                                              form.access_level.enquiry
                                                .campaign_enquiry.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Campaign Enquiry
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="enquiry_campaign_enquiry_export"
                                            v-model="
                                              form.access_level.enquiry
                                                .campaign_enquiry.export
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Export
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="card">
                                <h5 class="card-header">Quick Enquiry</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="enquiry_quick_enquiry_show_tab"
                                            v-model="
                                              form.access_level.enquiry
                                                .quick_enquiry.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Quick Enquiry
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="enquiry_quick_enquiry_export"
                                            v-model="
                                              form.access_level.enquiry
                                                .quick_enquiry.export
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            export
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="enquiry_quick_enquiry_edit"
                                            v-model="
                                              form.access_level.enquiry
                                                .quick_enquiry.edit
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            edit
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header">Aur Employee</div>
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="aur_employee_enabled_employee_tab"
                                v-model="
                                  form.access_level.aur_employee
                                    .enabled_employee_tab
                                "
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              />
                              <label
                                class="form-check-label"
                                for="defaultCheck1"
                              >
                                Enable Employee Tab
                              </label>
                            </div>

                            <div class="card-body">
                              <div class="card">
                                <h5 class="card-header">Employee</h5>
                                <div class="card-body">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="aur_employee_employee_show_tab"
                                            v-model="
                                              form.access_level.aur_employee
                                                .employee.show_tab
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Enable Employee Tab
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="aur_employee_employee_add"
                                            v-model="
                                              form.access_level.aur_employee
                                                .employee.add
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            add
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="aur_employee_employee_delete"
                                            v-model="
                                              form.access_level.aur_employee
                                                .employee.delete
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            delete
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="aur_employee_employee_update"
                                            v-model="
                                              form.access_level.aur_employee
                                                .employee.update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            update
                                          </label>
                                        </div>
                                      </div>
                                      <div class="form-group col-md-3">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="checkbox"
                                            id="aur_employee_employee_message_credentials_update"
                                            v-model="
                                              form.access_level.aur_employee
                                                .employee
                                                .message_credentials_update
                                            "
                                            name="checkbox-1"
                                            value="1"
                                            unchecked-value="0"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="defaultCheck1"
                                          >
                                            Message Credentials Update
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
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
                  class="btn btn-primary"
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
        id="SmsInfoModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Update SMS Info
              </h5>
              <button type="button" class="close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="username" class="control-label"
                        >Username:</label
                      >
                      <input
                        v-model="smsInfoForm.username"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        class="form-control"
                        :class="{
                          'is-invalid': smsInfoForm.errors.has('username'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="form.errors.has('username')"
                        v-html="form.errors.get('username')"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="api_key" class="control-label"
                        >Api Key:</label
                      >
                      <input
                        v-model="smsInfoForm.api_key"
                        type="text"
                        name="api_key"
                        id="api_key"
                        placeholder="Enter api key"
                        class="form-control"
                        :class="{
                          'is-invalid': smsInfoForm.errors.has('api_key'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('api_key')"
                        v-html="smsInfoForm.errors.get('api_key')"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="sender_id" class="control-label"
                        >Sender Id:</label
                      >
                      <input
                        v-model="smsInfoForm.sender_id"
                        type="text"
                        name="sender_id"
                        id="sender_id"
                        placeholder="Enter sender id"
                        class="form-control"
                        :class="{
                          'is-invalid': smsInfoForm.errors.has('sender_id'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('sender_id')"
                        v-html="smsInfoForm.errors.get('sender_id')"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="total_sms" class="control-label"
                        >Total SMS:</label
                      >
                      <input
                        v-model="smsInfoForm.total_sms"
                        type="text"
                        name="total_sms"
                        id="total_sms"
                        placeholder="Total SMS"
                        class="form-control"
                        :class="{
                          'is-invalid': smsInfoForm.errors.has('total_sms'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('total_sms')"
                        v-html="smsInfoForm.errors.get('total_sms')"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="total_used_sms" class="control-label"
                        >Total Used SMS:</label
                      >
                      <input
                        v-model="smsInfoForm.total_used_sms"
                        type="text"
                        name="total_used_sms"
                        id="total_used_sms"
                        placeholder="Total Used SMS"
                        class="form-control"
                        :class="{
                          'is-invalid':
                            smsInfoForm.errors.has('total_used_sms'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('total_used_sms')"
                        v-html="smsInfoForm.errors.get('total_used_sms')"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="total_left_sms" class="control-label"
                        >Total Left SMS:</label
                      >
                      <input
                        v-model="smsInfoForm.total_left_sms"
                        type="text"
                        name="total_left_sms"
                        id="total_left_sms"
                        placeholder="Total Left SMS"
                        class="form-control"
                        :class="{
                          'is-invalid':
                            smsInfoForm.errors.has('total_left_sms'),
                        }"
                      />

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('total_left_sms')"
                        v-html="smsInfoForm.errors.get('total_left_sms')"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="api_flag">Select API</label>
                      <select
                        class="form-control"
                        name="api_flag"
                        id="api_flag"
                        v-model="smsInfoForm.api_flag"
                        :class="{
                          'is-invalid': smsInfoForm.errors.has('api_flag'),
                        }"
                      >
                        <option value="">Select SMS API</option>
                        <option value="0">Nagpur</option>
                        <option value="1">SMS Horizon</option>
                      </select>

                      <div
                        class="text-danger"
                        v-if="smsInfoForm.errors.has('api_flag')"
                        v-html="smsInfoForm.errors.get('api_flag')"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="is_active">Is Active:</label>
                      <div class="custom-control custom-switch">
                        <input
                          type="checkbox"
                          v-model="smsInfoForm.is_active"
                          name="is_active"
                          class="custom-control-input"
                          id="is_active"
                        />
                        <label
                          class="custom-control-label"
                          for="is_active"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4"></div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"></div>
                  <div class="col-md-4"></div>
                </div>
              </div>
            </form>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
              >
                Close
              </button>
              <button
                type="button"
                v-if="editmodeSMSInfo"
                @click="updateSMSInfo()"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      access_level: {},
      // users empty array
      editmodeSMSInfo: false,
      editmode: false,
      SmsInfoModal: false,
      users: {},
      // Create a new form instance

      form: new Form({
        id: "",
        name: "",
        email: "",
        contact_no: "",
        password: "",
        type: "admin",
        bio: "",
        photo: "",
        access_level: {
          dashboard: "0",
          feedback: "0",
          backup_links: "0",
          backup: "0",
          profile: "0",
          pos_offline_registration: {
            pos_offline_registration_tab: "0",
            pos_registration: {
              show_tab: "0",
              add: "0",
              update: "0",
              export: "0",
              message_credentials_update: "0",
              show_message_form: "0",
              pos_activation_update: "0",
              show_user_log_details: "0",
            },
            captain_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0",
            },
            kitchen_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0",
            },
          },
          pos_offline_activation: {
            pos_offline_activation_tab: "0",
            pos_activation_keys: {
              show_tab: "0",
              generate_new_key: "0",
              edit: "0",
              show_message_form: "0",
              copy_option: "0",
            },
            captain_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0",
            },
            kitchen_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0",
            },
          },
          promocode_offline: {
            enabled_promocode_offline_tab: "0",
            promocode_pos: {
              show_tab: "0",
              add: "0",
              edit: "0",
              delete: "0",
            },
            promocode_history: "0",
          },
          pos_plan_and_payment: {
            enabled_pos_plan: "0",
            plan: "0",
            payment: "0",
          },
          tmchannel: {
            enabled_tmchannel: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
            },
          },
          atlantic_pos: {
            enabled_atlantic_pos: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
              payment_settings: "0",
            },
            atlantic_pos_plus_tmchannel: {
              add: "0",
              show_tab: "0",
            },
            demo_request: {
              show_tab: "0",
              view: "0",
              show_message_form: "0",
              export: "0",
            },
            support_queries: {
              show_tab: "0",
              edit: "0",
            },
            atlantic_notification: {
              show_tab: "0",
              add: "0",
              edit: "0",
            },
          },
          sms: {
            send_sms: "0",
          },
          links: {
            enabled_links_tab: "0",
            pos_links: {
              show_tab: "0",
              edit: "0",
              add: "0",
            },
            pos_demo_links: {
              show_tab: "0",
              edit: "0",
              add: "0",
            },
          },
          enquiry: {
            enabled_enquiry_tab: "0",
            campaign_enquiry: {
              show_tab: "0",
              export: "0",
            },
            quick_enquiry: {
              show_tab: "0",
              export: "0",
              edit: "0",
            },
          },
          aur_employee: {
            enabled_employee_tab: "0",
            employee: {
              show_tab: "0",
              add: "0",
              delete: "0",
              update: "0",
              message_credentials_update: "0",
            },
          },
        },
      }),
      smsInfoForm: new Form({
        id: "",
        username: "",
        api_key: "",
        sender_id: "",
        api_flag: "",
        author_name: "",
        total_sms: 0,
        total_used_sms: 0,
        total_left_sms: 0,
        is_active: true,
        user_id: "",
      }),
      search: "",
    };
  },
  methods: {
    newModal() {
      this.editmode = false;
      this.form.reset();
      $("#newModal").modal("show");
    },
    editModal(user) {
      this.editmode = true;
      if (user.access_level === null) {
        user.access_level = {
          dashboard: "0",
          feedback: "0",
          backup_links: "0",
          backup: "0",
          profile: "0",
          pos_offline_registration: {
            pos_offline_registration_tab: "0",
            pos_registration: {
              show_tab: "0",
              add: "0",
              update: "0",
              export: "0",
              message_credentials_update: "0",
              show_message_form: "0",
              pos_activation_update: "0",
              show_user_log_details: "0",
            },
            captain_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0",
            },
            kitchen_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0",
            },
          },
          pos_offline_activation: {
            pos_offline_activation_tab: "0",
            pos_activation_keys: {
              show_tab: "0",
              generate_new_key: "0",
              edit: "0",
              show_message_form: "0",
              copy_option: "0",
            },
            captain_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0",
            },
            kitchen_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0",
            },
          },
          promocode_offline: {
            enabled_promocode_offline_tab: "0",
            promocode_pos: {
              show_tab: "0",
              add: "0",
              edit: "0",
              delete: "0",
            },
            promocode_history: "0",
          },
          pos_plan_and_payment: {
            enabled_pos_plan: "0",
            plan: "0",
            payment: "0",
          },
          tmchannel: {
            enabled_tmchannel: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
            },
          },
          atlantic_pos: {
            enabled_atlantic_pos: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
              payment_settings: "0",
            },
            atlantic_pos_plus_tmchannel: {
              add: "0",
              show_tab: "0",
            },
            demo_request: {
              show_tab: "0",
              view: "0",
              show_message_form: "0",
              export: "0",
            },
            support_queries: {
              show_tab: "0",
              edit: "0",
            },
          },
          sms: {
            send_sms: "0",
          },
          links: {
            enabled_links_tab: "0",
            pos_links: {
              show_tab: "0",
              edit: "0",
              add: "0",
            },
            pos_demo_links: {
              show_tab: "0",
              edit: "0",
              add: "0",
            },
          },
          enquiry: {
            enabled_enquiry_tab: "0",
            campaign_enquiry: {
              show_tab: "0",
              export: "0",
            },
            quick_enquiry: {
              show_tab: "0",
              export: "0",
              edit: "0",
            },
          },
          aur_employee: {
            enabled_employee_tab: "0",
            employee: {
              show_tab: "0",
              add: "0",
              delete: "0",
              update: "0",
              message_credentials_update: "0",
            },
          },
        };
      } else {
        // console.log(user);
        if (
          !user.access_level.atlantic_pos.hasOwnProperty(
            "atlantic_notification"
          )
        ) {
          user.access_level.atlantic_pos.atlantic_notification = {
            show_tab: "0",
            add: "0",
            edit: "0",
          };
        }
      }
      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);
    },
    loadUsers() {
      axios.get("api/user").then((response) => {
        this.users = response.data;
        toast.fire({
          icon: "success",
          title: "Users load successfully",
        });
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      axios.get(`api/user?page=${page}`).then((response) => {
        this.users = response.data;
      });
    },
    searchUser() {
      axios
        .get("api/findUser?q=" + this.search)
        .then((data) => {
          this.users = data.data;
        })
        .catch(() => {});
    },
    createUser() {
      // Submit the form via a POST request

      this.form
        .post("api/user")
        .then(({ data }) => {
          $("#newModal").modal("hide");
          toast.fire({
            icon: "success",
            title: "User Created successfully",
          });
          this.loadUsers();
        })
        .catch(() => {});
    },
    updateUser() {
      // console.log('Editing data');
      this.form
        .put("api/user/" + this.form.id)
        .then(() => {
          // success
          $("#newModal").modal("hide");
          this.loadUsers();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    deleteUser(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        // send ajax request to server
        if (result.value) {
          this.form
            .delete("api/user/" + id)
            .then(() => {
              this.loadUsers();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            })
            .catch((e) => {
              // console.log(e);
              Swal.fire("Failed!", "Somewent wrong.", "success");
            });
        }
      });
    },
    SMSModal(user) {
      this.SmsInfoModal = true;
      this.editmodeSMSInfo = true;
      this.smsInfoForm.user_id = user.id;
      $("#SmsInfoModal").modal("show");
    },
    createSMSInfo() {},
    updateSMSInfo() {
      console.log(this.smsInfoForm);
      this.smsInfoForm
        .put("api/sms-getway/" + this.smsInfoForm.user_id)
        .then(() => {
          // success
          $("#newModal").modal("hide");
          this.loadUsers();
          Swal.fire("Good job!", "Info has been updated !", "success");
        })
        .catch(() => {});
    },
    closeModal() {
      $("#newModal").modal("hide");
      $("#SmsInfoModal").modal("hide");
    },
  },
  mounted() {
    this.loadUsers();
    this.access_level = window.gate.user.access_level.aur_employee.employee;
  },
};
</script>
