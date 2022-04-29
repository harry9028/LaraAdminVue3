<template>
 <div class="content-wrapper">
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Feedback</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item active"><a href="#">Feedback</a></li>
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
                <h3 class="card-title">Feedback</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Msg</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in FeedbackList.data" :key="user.id">
                          <td>{{user.id}}</td>
                          <td>{{user.category}}</td>
                          <td>{{user.name }}</td>
                          <td>{{user.mobile}}</td>
                          <td>{{user.email}}</td>
                          <td>{{user.type_software }}</td>
                          <td>{{user.msg}}</td>
                          <td>{{user.date | myDate}}</td>
                          <td>
                              <!-- <button type="button" class="btn btn-primary" @click="editModal(user)">Edit <i class="fas fa-user-edit"></i></button>
                              <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">Delete <i class="fas fa-trash"></i></button> -->
                          </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer clearfix">
                <pagination :data="FeedbackList" @pagination-change-page="getResults" :limit="8" :show-disabled="true">
                  <span slot="prev-nav"><i class="fas fa-caret-left"></i></span>
	                <span slot="next-nav"><i class="fas fa-caret-right"></i></span>
                </pagination>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

      </div><!-- /.container-fluid -->
    </section>
   
  </div>
   
</template>

<script>
    export default {
      data () {
            return {             
              // users empty array
              editmode: false,
              FeedbackList : {},
            }
        },
        methods: {
            loadEnquiry(){
              if(this.$gate.isSuperAdminOrAdmin()){

                this.$Progress.start()
                axios.get("api/feedback").then(({ data }) => (this.FeedbackList = data));
                this.$Progress.finish()
              }
              
            },
            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
               axios.get('api/feedback?page=' + page)
                        .then(response => {
                            this.FeedbackList = response.data;
                    });
            },
        },
        mounted() {
          this.loadEnquiry();
        }
    };
</script>
