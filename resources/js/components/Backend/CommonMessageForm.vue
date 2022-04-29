<template>
  <div class="container">
    <div
      class="modal fade"
      id="smsFormModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="smsFormModal">Message Form</h5>
            <button type="button" class="close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="sendSMS">
            <div class="modal-body">
              <div class="form-group">
                <label for="mobile">Select SMS API:</label>
                <select
                  v-model="item.api_flag"
                  name="api_flag"
                  placeholder="api_flag Number"
                  class="form-control"
                  :class="{ 'is-invalid': item.errors.has('api_flag') }"
                >
                  <option value="">Select SMS API</option>
                  <option value="0">Nagpur SMS</option>
                  <option value="1">SMS Horizon</option>
                  <option value="3">Pinnacle SMS</option>
                </select>

                <div
                  v-if="item.errors.has('api_flag')"
                  v-html="item.errors.get('api_flag')"
                />
              </div>
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Mobile"
                  v-model="item.mobile"
                  :class="{ 'is-invalid': item.errors.has('mobile') }"
                  name="mobile"
                  id="mobile"
                />
                <div
                  v-if="item.errors.has('mobile')"
                  v-html="item.errors.get('mobile')"
                />
              </div>
              <div class="form-group">
                <label for="messageText">Message:</label>
                <textarea
                  class="form-control"
                  name="smsText"
                  @keyup="charCount()"
                  :class="{ 'is-invalid': item.errors.has('smsText') }"
                  placeholder="Your message"
                  v-model="item.smsText"
                  id="smsText"
                >
                </textarea>

                <div
                  v-if="item.errors.has('smsText')"
                  v-html="item.errors.get('smsText')"
                />
                <span class="pull-left"
                  >{{ totalcharacter }} Total characters</span
                >
                <span style="float: right"> Msg Length: {{ msgLength }}</span>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">
                <i class="fab fa-telegram-plane"></i> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      totalcharacter: 0,
      msgLength: 0,
    };
  },
  methods: {
    sendSMS() {
      this.item
        .post("api/sms-send")
        .then(({ data }) => {
          $("#smsFormModal").modal("hide");
          Swal.fire("Successfully sent sms!", "", "success");

          this.item.reset();
          this.charCount();
        })
        .catch((error) => {
          $("#smsFormModal").modal("hide");
          Swal.fire(
            error.response.data.message,
            error.response.statusText,
            "error"
          );
        });
    },
    close() {
      $("#smsFormModal").modal("hide");
    },
    charCount: function () {
      this.totalcharacter = this.item.smsText.length;
      this.msgLength = Math.ceil(this.item.smsText.length / 160);
    },
  },
  mounted() {
    // Fire.$on('openSendSMSModal', ()=> {
    //     $('#smsFormModal').modal('show');
    // });
  },
};
</script>