<template>
 <div class="content-wrapper">
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>TMChannel</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">TMChannel</a></li>
              <li class="breadcrumb-item active">Registration</li>
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
                  <h3 class="card-title">TMChannel Order</h3>
                  <div class="card-tools">
                    <pagination :data="ChannelOrders" @pagination-change-page="getResults" :limit="5" :show-disabled="true">
                        <span slot="prev-nav"><i class="fas fa-caret-left"></i></span>
                        <span slot="next-nav"><i class="fas fa-caret-right"></i></span>
                    </pagination>
                  </div>                  
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>JSON</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in ChannelOrders.data" :key="order.id">
                          <td>{{order.id}}</td>
                          <td>{{order.json_data}}</td>
                      </tr>
                      <tr v-show="!ChannelOrders.data.length">
                         <td colspan="5">No data found</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="overlay dark" v-if="isLoad">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
              </div>
              <div class="card-footer clearfix">
                  <pagination :data="ChannelOrders" @pagination-change-page="getResults" :limit="5" :show-disabled="true">
                    <span slot="prev-nav"><i class="fas fa-caret-left"></i></span>
	                  <span slot="next-nav"><i class="fas fa-caret-right"></i></span>
                  </pagination>
              </div>
            
            </div>
            
          </div>
        </div>
      </div>
   
    </section>
   

  </div>
   
</template>

<script>
    export default {
        data () {
            return {             
                // ChannelOrders empty array
                editmode: false,
                ChannelOrders : {data:[]},
                page:1,
                isLoad:false,
                access_level:{}
            }
        },
        methods: {
           
            loadChannelOrders(){
              if(this.$gate.isSuperAdminOrAdmin()){
                this.isLoad=true;
                this.$Progress.start()
                axios.get('api/tmchannel-orders').then((response)=>{
                  this.ChannelOrders = response.data;
                  this.isLoad=false;
                  this.$Progress.finish()
                });
              }
              
            },
           
            getResults(page = 1) {
              this.page = page;
              this.isLoad=true;
               axios.get('api/tmchannel-orders?page=' + page)
                        .then(response => {
                            this.ChannelOrders = response.data;
                            this.isLoad=false;
                    });
            },
            
        },
        mounted() {
            this.loadChannelOrders();
            Fire.$on('AfterCreateUser', ()=> {
              this.loadChannelOrders();
            });
            Fire.$on('searching',() => {
               let query = this.$parent.search;
               this.searchUser(query);
            })
            this.access_level = window.gate.user.access_level.tmchannel.activated_ChannelOrders;
            // console.log(this.access_level);
        }
    };
</script>
