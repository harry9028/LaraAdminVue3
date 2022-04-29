<template>
 <div class="content-wrapper">
     <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>SMS</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">SMS</a></li>
              <li class="breadcrumb-item active">Send</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-12">
            <div class="card card-default">
              <div class="card-header">
                <h3 class="card-title">SMS Form</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="sendSMS" @keydown="form.onKeydown($event)">
                <div class="card-body">
                  <div class="form-group">
                      <select v-model="form.api_flag" name="api_flag" placeholder="api_flag Number"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('api_flag') }">

                          <option value="">Select API</option>
                          <option value="0">Nagpur SMS</option>
                          <option value="1">SMS Horizon</option>
                          <option value="3">Pinnacle SMS</option>
                      </select>
                      <has-error :form="form" field="api_flag"></has-error>
                  </div>
                  <div class="form-group">
                    <input v-model="form.mobile" type="text" name="mobile" placeholder="Mobile Number"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('mobile') }">
                    <has-error :form="form" field="mobile"></has-error>
                  </div>
                  <div class="form-group">
                      <textarea class="form-control" v-model="form.smsText" @keyup='charCount()' name="smsText" :class="{ 'is-invalid': form.errors.has('smsText') }" placeholder="Text Message:"></textarea>
                      <has-error :form="form" field="smsText"></has-error>
                      <span class="pull-left">{{ totalcharacter }} Total characters</span> <span style="float:right;"> Msg Length: {{msgLength}}</span>
                  </div>
                  
                
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary"><i class="fab fa-telegram-plane"></i> Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div><!-- /.container-fluid -->
    </section>
   
  </div>
   
</template>

<script>
import { 
  HasError,
  AlertError,
  AlertErrors, 
  AlertSuccess
} from 'vform'
    export default {
        data() {
            return {
              form: new Form({
                api_flag:'',
                mobile: '',
                smsText: ''
              }),
              totalcharacter: 0,
              msgLength:0,
              
            };
        },
         methods: {
          sendSMS () {   
                this.$Progress.start()
                this.form.post('api/sms-send')
                    .then(({ data }) => { 
                        Swal.fire(
                          'Successfully sent sms!',
                          '',
                          'success'
                        )
                        this.$Progress.finish();
                        this.form.reset();
                        this.charCount();

                    })
                    .catch(error =>{
                         console.log(error.response)
                        Swal.fire(
                          error.response.data.message,
                          error.response.statusText,
                          'error'
                        )
                        this.$Progress.fail();
                    })
          },
          charCount: function(){
            this.totalcharacter = this.form.smsText.length;
            this.msgLength = Math.ceil(this.form.smsText.length / 160);

          }
          
        },
        mounted() {
            console.log('send sms mounted.')
        }
    };
</script>
