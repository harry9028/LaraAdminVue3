<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Dashboard</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div
        class="container-fluid"
        v-if="
          access_level.pos_offline_registration.pos_registration.show_tab ==
            1 ||
          access_level.pos_offline_activation.pos_activation_keys.show_tab ==
            1 ||
          access_level.feedback == 1 ||
          access_level.pos_offline_registration.captain_app.show_tab == 1 ||
          access_level.pos_offline_activation.captain_app.show_tab == 1 ||
          access_level.pos_offline_registration.kitchen_app.show_tab == 1 ||
          access_level.pos_offline_activation.kitchen_app.show_tab == 1 ||
          access_level.tmchannel.activated_users.show_tab == 1 ||
          access_level.enquiry.campaign_enquiry.show_tab == 1 ||
          access_level.enquiry.quick_enquiry.show_tab == 1
        "
      >
        <h5
          class="mb-2"
          v-if="
            access_level.pos_offline_registration.pos_registration.show_tab ==
              1 ||
            access_level.pos_offline_activation.pos_activation_keys.show_tab ==
              1 ||
            access_level.feedback == 1
          "
        >
          Desktop POS (Offline)
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="
              access_level.pos_offline_registration.pos_registration.show_tab ==
              1
            "
          >
            <router-link
              to="tmbill-users"
              :event="pos_registration ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!pos_registration">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-user-check"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Registration</span>
                  <span class="info-box-number">{{ pos_registration }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="
              access_level.pos_offline_activation.pos_activation_keys
                .show_tab == 1
            "
          >
            <router-link
              to="tmbill-product"
              :event="pos_activation ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!pos_activation">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-success"
                  ><i class="fas fa-user-shield"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activation</span>
                  <span class="info-box-number">{{ pos_activation }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.feedback == 1"
          >
            <router-link to="feedback" :event="pos_feedback ? 'click' : ''">
              <div class="info-box">
                <div class="overlay dark" v-show="!pos_feedback">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-warning"
                  ><i class="fas fa-comments"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Feedbacks</span>
                  <span class="info-box-number">{{ pos_feedback }}</span>
                </div>
              </div>
            </router-link>
          </div>
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.feedback == 1"
          >
            <router-link to="feedback" :event="pos_history ? 'click' : ''">
              <div class="info-box">
                <div class="overlay dark" v-show="!pos_history">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-danger"
                  ><i class="fas fa-history"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">History</span>
                  <span class="info-box-number">{{ pos_history }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <h5
          class="mb-2"
          v-if="
            access_level.pos_offline_registration.captain_app.show_tab == 1 ||
            access_level.pos_offline_activation.captain_app.show_tab == 1
          "
        >
          Captain App (Offline)
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="
              access_level.pos_offline_registration.captain_app.show_tab == 1
            "
          >
            <router-link
              to="tmbill-app-users"
              :event="captain_app_registration ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!captain_app_registration">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-user-check"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Registration</span>
                  <span class="info-box-number">{{
                    captain_app_registration
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.pos_offline_activation.captain_app.show_tab == 1"
          >
            <router-link
              to="app-activation"
              :event="captain_app_activation ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!captain_app_activation">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-success"
                  ><i class="fas fa-user-shield"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activation</span>
                  <span class="info-box-number">{{
                    captain_app_activation
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.pos_offline_activation.captain_app.show_tab == 1"
          >
            <router-link
              to="app-activation"
              :event="captain_app_trial ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!captain_app_trial">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-warning"
                  ><i class="fas fa-mobile-alt"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Trial</span>
                  <span class="info-box-number">{{ captain_app_trial }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-md-3 col-sm-6 col-12" v-if="show_admin_only == 1">
            <router-link
              to="device-info"
              :event="captain_app_history ? '' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!captain_app_history">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-danger"
                  ><i class="fas fa-history"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">History</span>
                  <span class="info-box-number">{{ captain_app_history }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <h5
          class="mb-2"
          v-if="
            access_level.pos_offline_registration.kitchen_app.show_tab == 1 ||
            access_level.pos_offline_activation.kitchen_app.show_tab == 1
          "
        >
          Kitchen APP (Offline)
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="
              access_level.pos_offline_registration.kitchen_app.show_tab == 1
            "
          >
            <router-link
              to="tmbill-kitchen-app"
              :event="kitchen_app_registration ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!kitchen_app_registration">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-user-check"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Registration</span>
                  <span class="info-box-number">{{
                    kitchen_app_registration
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.pos_offline_activation.kitchen_app.show_tab == 1"
          >
            <router-link
              to="kitchen-app-activation"
              :event="kitchen_app_activation ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!kitchen_app_activation">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-success"
                  ><i class="fas fa-user-shield"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activation</span>
                  <span class="info-box-number">{{
                    kitchen_app_activation
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.pos_offline_activation.kitchen_app.show_tab == 1"
          >
            <router-link
              to="kitchen-app-activation"
              :event="kitchen_app_trial ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!kitchen_app_trial">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-warning"
                  ><i class="fas fa-mobile-alt"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Trial</span>
                  <span class="info-box-number">{{ kitchen_app_trial }}</span>
                </div>
                <!-- /.info-box-content -->
              </div>
            </router-link>
          </div>

          <div class="col-md-3 col-sm-6 col-12" v-if="show_admin_only == 1">
            <router-link
              to="kitchen-app-device-info"
              :event="kitchen_app_history ? '' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!kitchen_app_history">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-danger"
                  ><i class="fas fa-history"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">History</span>
                  <span class="info-box-number">{{ kitchen_app_history }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <h5
          class="mb-2"
          v-if="
            access_level.atlantic_pos.activated_users.show_tab == 1 ||
            access_level.atlantic_pos.demo_request.show_tab == 1
          "
        >
          Atlantic POS (Desktop & Mobile)
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.atlantic_pos.activated_users.show_tab == 1"
          >
            <router-link
              to="tmpos-registrations"
              :event="tmpos_cloud_registration ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!tmpos_cloud_registration">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-user-check"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activated Master Users</span>
                  <span class="info-box-number">{{
                    tmpos_cloud_registration
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.atlantic_pos.activated_users.show_tab == 1"
          >
            <router-link
              to="activated-outlets"
              :event="tmpos_total_outlets ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!tmpos_total_outlets">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-utensils"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activated Outlets</span>
                  <span class="info-box-number">{{ tmpos_total_outlets }}</span>
                </div>
              </div>
            </router-link>
          </div>
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.atlantic_pos.demo_request.show_tab == 1"
          >
            <router-link
              to="tmpos-enquiry"
              :event="tmpos_cloud_activation ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!tmpos_cloud_activation">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-success"
                  ><i class="fas fa-user-shield"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Demo Request</span>
                  <span class="info-box-number">{{
                    tmpos_cloud_activation
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <h5
          class="mb-2"
          v-if="access_level.tmchannel.activated_users.show_tab == 1"
        >
          TMChannel
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.tmchannel.activated_users.show_tab == 1"
          >
            <router-link
              to="tmchannel-registrations"
              :event="tmchannel_registration ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!tmchannel_registration">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-user-check"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Activated Users</span>
                  <span class="info-box-number">{{
                    tmchannel_registration
                  }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <h5
          class="mb-2"
          v-if="
            access_level.enquiry.campaign_enquiry.show_tab == 1 ||
            access_level.enquiry.quick_enquiry.show_tab == 1
          "
        >
          Enquiry
        </h5>
        <div class="row">
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.enquiry.campaign_enquiry.show_tab == 1"
          >
            <router-link
              to="campaign-enquiry"
              :event="campaign_enquiry ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!campaign_enquiry">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-users"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Campaign Enquiry</span>
                  <span class="info-box-number">{{ campaign_enquiry }}</span>
                </div>
              </div>
            </router-link>
          </div>
          <div
            class="col-md-3 col-sm-6 col-12"
            v-if="access_level.enquiry.quick_enquiry.show_tab == 1"
          >
            <router-link
              to="quick-enquiry"
              :event="quick_enquiry ? 'click' : ''"
            >
              <div class="info-box">
                <div class="overlay dark" v-show="!quick_enquiry">
                  <i class="fas fa-sync-alt fa-spin"></i>
                </div>
                <span class="info-box-icon bg-info"
                  ><i class="fas fa-users"></i
                ></span>
                <div class="info-box-content">
                  <span class="info-box-text">Quick Enquiry</span>
                  <span class="info-box-number">{{ quick_enquiry }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container-fluid" v-else>
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Unauthorised Access</h4>
          <hr />
          <p>Please contact to your administrator</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pos_registration: 0,
      pos_activation: 0,
      pos_feedback: 0,
      pos_history: 0,

      captain_app_registration: 0,
      captain_app_activation: 0,
      captain_app_trial: 0,
      captain_app_history: 0,

      kitchen_app_registration: 0,
      kitchen_app_activation: 0,
      kitchen_app_trial: 0,
      kitchen_app_history: 0,

      tmpos_cloud_registration: 0,
      tmpos_cloud_activation: 0,

      tmchannel_registration: 0,

      campaign_enquiry: 0,
      quick_enquiry: 0,
      tmpos_total_outlets: 0,
      show_admin_only: 0,
      access_level: {
        feedback: 0,
        backup: 0,
        profile: 0,
        pos_offline_registration: {
          pos_offline_registration_tab: 0,
          pos_registration: {
            show_tab: 0,
          },
          captain_app: {
            show_tab: 0,
          },
          kitchen_app: {
            show_tab: 0,
          },
        },
        pos_offline_activation: {
          pos_offline_activation_tab: 0,
          pos_activation_keys: {
            show_tab: 0,
          },
          captain_app: {
            show_tab: 0,
          },
          kitchen_app: {
            show_tab: 0,
          },
        },
        promocode_offline: {
          enabled_promocode_offline_tab: 0,
          promocode_pos: {
            show_tab: 0,
          },
          promocode_history: 0,
        },
        pos_plan_and_payment: {
          enabled_pos_plan: 0,
        },
        tmchannel: {
          enabled_tmchannel: 0,
          activated_users: {
            show_tab: 0,
          },
        },
        atlantic_pos: {
          enabled_atlantic_pos: 0,
          activated_users: {
            show_tab: 0,
          },
          atlantic_pos_plus_tmchannel: {
            show_tab: 0,
          },
          demo_request: {
            show_tab: 0,
          },
          support_queries: {
            show_tab: 0,
          },
        },
        sms: {
          send_sms: 0,
        },
        links: {
          enabled_links_tab: 0,
          pos_links: {
            show_tab: 0,
          },
          pos_demo_links: {
            show_tab: 0,
          },
        },
        enquiry: {
          enabled_enquiry_tab: 0,
          campaign_enquiry: {
            show_tab: 0,
          },
          quick_enquiry: {
            show_tab: 0,
          },
        },
        aur_employee: {
          enabled_employee_tab: 0,
          employee: {
            show_tab: 0,
          },
        },
      },
    };
  },
  methods: {
    Load() {
      axios.all([
        this.getDesktopPos(),
        this.getDesktopPosActivation(),
        this.getTMChannel(),
        this.getTMPOS(),
        this.getTMPOSEnquiry(),
        this.getTrial(),
        this.getTMBillKitchenApp(),
        this.getCaptainAppRegistration(),
        this.getCaptainAppActivation(),
        this.getCaptainAppHistory(),
        this.getEnquiry(),
      ]);
    },
    getEnquiry() {
      axios.get("api/dashboard-enquiry").then((response) => {
        this.campaign_enquiry = response.data.campaign_enquiry_total;
        this.quick_enquiry = response.data.quick_enquiry_total;
      });
    },
    getDesktopPos() {
      axios.get("api/dashboard-pos-registration").then((response) => {
        this.pos_registration = response.data.total;
      });
    },
    getDesktopPosActivation() {
      axios.get("api/dashboard-pos-activation").then((response) => {
        this.pos_activation = response.data.total;
        this.pos_history = response.data.pos_desktop_history_total;
        this.pos_feedback = response.data.feedback_total;
      });
    },
    getTMChannel() {
      axios.get("api/dashboard-tm-channel").then((response) => {
        this.tmchannel_registration = response.data.total;
      });
    },
    getTMPOS() {
      axios.get("api/dashboard-tmpos").then((response) => {
        this.tmpos_cloud_registration = response.data.total;
        this.tmpos_total_outlets = response.data.tmpos_total_outlets;
      });
    },
    getTMPOSEnquiry() {
      axios.get("api/dashboard-tmpos-enquiry").then((response) => {
        this.tmpos_cloud_activation = response.data.total;
      });
    },

    getTrial() {
      axios.get("api/dashboard-kitchen-app-enquiry").then((response) => {
        this.kitchen_app_history = response.data.history_total;
        this.kitchen_app_trial = response.data.total;
        this.kitchen_app_activation = response.data.total_activation;
      });
    },
    getTMBillKitchenApp() {
      axios.get("api/dashboard-tmbill-kitchen-app").then((response) => {
        this.kitchen_app_registration = response.data.total;
      });
    },

    getCaptainAppRegistration() {
      axios.get("api/dashboard-tmbill-app-users").then((response) => {
        this.captain_app_registration = response.data.total;
      });
    },
    getCaptainAppActivation() {
      axios.get("api/dashboard-app-activation").then((response) => {
        this.captain_app_activation = response.data.total_activation;
        this.captain_app_trial = response.data.total_trial;
      });
    },
    getCaptainAppHistory() {
      axios.get("api/dashboard-captain-app-history").then((response) => {
        this.captain_app_history = response.data.total;
      });
    },
  },
  mounted() {
    this.Load();
    this.access_level = window.gate.user.access_level;
    this.show_admin_only = window.gate.user.id;
  },
};
</script>
<style scoped>
a {
  text-decoration: none !important;
  color: #212529;
}
</style>
