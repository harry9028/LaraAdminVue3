<template>
 <div class="content-wrapper">
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMPOS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMPOS</a></li>
              <li class="breadcrumb-item active">Enquiry</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                    <div class="col-md-10">
                        <h3 class="card-title">Enquiry</h3>
                    </div>
                    <div class="col-md-2">
                          <button type="button" class="btn btn-outline-secondary pull-right" v-if="access_level.export==1" @click="Export">Export <i class="fas fa-cloud-download-alt"></i></button>
                    </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div style="overflow-x: auto" class="card-body p-0 table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Hotel Name</th>
                      <th>Mobile</th>
                      <!-- <th>Email</th> -->
                      <th>City</th>
                      <!-- <th>Address</th> -->
                      <th>Date</th>
                      <th>No.of times</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in EnquiryLIst.data" :key="user.id">
                        <td>{{EnquiryLIst.from + index}}</td>
                        <td>{{user.owner_name|upText}}</td>
                        <td>{{user.hotel_name|upText}}</td>
                        <td>{{user.mobile}}</td>
                        <!-- <td>{{user.email}}</td> -->
                        <td>{{user.city|upText}}</td>
                        <!-- <td>{{user.address }}</td> -->
                        <td>{{user.date_time|myDate2}}</td>
                        <td>
                            {{user.enquiry_count}}
                        </td>
                        <td>
                           <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button" class="btn btn-secondary" v-if="access_level.view==1" @click="viewModal(user)"><i class="fas fa-eye"></i></button>
                             <button type="button" class="btn btn-secondary" v-if="access_level.show_message_form==1" @click="messageModel(user)"><i class="fas fa-paper-plane"></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr v-show="!EnquiryLIst.data.length">
                        <td colspan="9">No data found</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="overlay" v-if="isLoad">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
              </div>
              <div class="card-footer clearfix">
                  <pagination :data="EnquiryLIst" @pagination-change-page="getResults" :limit="5" :show-disabled="true">
                    <span slot="prev-nav"><i class="fas fa-caret-left"></i></span>
	                <span slot="next-nav"><i class="fas fa-caret-right"></i></span>
                  </pagination>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="addNewTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!editmode" id="addNewLabel">View</h5>
                <h5 class="modal-title" v-show="editmode" id="addNewLabel">Update Info</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                            <label for="mobile">Tracking Id:</label>
                            <input v-model="form.mobile" type="text" name="mobile" placeholder="Enter mobile" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('mobile') }" :disabled="editmode">
                            <has-error :form="form" field="mobile"></has-error>
                      </div>
                    
                      <div class="col-md-4">
                        <div class="form-group">
                            <label for="owner_name">Owner Name:</label>
                            <input v-model="form.owner_name" type="text" name="owner_name" placeholder="Enter owner name" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('owner_name') }">
                            <has-error :form="form" field="owner_name"></has-error>
                        </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                            <label for="hotel_name">Hotel Name:</label>
                            <input v-model="form.hotel_name" type="text" name="hotel_name" placeholder="Enter hotel name" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('hotel_name') }">
                            <has-error :form="form" field="hotel_name"></has-error>
                          </div>
                      </div>
                    </div>
                    <div class="row">
                     
                    
                      <div class="col-md-4">
                        <div class="form-group">
                            <label for="city">City:</label>
                            <input v-model="form.city" type="text" name="city" placeholder="Enter city" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('city') }">
                            <has-error :form="form" field="city"></has-error>
                        </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                            <label for="email">Email:</label>
                            <input v-model="form.email" type="text" name="email" placeholder="Enter email" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>
                          </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                            <label for="enquiry_count">No.of times:</label>
                            <input v-model="form.enquiry_count" type="text" name="enquiry_count" placeholder="Enter enquiry count" 
                              class="form-control" :class="{ 'is-invalid': form.errors.has('enquiry_count') }">
                            <has-error :form="form" field="enquiry_count"></has-error>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                            <label for="address">Address:</label>
                            <textarea v-model="form.address" name="address" placeholder="Enter address" class="form-control" :class="{ 'is-invalid': form.errors.has('address') }"></textarea>
                            <has-error :form="form" field="address"></has-error>
                      </div>
                      <div class="col-md-6">
                            <label for="message">Message:</label>
                            <textarea v-model="form.message" name="message" placeholder="Enter message" class="form-control" :class="{ 'is-invalid': form.errors.has('message') }"></textarea>
                            <has-error :form="form" field="message"></has-error>
                      </div>
                    
                      
                      
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal fade" id="ImportExportModal" tabindex="-1" role="dialog" aria-labelledby="ImportExportModal" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" v-show="!ImportExport" id="addNewLabel">Export</h5>
                <h5 class="modal-title" v-show="ImportExport" id="addNewLabel">Import</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form @submit.prevent="ImportExport ? importUser() : exportUser()">
                <div class="modal-body">

                  
                  <div class="form-group" v-show="!ImportExport">
                   
                    <select class="form-control" id="sel1" v-model="exportForm.exportType" name="exportType" :class="{ 'is-invalid': exportForm.errors.has('exportType') }">
                      <option value="">Export Type</option>
                      <option value="xlsx">xlsx</option>
                      <option value="xls">xls</option>
                      <option value="csv">csv</option>
                      <option value="pdf">pdf</option>
                      <option value="ods">ods</option>
                      <option value="tsv">tsv</option>
                      <option value="html">html</option>

                    </select>
                    <has-error :form="exportForm" field="exportType"></has-error>
                  </div>
                  <div class="form-group" v-show="!ImportExport" >
                     <VueCtkDateTimePicker v-model="exportForm.dateRange" :range="true" :onlyDate="true" :inline="false" :noLabel="false" :error="exportForm.errors.has('dateRange')"/>
                     <has-error :form="exportForm" field="dateRange"></has-error>
                   </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary" v-show="!ImportExport">Export</button>
                  <button type="submit" class="btn btn-primary" v-show="ImportExport">Import</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <common-form v-bind:item="smsForm"></common-form>

      </div><!-- /.container-fluid -->
    </section>
   
  </div>
   
</template>

<script>
    export default {
      data () {
            return {             
              // users empty array
              ImportExports: false,
              ImportExport:false,
              editmode: false,
              EnquiryLIst : {data:[]},
              isLoad: false,
              page: 1,
              form: new Form({
                id:"",
                mobile: "",
                owner_name: "",
                hotel_name: "",
                address: "",
                city: "",
                email: "",
                message: "",
                enquiry_count:"",
                date_time: "",
              }),
              exportForm: new Form({
                exportType: '',
                dateRange:'',
              }),
              smsForm: new Form({
                  api_flag:"",
                  mobile:"",
                  smsText:"",
                }),
              access_level:{}
            }
        },
        methods: {
            messageModel(user){
                this.smsForm.mobile   = user.mobile;
                Fire.$emit('openSendSMSModal');
            },
            loadEnquiry(){
              if(this.$gate.isSuperAdminOrAdmin()){
                this.$Progress.start();
                this.isLoad = true;
                axios.get("api/tmpos-enquiry").then((response) => {
                  this.EnquiryLIst = response.data;
                  this.isLoad = false;
                  this.$Progress.finish();
                });
              }
              
            },
            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
              this.page = page;
              this.isLoad = true;
              axios.get('api/tmpos-enquiry?q='+this.$parent.search+'&page=' + page).then(response => {
                      this.EnquiryLIst = response.data;
                      this.isLoad = false;
              });
            },
            viewModal(user){
                this.form.fill(user);
                $('#newModal').modal('show');
            },
            Export(){
                this.ImportExport = false;
                $('#ImportExportModal').modal('show');
            },
            exportUser(e){ 
                this.exportForm.post('/enquiry-export').then(({ data }) => { 
                    var url = "enquiry-export?" + $.param(this.exportForm); 
                    window.location = url;
                    $('#ImportExportModal').modal('hide');
                })
            },
        },
        mounted() {
          this.loadEnquiry();
          Fire.$on('searching',() => {
              this.getResults();
          })
          this.access_level = window.gate.user.access_level.atlantic_pos.demo_request;
        // console.log(this.access_level);
        }
    };
</script>
<style scoped>

</style>