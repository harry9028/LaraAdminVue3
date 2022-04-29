"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Backend_DashboardComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
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
            show_tab: 0
          },
          captain_app: {
            show_tab: 0
          },
          kitchen_app: {
            show_tab: 0
          }
        },
        pos_offline_activation: {
          pos_offline_activation_tab: 0,
          pos_activation_keys: {
            show_tab: 0
          },
          captain_app: {
            show_tab: 0
          },
          kitchen_app: {
            show_tab: 0
          }
        },
        promocode_offline: {
          enabled_promocode_offline_tab: 0,
          promocode_pos: {
            show_tab: 0
          },
          promocode_history: 0
        },
        pos_plan_and_payment: {
          enabled_pos_plan: 0
        },
        tmchannel: {
          enabled_tmchannel: 0,
          activated_users: {
            show_tab: 0
          }
        },
        atlantic_pos: {
          enabled_atlantic_pos: 0,
          activated_users: {
            show_tab: 0
          },
          atlantic_pos_plus_tmchannel: {
            show_tab: 0
          },
          demo_request: {
            show_tab: 0
          },
          support_queries: {
            show_tab: 0
          }
        },
        sms: {
          send_sms: 0
        },
        links: {
          enabled_links_tab: 0,
          pos_links: {
            show_tab: 0
          },
          pos_demo_links: {
            show_tab: 0
          }
        },
        enquiry: {
          enabled_enquiry_tab: 0,
          campaign_enquiry: {
            show_tab: 0
          },
          quick_enquiry: {
            show_tab: 0
          }
        },
        aur_employee: {
          enabled_employee_tab: 0,
          employee: {
            show_tab: 0
          }
        }
      }
    };
  },
  methods: {
    Load: function Load() {
      axios.all([this.getDesktopPos(), this.getDesktopPosActivation(), this.getTMChannel(), this.getTMPOS(), this.getTMPOSEnquiry(), this.getTrial(), this.getTMBillKitchenApp(), this.getCaptainAppRegistration(), this.getCaptainAppActivation(), this.getCaptainAppHistory(), this.getEnquiry()]);
    },
    getEnquiry: function getEnquiry() {
      var _this = this;

      axios.get("api/dashboard-enquiry").then(function (response) {
        _this.campaign_enquiry = response.data.campaign_enquiry_total;
        _this.quick_enquiry = response.data.quick_enquiry_total;
      });
    },
    getDesktopPos: function getDesktopPos() {
      var _this2 = this;

      axios.get("api/dashboard-pos-registration").then(function (response) {
        _this2.pos_registration = response.data.total;
      });
    },
    getDesktopPosActivation: function getDesktopPosActivation() {
      var _this3 = this;

      axios.get("api/dashboard-pos-activation").then(function (response) {
        _this3.pos_activation = response.data.total;
        _this3.pos_history = response.data.pos_desktop_history_total;
        _this3.pos_feedback = response.data.feedback_total;
      });
    },
    getTMChannel: function getTMChannel() {
      var _this4 = this;

      axios.get("api/dashboard-tm-channel").then(function (response) {
        _this4.tmchannel_registration = response.data.total;
      });
    },
    getTMPOS: function getTMPOS() {
      var _this5 = this;

      axios.get("api/dashboard-tmpos").then(function (response) {
        _this5.tmpos_cloud_registration = response.data.total;
        _this5.tmpos_total_outlets = response.data.tmpos_total_outlets;
      });
    },
    getTMPOSEnquiry: function getTMPOSEnquiry() {
      var _this6 = this;

      axios.get("api/dashboard-tmpos-enquiry").then(function (response) {
        _this6.tmpos_cloud_activation = response.data.total;
      });
    },
    getTrial: function getTrial() {
      var _this7 = this;

      axios.get("api/dashboard-kitchen-app-enquiry").then(function (response) {
        _this7.kitchen_app_history = response.data.history_total;
        _this7.kitchen_app_trial = response.data.total;
        _this7.kitchen_app_activation = response.data.total_activation;
      });
    },
    getTMBillKitchenApp: function getTMBillKitchenApp() {
      var _this8 = this;

      axios.get("api/dashboard-tmbill-kitchen-app").then(function (response) {
        _this8.kitchen_app_registration = response.data.total;
      });
    },
    getCaptainAppRegistration: function getCaptainAppRegistration() {
      var _this9 = this;

      axios.get("api/dashboard-tmbill-app-users").then(function (response) {
        _this9.captain_app_registration = response.data.total;
      });
    },
    getCaptainAppActivation: function getCaptainAppActivation() {
      var _this10 = this;

      axios.get("api/dashboard-app-activation").then(function (response) {
        _this10.captain_app_activation = response.data.total_activation;
        _this10.captain_app_trial = response.data.total_trial;
      });
    },
    getCaptainAppHistory: function getCaptainAppHistory() {
      var _this11 = this;

      axios.get("api/dashboard-captain-app-history").then(function (response) {
        _this11.captain_app_history = response.data.total;
      });
    }
  },
  mounted: function mounted() {
    this.Load();
    this.access_level = window.gate.user.access_level;
    this.show_admin_only = window.gate.user.id;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-01a39622"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "content-wrapper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"content-header\" data-v-01a39622><div class=\"container-fluid\" data-v-01a39622><div class=\"row mb-2\" data-v-01a39622><div class=\"col-sm-6\" data-v-01a39622><h1 data-v-01a39622>Dashboard</h1></div><div class=\"col-sm-6\" data-v-01a39622><ol class=\"breadcrumb float-sm-right\" data-v-01a39622><li class=\"breadcrumb-item\" data-v-01a39622><a href=\"#\" data-v-01a39622>Home</a></li><li class=\"breadcrumb-item active\" data-v-01a39622>Dashboard</li></ol></div></div></div></section>", 1);

var _hoisted_3 = {
  "class": "content"
};
var _hoisted_4 = {
  key: 0,
  "class": "container-fluid"
};
var _hoisted_5 = {
  key: 0,
  "class": "mb-2"
};
var _hoisted_6 = {
  "class": "row"
};
var _hoisted_7 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_8 = {
  "class": "info-box"
};
var _hoisted_9 = {
  "class": "overlay dark"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_11 = [_hoisted_10];

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-check"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_13 = {
  "class": "info-box-content"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Registration", -1
  /* HOISTED */
  );
});

var _hoisted_15 = {
  "class": "info-box-number"
};
var _hoisted_16 = {
  key: 1,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_17 = {
  "class": "info-box"
};
var _hoisted_18 = {
  "class": "overlay dark"
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_20 = [_hoisted_19];

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-success"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-shield"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_22 = {
  "class": "info-box-content"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activation", -1
  /* HOISTED */
  );
});

var _hoisted_24 = {
  "class": "info-box-number"
};
var _hoisted_25 = {
  key: 2,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_26 = {
  "class": "info-box"
};
var _hoisted_27 = {
  "class": "overlay dark"
};

var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_29 = [_hoisted_28];

var _hoisted_30 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-warning"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-comments"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_31 = {
  "class": "info-box-content"
};

var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Feedbacks", -1
  /* HOISTED */
  );
});

var _hoisted_33 = {
  "class": "info-box-number"
};
var _hoisted_34 = {
  key: 3,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_35 = {
  "class": "info-box"
};
var _hoisted_36 = {
  "class": "overlay dark"
};

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_38 = [_hoisted_37];

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-danger"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-history"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_40 = {
  "class": "info-box-content"
};

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "History", -1
  /* HOISTED */
  );
});

var _hoisted_42 = {
  "class": "info-box-number"
};
var _hoisted_43 = {
  key: 1,
  "class": "mb-2"
};
var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_46 = {
  "class": "info-box"
};
var _hoisted_47 = {
  "class": "overlay dark"
};

var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_49 = [_hoisted_48];

var _hoisted_50 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-check"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_51 = {
  "class": "info-box-content"
};

var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Registration", -1
  /* HOISTED */
  );
});

var _hoisted_53 = {
  "class": "info-box-number"
};
var _hoisted_54 = {
  key: 1,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_55 = {
  "class": "info-box"
};
var _hoisted_56 = {
  "class": "overlay dark"
};

var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_58 = [_hoisted_57];

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-success"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-shield"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_60 = {
  "class": "info-box-content"
};

var _hoisted_61 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activation", -1
  /* HOISTED */
  );
});

var _hoisted_62 = {
  "class": "info-box-number"
};
var _hoisted_63 = {
  key: 2,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_64 = {
  "class": "info-box"
};
var _hoisted_65 = {
  "class": "overlay dark"
};

var _hoisted_66 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_67 = [_hoisted_66];

var _hoisted_68 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-warning"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-mobile-alt"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_69 = {
  "class": "info-box-content"
};

var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Trial", -1
  /* HOISTED */
  );
});

var _hoisted_71 = {
  "class": "info-box-number"
};
var _hoisted_72 = {
  key: 3,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_73 = {
  "class": "info-box"
};
var _hoisted_74 = {
  "class": "overlay dark"
};

var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_76 = [_hoisted_75];

var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-danger"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-history"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_78 = {
  "class": "info-box-content"
};

var _hoisted_79 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "History", -1
  /* HOISTED */
  );
});

var _hoisted_80 = {
  "class": "info-box-number"
};
var _hoisted_81 = {
  key: 2,
  "class": "mb-2"
};
var _hoisted_82 = {
  "class": "row"
};
var _hoisted_83 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_84 = {
  "class": "info-box"
};
var _hoisted_85 = {
  "class": "overlay dark"
};

var _hoisted_86 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_87 = [_hoisted_86];

var _hoisted_88 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-check"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_89 = {
  "class": "info-box-content"
};

var _hoisted_90 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Registration", -1
  /* HOISTED */
  );
});

var _hoisted_91 = {
  "class": "info-box-number"
};
var _hoisted_92 = {
  key: 1,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_93 = {
  "class": "info-box"
};
var _hoisted_94 = {
  "class": "overlay dark"
};

var _hoisted_95 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_96 = [_hoisted_95];

var _hoisted_97 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-success"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-shield"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_98 = {
  "class": "info-box-content"
};

var _hoisted_99 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activation", -1
  /* HOISTED */
  );
});

var _hoisted_100 = {
  "class": "info-box-number"
};
var _hoisted_101 = {
  key: 2,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_102 = {
  "class": "info-box"
};
var _hoisted_103 = {
  "class": "overlay dark"
};

var _hoisted_104 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_105 = [_hoisted_104];

var _hoisted_106 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-warning"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-mobile-alt"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_107 = {
  "class": "info-box-content"
};

var _hoisted_108 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Trial", -1
  /* HOISTED */
  );
});

var _hoisted_109 = {
  "class": "info-box-number"
};
var _hoisted_110 = {
  key: 3,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_111 = {
  "class": "info-box"
};
var _hoisted_112 = {
  "class": "overlay dark"
};

var _hoisted_113 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_114 = [_hoisted_113];

var _hoisted_115 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-danger"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-history"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_116 = {
  "class": "info-box-content"
};

var _hoisted_117 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "History", -1
  /* HOISTED */
  );
});

var _hoisted_118 = {
  "class": "info-box-number"
};
var _hoisted_119 = {
  key: 3,
  "class": "mb-2"
};
var _hoisted_120 = {
  "class": "row"
};
var _hoisted_121 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_122 = {
  "class": "info-box"
};
var _hoisted_123 = {
  "class": "overlay dark"
};

var _hoisted_124 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_125 = [_hoisted_124];

var _hoisted_126 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-check"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_127 = {
  "class": "info-box-content"
};

var _hoisted_128 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activated Master Users", -1
  /* HOISTED */
  );
});

var _hoisted_129 = {
  "class": "info-box-number"
};
var _hoisted_130 = {
  key: 1,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_131 = {
  "class": "info-box"
};
var _hoisted_132 = {
  "class": "overlay dark"
};

var _hoisted_133 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_134 = [_hoisted_133];

var _hoisted_135 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-utensils"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_136 = {
  "class": "info-box-content"
};

var _hoisted_137 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activated Outlets", -1
  /* HOISTED */
  );
});

var _hoisted_138 = {
  "class": "info-box-number"
};
var _hoisted_139 = {
  key: 2,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_140 = {
  "class": "info-box"
};
var _hoisted_141 = {
  "class": "overlay dark"
};

var _hoisted_142 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_143 = [_hoisted_142];

var _hoisted_144 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-success"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-shield"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_145 = {
  "class": "info-box-content"
};

var _hoisted_146 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Demo Request", -1
  /* HOISTED */
  );
});

var _hoisted_147 = {
  "class": "info-box-number"
};
var _hoisted_148 = {
  key: 4,
  "class": "mb-2"
};
var _hoisted_149 = {
  "class": "row"
};
var _hoisted_150 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_151 = {
  "class": "info-box"
};
var _hoisted_152 = {
  "class": "overlay dark"
};

var _hoisted_153 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_154 = [_hoisted_153];

var _hoisted_155 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-user-check"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_156 = {
  "class": "info-box-content"
};

var _hoisted_157 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Activated Users", -1
  /* HOISTED */
  );
});

var _hoisted_158 = {
  "class": "info-box-number"
};
var _hoisted_159 = {
  key: 5,
  "class": "mb-2"
};
var _hoisted_160 = {
  "class": "row"
};
var _hoisted_161 = {
  key: 0,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_162 = {
  "class": "info-box"
};
var _hoisted_163 = {
  "class": "overlay dark"
};

var _hoisted_164 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_165 = [_hoisted_164];

var _hoisted_166 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-users"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_167 = {
  "class": "info-box-content"
};

var _hoisted_168 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Campaign Enquiry", -1
  /* HOISTED */
  );
});

var _hoisted_169 = {
  "class": "info-box-number"
};
var _hoisted_170 = {
  key: 1,
  "class": "col-md-3 col-sm-6 col-12"
};
var _hoisted_171 = {
  "class": "info-box"
};
var _hoisted_172 = {
  "class": "overlay dark"
};

var _hoisted_173 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-sync-alt fa-spin"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_174 = [_hoisted_173];

var _hoisted_175 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-icon bg-info"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-users"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_176 = {
  "class": "info-box-content"
};

var _hoisted_177 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "info-box-text"
  }, "Quick Enquiry", -1
  /* HOISTED */
  );
});

var _hoisted_178 = {
  "class": "info-box-number"
};
var _hoisted_179 = {
  key: 1,
  "class": "container-fluid"
};

var _hoisted_180 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "alert alert-danger",
    role: "alert"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "alert-heading"
  }, "Unauthorised Access"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Please contact to your administrator")], -1
  /* HOISTED */
  );
});

var _hoisted_181 = [_hoisted_180];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [$data.access_level.pos_offline_registration.pos_registration.show_tab == 1 || $data.access_level.pos_offline_activation.pos_activation_keys.show_tab == 1 || $data.access_level.feedback == 1 || $data.access_level.pos_offline_registration.captain_app.show_tab == 1 || $data.access_level.pos_offline_activation.captain_app.show_tab == 1 || $data.access_level.pos_offline_registration.kitchen_app.show_tab == 1 || $data.access_level.pos_offline_activation.kitchen_app.show_tab == 1 || $data.access_level.tmchannel.activated_users.show_tab == 1 || $data.access_level.enquiry.campaign_enquiry.show_tab == 1 || $data.access_level.enquiry.quick_enquiry.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [$data.access_level.pos_offline_registration.pos_registration.show_tab == 1 || $data.access_level.pos_offline_activation.pos_activation_keys.show_tab == 1 || $data.access_level.feedback == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_5, " Desktop POS (Offline) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$data.access_level.pos_offline_registration.pos_registration.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmbill-users",
    event: $data.pos_registration ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, _hoisted_11, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.pos_registration]]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pos_registration), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.pos_offline_activation.pos_activation_keys.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmbill-product",
    event: $data.pos_activation ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, _hoisted_20, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.pos_activation]]), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pos_activation), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.feedback == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "feedback",
    event: $data.pos_feedback ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, _hoisted_29, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.pos_feedback]]), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pos_feedback), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.feedback == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "feedback",
    event: $data.pos_history ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, _hoisted_38, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.pos_history]]), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.pos_history), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.access_level.pos_offline_registration.captain_app.show_tab == 1 || $data.access_level.pos_offline_activation.captain_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_43, " Captain App (Offline) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [$data.access_level.pos_offline_registration.captain_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmbill-app-users",
    event: $data.captain_app_registration ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, _hoisted_49, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.captain_app_registration]]), _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.captain_app_registration), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.pos_offline_activation.captain_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "app-activation",
    event: $data.captain_app_activation ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, _hoisted_58, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.captain_app_activation]]), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.captain_app_activation), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.pos_offline_activation.captain_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "app-activation",
    event: $data.captain_app_trial ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, _hoisted_67, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.captain_app_trial]]), _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.captain_app_trial), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_admin_only == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "device-info",
    event: $data.captain_app_history ? '' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, _hoisted_76, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.captain_app_history]]), _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.captain_app_history), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.access_level.pos_offline_registration.kitchen_app.show_tab == 1 || $data.access_level.pos_offline_activation.kitchen_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_81, " Kitchen APP (Offline) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [$data.access_level.pos_offline_registration.kitchen_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_83, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmbill-kitchen-app",
    event: $data.kitchen_app_registration ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, _hoisted_87, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.kitchen_app_registration]]), _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.kitchen_app_registration), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.pos_offline_activation.kitchen_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "kitchen-app-activation",
    event: $data.kitchen_app_activation ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, _hoisted_96, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.kitchen_app_activation]]), _hoisted_97, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [_hoisted_99, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.kitchen_app_activation), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.pos_offline_activation.kitchen_app.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "kitchen-app-activation",
    event: $data.kitchen_app_trial ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, _hoisted_105, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.kitchen_app_trial]]), _hoisted_106, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [_hoisted_108, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_109, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.kitchen_app_trial), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.info-box-content ")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.show_admin_only == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "kitchen-app-device-info",
    event: $data.kitchen_app_history ? '' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_112, _hoisted_114, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.kitchen_app_history]]), _hoisted_115, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [_hoisted_117, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_118, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.kitchen_app_history), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.access_level.atlantic_pos.activated_users.show_tab == 1 || $data.access_level.atlantic_pos.demo_request.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_119, " Atlantic POS (Desktop & Mobile) ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [$data.access_level.atlantic_pos.activated_users.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_121, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmpos-registrations",
    event: $data.tmpos_cloud_registration ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, _hoisted_125, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.tmpos_cloud_registration]]), _hoisted_126, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_127, [_hoisted_128, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.tmpos_cloud_registration), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.atlantic_pos.activated_users.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "activated-outlets",
    event: $data.tmpos_total_outlets ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, _hoisted_134, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.tmpos_total_outlets]]), _hoisted_135, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [_hoisted_137, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_138, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.tmpos_total_outlets), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.atlantic_pos.demo_request.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmpos-enquiry",
    event: $data.tmpos_cloud_activation ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_141, _hoisted_143, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.tmpos_cloud_activation]]), _hoisted_144, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [_hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_147, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.tmpos_cloud_activation), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.access_level.tmchannel.activated_users.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_148, " TMChannel ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_149, [$data.access_level.tmchannel.activated_users.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "tmchannel-registrations",
    event: $data.tmchannel_registration ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_152, _hoisted_154, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.tmchannel_registration]]), _hoisted_155, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [_hoisted_157, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_158, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.tmchannel_registration), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.access_level.enquiry.campaign_enquiry.show_tab == 1 || $data.access_level.enquiry.quick_enquiry.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_159, " Enquiry ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [$data.access_level.enquiry.campaign_enquiry.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_161, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "campaign-enquiry",
    event: $data.campaign_enquiry ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, _hoisted_165, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.campaign_enquiry]]), _hoisted_166, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_167, [_hoisted_168, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_169, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.campaign_enquiry), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.enquiry.quick_enquiry.show_tab == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_170, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "quick-enquiry",
    event: $data.quick_enquiry ? 'click' : ''
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_172, _hoisted_174, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.quick_enquiry]]), _hoisted_175, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [_hoisted_177, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_178, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quick_enquiry), 1
      /* TEXT */
      )])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["event"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_179, _hoisted_181))])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-01a39622] {\r\n  text-decoration: none !important;\r\n  color: #212529;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_style_index_0_id_01a39622_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_style_index_0_id_01a39622_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_style_index_0_id_01a39622_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/Backend/DashboardComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Backend/DashboardComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardComponent_vue_vue_type_template_id_01a39622_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true */ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true");
/* harmony import */ var _DashboardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=script&lang=js */ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js");
/* harmony import */ var _DashboardComponent_vue_vue_type_style_index_0_id_01a39622_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css */ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DashboardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardComponent_vue_vue_type_template_id_01a39622_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-01a39622"],['__file',"resources/js/components/Backend/DashboardComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_template_id_01a39622_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_template_id_01a39622_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=template&id=01a39622&scoped=true");


/***/ }),

/***/ "./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardComponent_vue_vue_type_style_index_0_id_01a39622_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Backend/DashboardComponent.vue?vue&type=style&index=0&id=01a39622&scoped=true&lang=css");


/***/ })

}]);