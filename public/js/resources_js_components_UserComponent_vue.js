"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UserComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    pagination: laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      access_level: {},
      // users empty array
      editmodeSMSInfo: false,
      editmode: false,
      SmsInfoModal: false,
      users: {},
      // Create a new form instance
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
              "export": "0",
              message_credentials_update: "0",
              show_message_form: "0",
              pos_activation_update: "0",
              show_user_log_details: "0"
            },
            captain_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0"
            },
            kitchen_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0"
            }
          },
          pos_offline_activation: {
            pos_offline_activation_tab: "0",
            pos_activation_keys: {
              show_tab: "0",
              generate_new_key: "0",
              edit: "0",
              show_message_form: "0",
              copy_option: "0"
            },
            captain_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0"
            },
            kitchen_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0"
            }
          },
          promocode_offline: {
            enabled_promocode_offline_tab: "0",
            promocode_pos: {
              show_tab: "0",
              add: "0",
              edit: "0",
              "delete": "0"
            },
            promocode_history: "0"
          },
          pos_plan_and_payment: {
            enabled_pos_plan: "0",
            plan: "0",
            payment: "0"
          },
          tmchannel: {
            enabled_tmchannel: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0"
            }
          },
          atlantic_pos: {
            enabled_atlantic_pos: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
              payment_settings: "0"
            },
            atlantic_pos_plus_tmchannel: {
              add: "0",
              show_tab: "0"
            },
            demo_request: {
              show_tab: "0",
              view: "0",
              show_message_form: "0",
              "export": "0"
            },
            support_queries: {
              show_tab: "0",
              edit: "0"
            },
            atlantic_notification: {
              show_tab: "0",
              add: "0",
              edit: "0"
            }
          },
          sms: {
            send_sms: "0"
          },
          links: {
            enabled_links_tab: "0",
            pos_links: {
              show_tab: "0",
              edit: "0",
              add: "0"
            },
            pos_demo_links: {
              show_tab: "0",
              edit: "0",
              add: "0"
            }
          },
          enquiry: {
            enabled_enquiry_tab: "0",
            campaign_enquiry: {
              show_tab: "0",
              "export": "0"
            },
            quick_enquiry: {
              show_tab: "0",
              "export": "0",
              edit: "0"
            }
          },
          aur_employee: {
            enabled_employee_tab: "0",
            employee: {
              show_tab: "0",
              add: "0",
              "delete": "0",
              update: "0",
              message_credentials_update: "0"
            }
          }
        }
      }),
      smsInfoForm: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
        user_id: ""
      }),
      search: ""
    };
  },
  methods: {
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $("#newModal").modal("show");
    },
    editModal: function editModal(user) {
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
              "export": "0",
              message_credentials_update: "0",
              show_message_form: "0",
              pos_activation_update: "0",
              show_user_log_details: "0"
            },
            captain_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0"
            },
            kitchen_app: {
              show_tab: "0",
              update: "0",
              show_message_form: "0",
              history: "0"
            }
          },
          pos_offline_activation: {
            pos_offline_activation_tab: "0",
            pos_activation_keys: {
              show_tab: "0",
              generate_new_key: "0",
              edit: "0",
              show_message_form: "0",
              copy_option: "0"
            },
            captain_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0"
            },
            kitchen_app: {
              show_tab: "0",
              edit: "0",
              show_message_form: "0"
            }
          },
          promocode_offline: {
            enabled_promocode_offline_tab: "0",
            promocode_pos: {
              show_tab: "0",
              add: "0",
              edit: "0",
              "delete": "0"
            },
            promocode_history: "0"
          },
          pos_plan_and_payment: {
            enabled_pos_plan: "0",
            plan: "0",
            payment: "0"
          },
          tmchannel: {
            enabled_tmchannel: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0"
            }
          },
          atlantic_pos: {
            enabled_atlantic_pos: "0",
            activated_users: {
              show_tab: "0",
              add: "0",
              update: "0",
              show_message_form: "0",
              payment_settings: "0"
            },
            atlantic_pos_plus_tmchannel: {
              add: "0",
              show_tab: "0"
            },
            demo_request: {
              show_tab: "0",
              view: "0",
              show_message_form: "0",
              "export": "0"
            },
            support_queries: {
              show_tab: "0",
              edit: "0"
            }
          },
          sms: {
            send_sms: "0"
          },
          links: {
            enabled_links_tab: "0",
            pos_links: {
              show_tab: "0",
              edit: "0",
              add: "0"
            },
            pos_demo_links: {
              show_tab: "0",
              edit: "0",
              add: "0"
            }
          },
          enquiry: {
            enabled_enquiry_tab: "0",
            campaign_enquiry: {
              show_tab: "0",
              "export": "0"
            },
            quick_enquiry: {
              show_tab: "0",
              "export": "0",
              edit: "0"
            }
          },
          aur_employee: {
            enabled_employee_tab: "0",
            employee: {
              show_tab: "0",
              add: "0",
              "delete": "0",
              update: "0",
              message_credentials_update: "0"
            }
          }
        };
      } else {
        // console.log(user);
        if (!user.access_level.atlantic_pos.hasOwnProperty("atlantic_notification")) {
          user.access_level.atlantic_pos.atlantic_notification = {
            show_tab: "0",
            add: "0",
            edit: "0"
          };
        }
      }

      this.form.reset();
      $("#newModal").modal("show");
      this.form.fill(user);
    },
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get("api/user").then(function (response) {
        _this.users = response.data;
        toast.fire({
          icon: "success",
          title: "Users load successfully"
        });
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("api/user?page=" + page + "&q=" + this.search).then(function (response) {
        _this2.users = response.data;
      });
    },
    searchUser: function searchUser() {
      var _this3 = this;

      axios.get("api/findUser?q=" + this.search).then(function (data) {
        _this3.users = data.data;
      })["catch"](function () {});
    },
    createUser: function createUser() {
      var _this4 = this;

      // Submit the form via a POST request
      this.form.post("api/user").then(function (_ref) {
        var data = _ref.data;
        $("#newModal").modal("hide");
        toast.fire({
          icon: "success",
          title: "User Created successfully"
        });

        _this4.loadUsers();
      })["catch"](function () {});
    },
    updateUser: function updateUser() {
      var _this5 = this;

      // console.log('Editing data');
      this.form.put("api/user/" + this.form.id).then(function () {
        // success
        $("#newModal").modal("hide");

        _this5.loadUsers();

        Swal.fire("Good job!", "Info has been updated !", "success");
      })["catch"](function () {});
    },
    deleteUser: function deleteUser(id) {
      var _this6 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        // send ajax request to server
        if (result.value) {
          _this6.form["delete"]("api/user/" + id).then(function () {
            _this6.loadUsers();

            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })["catch"](function (e) {
            // console.log(e);
            Swal.fire("Failed!", "Somewent wrong.", "success");
          });
        }
      });
    },
    SMSModal: function SMSModal(user) {
      this.SmsInfoModal = true;
      this.editmodeSMSInfo = true;
      this.smsInfoForm.user_id = user.id;
      $("#SmsInfoModal").modal("show");
    },
    createSMSInfo: function createSMSInfo() {},
    updateSMSInfo: function updateSMSInfo() {
      var _this7 = this;

      console.log(this.smsInfoForm);
      this.smsInfoForm.put("api/sms-getway/" + this.smsInfoForm.user_id).then(function () {
        // success
        $("#newModal").modal("hide");

        _this7.loadUsers();

        Swal.fire("Good job!", "Info has been updated !", "success");
      })["catch"](function () {});
    },
    closeModal: function closeModal() {
      $("#newModal").modal("hide");
      $("#SmsInfoModal").modal("hide");
    }
  },
  mounted: function mounted() {
    this.loadUsers();
    this.access_level = window.gate.user.access_level.aur_employee.employee;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-wrapper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"content-header\"><div class=\"container-fluid\"><div class=\"row mb-2\"><div class=\"col-sm-6\"><h1>TMBILL</h1></div><div class=\"col-sm-6\"><ol class=\"breadcrumb float-sm-right\"><li class=\"breadcrumb-item\"><a href=\"#\">TMBILL</a></li><li class=\"breadcrumb-item active\">Our Employee</li></ol></div></div></div><!-- /.container-fluid --></section>", 1);

var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-12"
};
var _hoisted_6 = {
  "class": "input-group mb-3 col-md-4"
};
var _hoisted_7 = {
  "class": "input-group-append"
};
var _hoisted_8 = {
  "class": "card"
};
var _hoisted_9 = {
  "class": "card-header"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Users List", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "card-tools"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-user-plus"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_12, _hoisted_13];
var _hoisted_15 = {
  "class": "card-body table-responsive p-0"
};
var _hoisted_16 = {
  "class": "table table-hover"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Contact"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Email"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "min-width": "120px"
  }
}, "Registered At"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "btn-group",
  role: "group",
  "aria-label": "Button Group"
};
var _hoisted_19 = ["onClick"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-user-edit"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = [_hoisted_20];
var _hoisted_22 = ["onClick"];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-envelope"
}, null, -1
/* HOISTED */
);

var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = ["onClick"];

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_27 = [_hoisted_26];
var _hoisted_28 = {
  "class": "card-footer"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "< Previous", -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Next >", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "modal fade",
  id: "newModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "addNewTitle",
  "aria-hidden": "true"
};
var _hoisted_32 = {
  "class": "modal-dialog modal-dialog-centered modal-full",
  role: "document"
};
var _hoisted_33 = {
  "class": "modal-content"
};
var _hoisted_34 = {
  "class": "modal-header"
};
var _hoisted_35 = {
  "class": "modal-title",
  id: "addNewLabel"
};
var _hoisted_36 = {
  "class": "modal-title",
  id: "addNewLabel"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×", -1
/* HOISTED */
);

var _hoisted_38 = [_hoisted_37];
var _hoisted_39 = {
  "class": "modal-body"
};
var _hoisted_40 = {
  "class": "row"
};
var _hoisted_41 = {
  "class": "col-md-3"
};
var _hoisted_42 = {
  "class": "form-group"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name",
  "class": "control-label"
}, "Name:", -1
/* HOISTED */
);

var _hoisted_44 = ["innerHTML"];
var _hoisted_45 = {
  "class": "col-md-3"
};
var _hoisted_46 = {
  "class": "form-group"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email",
  "class": "control-label"
}, "Email:", -1
/* HOISTED */
);

var _hoisted_48 = ["innerHTML"];
var _hoisted_49 = {
  "class": "col-md-3"
};
var _hoisted_50 = {
  "class": "form-group"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "contact_no",
  "class": "control-label"
}, "Contact No:", -1
/* HOISTED */
);

var _hoisted_52 = ["innerHTML"];
var _hoisted_53 = {
  "class": "col-md-3"
};
var _hoisted_54 = {
  "class": "form-group"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password",
  "class": "control-label"
}, "Password (leave empty if not changing)", -1
/* HOISTED */
);

var _hoisted_56 = ["innerHTML"];

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_58 = {
  "class": "row"
};
var _hoisted_59 = {
  "class": "col-md-12"
};
var _hoisted_60 = {
  "class": "card"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Access Levels")], -1
/* HOISTED */
);

var _hoisted_62 = {
  "class": "card-body"
};
var _hoisted_63 = {
  "class": "row"
};
var _hoisted_64 = {
  "class": "form-group col-md-2"
};
var _hoisted_65 = {
  "class": "form-check"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "exampleCheck1"
}, "Show dashboard tab", -1
/* HOISTED */
);

var _hoisted_67 = {
  "class": "form-group col-md-2"
};
var _hoisted_68 = {
  "class": "form-check"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show Feedback tab ", -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "form-group col-md-2"
};
var _hoisted_71 = {
  "class": "form-check"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show backup links tab ", -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "form-group col-md-2"
};
var _hoisted_74 = {
  "class": "form-check"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show backup tab ", -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "form-group col-md-2"
};
var _hoisted_77 = {
  "class": "form-check"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show profile tab ", -1
/* HOISTED */
);

var _hoisted_79 = {
  "class": "card"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Offline Registration", -1
/* HOISTED */
);

var _hoisted_81 = {
  "class": "card-body"
};
var _hoisted_82 = {
  "class": "form-check"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled POS Offline Registration Tab ", -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "card-body"
};
var _hoisted_85 = {
  "class": "card"
};

var _hoisted_86 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Registration", -1
/* HOISTED */
);

var _hoisted_87 = {
  "class": "card-body"
};
var _hoisted_88 = {
  "class": "card-body"
};
var _hoisted_89 = {
  "class": "row"
};
var _hoisted_90 = {
  "class": "form-group col-md-3"
};
var _hoisted_91 = {
  "class": "form-check"
};

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Pos Registration Tab ", -1
/* HOISTED */
);

var _hoisted_93 = {
  "class": "form-group col-md-3"
};
var _hoisted_94 = {
  "class": "form-check"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Update ", -1
/* HOISTED */
);

var _hoisted_96 = {
  "class": "form-group col-md-3"
};
var _hoisted_97 = {
  "class": "form-check"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Export ", -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "form-group col-md-3"
};
var _hoisted_100 = {
  "class": "form-check"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_102 = {
  "class": "form-group col-md-3"
};
var _hoisted_103 = {
  "class": "form-check"
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Pos activation update ", -1
/* HOISTED */
);

var _hoisted_105 = {
  "class": "form-group col-md-3"
};
var _hoisted_106 = {
  "class": "form-check"
};

var _hoisted_107 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show User log details ", -1
/* HOISTED */
);

var _hoisted_108 = {
  "class": "form-group col-md-4"
};
var _hoisted_109 = {
  "class": "form-check"
};

var _hoisted_110 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Update Message Credentials Option ", -1
/* HOISTED */
);

var _hoisted_111 = {
  "class": "card"
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Captain App", -1
/* HOISTED */
);

var _hoisted_113 = {
  "class": "card-body"
};
var _hoisted_114 = {
  "class": "card-body"
};
var _hoisted_115 = {
  "class": "row"
};
var _hoisted_116 = {
  "class": "form-group col-md-3"
};
var _hoisted_117 = {
  "class": "form-check"
};

var _hoisted_118 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Captain App Tab ", -1
/* HOISTED */
);

var _hoisted_119 = {
  "class": "form-group col-md-3"
};
var _hoisted_120 = {
  "class": "form-check"
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled update ", -1
/* HOISTED */
);

var _hoisted_122 = {
  "class": "form-group col-md-3"
};
var _hoisted_123 = {
  "class": "form-check"
};

var _hoisted_124 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_125 = {
  "class": "form-group col-md-3"
};
var _hoisted_126 = {
  "class": "form-check"
};

var _hoisted_127 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show History ", -1
/* HOISTED */
);

var _hoisted_128 = {
  "class": "card"
};

var _hoisted_129 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Kitchen App", -1
/* HOISTED */
);

var _hoisted_130 = {
  "class": "card-body"
};
var _hoisted_131 = {
  "class": "card-body"
};
var _hoisted_132 = {
  "class": "row"
};
var _hoisted_133 = {
  "class": "form-group col-md-3"
};
var _hoisted_134 = {
  "class": "form-check"
};

var _hoisted_135 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Captain App Tab ", -1
/* HOISTED */
);

var _hoisted_136 = {
  "class": "form-group col-md-3"
};
var _hoisted_137 = {
  "class": "form-check"
};

var _hoisted_138 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled update ", -1
/* HOISTED */
);

var _hoisted_139 = {
  "class": "form-group col-md-3"
};
var _hoisted_140 = {
  "class": "form-check"
};

var _hoisted_141 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_142 = {
  "class": "form-group col-md-3"
};
var _hoisted_143 = {
  "class": "form-check"
};

var _hoisted_144 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show History ", -1
/* HOISTED */
);

var _hoisted_145 = {
  "class": "card"
};

var _hoisted_146 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Offline Activation", -1
/* HOISTED */
);

var _hoisted_147 = {
  "class": "card-body"
};
var _hoisted_148 = {
  "class": "form-check"
};

var _hoisted_149 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Pos Offline Activation Tab ", -1
/* HOISTED */
);

var _hoisted_150 = {
  "class": "card-body"
};
var _hoisted_151 = {
  "class": "card"
};

var _hoisted_152 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Activation Keys", -1
/* HOISTED */
);

var _hoisted_153 = {
  "class": "card-body"
};
var _hoisted_154 = {
  "class": "card-body"
};
var _hoisted_155 = {
  "class": "row"
};
var _hoisted_156 = {
  "class": "form-group col-md-3"
};
var _hoisted_157 = {
  "class": "form-check"
};

var _hoisted_158 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Pos Activation Keys Tab ", -1
/* HOISTED */
);

var _hoisted_159 = {
  "class": "form-group col-md-3"
};
var _hoisted_160 = {
  "class": "form-check"
};

var _hoisted_161 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Generate New Key ", -1
/* HOISTED */
);

var _hoisted_162 = {
  "class": "form-group col-md-3"
};
var _hoisted_163 = {
  "class": "form-check"
};

var _hoisted_164 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Update ", -1
/* HOISTED */
);

var _hoisted_165 = {
  "class": "form-group col-md-3"
};
var _hoisted_166 = {
  "class": "form-check"
};

var _hoisted_167 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled show message form ", -1
/* HOISTED */
);

var _hoisted_168 = {
  "class": "form-group col-md-3"
};
var _hoisted_169 = {
  "class": "form-check"
};

var _hoisted_170 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled copy option ", -1
/* HOISTED */
);

var _hoisted_171 = {
  "class": "card"
};

var _hoisted_172 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Captain App", -1
/* HOISTED */
);

var _hoisted_173 = {
  "class": "card-body"
};
var _hoisted_174 = {
  "class": "card-body"
};
var _hoisted_175 = {
  "class": "row"
};
var _hoisted_176 = {
  "class": "form-group col-md-3"
};
var _hoisted_177 = {
  "class": "form-check"
};

var _hoisted_178 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Captain App Tab ", -1
/* HOISTED */
);

var _hoisted_179 = {
  "class": "form-group col-md-3"
};
var _hoisted_180 = {
  "class": "form-check"
};

var _hoisted_181 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled update ", -1
/* HOISTED */
);

var _hoisted_182 = {
  "class": "form-group col-md-3"
};
var _hoisted_183 = {
  "class": "form-check"
};

var _hoisted_184 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_185 = {
  "class": "card"
};

var _hoisted_186 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Kitchen App", -1
/* HOISTED */
);

var _hoisted_187 = {
  "class": "card-body"
};
var _hoisted_188 = {
  "class": "card-body"
};
var _hoisted_189 = {
  "class": "row"
};
var _hoisted_190 = {
  "class": "form-group col-md-3"
};
var _hoisted_191 = {
  "class": "form-check"
};

var _hoisted_192 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled Captain App Tab ", -1
/* HOISTED */
);

var _hoisted_193 = {
  "class": "form-group col-md-3"
};
var _hoisted_194 = {
  "class": "form-check"
};

var _hoisted_195 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled update ", -1
/* HOISTED */
);

var _hoisted_196 = {
  "class": "form-group col-md-3"
};
var _hoisted_197 = {
  "class": "form-check"
};

var _hoisted_198 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_199 = {
  "class": "card"
};

var _hoisted_200 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Promocode Offline", -1
/* HOISTED */
);

var _hoisted_201 = {
  "class": "card-body"
};
var _hoisted_202 = {
  "class": "row"
};
var _hoisted_203 = {
  "class": "form-group col-md-3"
};
var _hoisted_204 = {
  "class": "form-check"
};

var _hoisted_205 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled promocode offline tab ", -1
/* HOISTED */
);

var _hoisted_206 = {
  "class": "form-group col-md-3"
};
var _hoisted_207 = {
  "class": "form-check"
};

var _hoisted_208 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Promocode History ", -1
/* HOISTED */
);

var _hoisted_209 = {
  "class": "card-body"
};
var _hoisted_210 = {
  "class": "card"
};

var _hoisted_211 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Promocode POS", -1
/* HOISTED */
);

var _hoisted_212 = {
  "class": "card-body"
};
var _hoisted_213 = {
  "class": "card-body"
};
var _hoisted_214 = {
  "class": "row"
};
var _hoisted_215 = {
  "class": "form-group col-md-3"
};
var _hoisted_216 = {
  "class": "form-check"
};

var _hoisted_217 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Promocode POS Tab ", -1
/* HOISTED */
);

var _hoisted_218 = {
  "class": "form-group col-md-3"
};
var _hoisted_219 = {
  "class": "form-check"
};

var _hoisted_220 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Add ", -1
/* HOISTED */
);

var _hoisted_221 = {
  "class": "form-group col-md-3"
};
var _hoisted_222 = {
  "class": "form-check"
};

var _hoisted_223 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Edit ", -1
/* HOISTED */
);

var _hoisted_224 = {
  "class": "form-group col-md-3"
};
var _hoisted_225 = {
  "class": "form-check"
};

var _hoisted_226 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Delete ", -1
/* HOISTED */
);

var _hoisted_227 = {
  "class": "card"
};

var _hoisted_228 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Plan & Payment", -1
/* HOISTED */
);

var _hoisted_229 = {
  "class": "card-body"
};
var _hoisted_230 = {
  "class": "row"
};
var _hoisted_231 = {
  "class": "form-group col-md-3"
};
var _hoisted_232 = {
  "class": "form-check"
};

var _hoisted_233 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enabled POS Plan & Payment ", -1
/* HOISTED */
);

var _hoisted_234 = {
  "class": "form-group col-md-3"
};
var _hoisted_235 = {
  "class": "form-check"
};

var _hoisted_236 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Plan ", -1
/* HOISTED */
);

var _hoisted_237 = {
  "class": "form-group col-md-3"
};
var _hoisted_238 = {
  "class": "form-check"
};

var _hoisted_239 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Payment ", -1
/* HOISTED */
);

var _hoisted_240 = {
  "class": "card"
};

var _hoisted_241 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "TMChannel", -1
/* HOISTED */
);

var _hoisted_242 = {
  "class": "card-body"
};
var _hoisted_243 = {
  "class": "form-check"
};

var _hoisted_244 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable TMChannel Tab ", -1
/* HOISTED */
);

var _hoisted_245 = {
  "class": "card-body"
};
var _hoisted_246 = {
  "class": "card"
};

var _hoisted_247 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "TMChannel", -1
/* HOISTED */
);

var _hoisted_248 = {
  "class": "card-body"
};
var _hoisted_249 = {
  "class": "card-body"
};
var _hoisted_250 = {
  "class": "row"
};
var _hoisted_251 = {
  "class": "form-group col-md-3"
};
var _hoisted_252 = {
  "class": "form-check"
};

var _hoisted_253 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Activated Masters ", -1
/* HOISTED */
);

var _hoisted_254 = {
  "class": "form-group col-md-3"
};
var _hoisted_255 = {
  "class": "form-check"
};

var _hoisted_256 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Add ", -1
/* HOISTED */
);

var _hoisted_257 = {
  "class": "form-group col-md-3"
};
var _hoisted_258 = {
  "class": "form-check"
};

var _hoisted_259 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Update ", -1
/* HOISTED */
);

var _hoisted_260 = {
  "class": "form-group col-md-3"
};
var _hoisted_261 = {
  "class": "form-check"
};

var _hoisted_262 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_263 = {
  "class": "card"
};

var _hoisted_264 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Atlantic POS", -1
/* HOISTED */
);

var _hoisted_265 = {
  "class": "card-body"
};
var _hoisted_266 = {
  "class": "form-check"
};

var _hoisted_267 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Atlantic POS ", -1
/* HOISTED */
);

var _hoisted_268 = {
  "class": "card-body"
};
var _hoisted_269 = {
  "class": "card"
};

var _hoisted_270 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Activated Masters", -1
/* HOISTED */
);

var _hoisted_271 = {
  "class": "card-body"
};
var _hoisted_272 = {
  "class": "card-body"
};
var _hoisted_273 = {
  "class": "row"
};
var _hoisted_274 = {
  "class": "form-group col-md-3"
};
var _hoisted_275 = {
  "class": "form-check"
};

var _hoisted_276 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Activated Masters ", -1
/* HOISTED */
);

var _hoisted_277 = {
  "class": "form-group col-md-2"
};
var _hoisted_278 = {
  "class": "form-check"
};

var _hoisted_279 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Add ", -1
/* HOISTED */
);

var _hoisted_280 = {
  "class": "form-group col-md-2"
};
var _hoisted_281 = {
  "class": "form-check"
};

var _hoisted_282 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Update ", -1
/* HOISTED */
);

var _hoisted_283 = {
  "class": "form-group col-md-2"
};
var _hoisted_284 = {
  "class": "form-check"
};

var _hoisted_285 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show message form ", -1
/* HOISTED */
);

var _hoisted_286 = {
  "class": "form-group col-md-3"
};
var _hoisted_287 = {
  "class": "form-check"
};

var _hoisted_288 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Payment Settings ", -1
/* HOISTED */
);

var _hoisted_289 = {
  "class": "card"
};

var _hoisted_290 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, " Atlantic POS + TMChannel ", -1
/* HOISTED */
);

var _hoisted_291 = {
  "class": "card-body"
};
var _hoisted_292 = {
  "class": "card-body"
};
var _hoisted_293 = {
  "class": "row"
};
var _hoisted_294 = {
  "class": "form-group col-md-3"
};
var _hoisted_295 = {
  "class": "form-check"
};

var _hoisted_296 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Activated Masters ", -1
/* HOISTED */
);

var _hoisted_297 = {
  "class": "form-group col-md-2"
};
var _hoisted_298 = {
  "class": "form-check"
};

var _hoisted_299 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Add ", -1
/* HOISTED */
);

var _hoisted_300 = {
  "class": "card"
};

var _hoisted_301 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Demo Request", -1
/* HOISTED */
);

var _hoisted_302 = {
  "class": "card-body"
};
var _hoisted_303 = {
  "class": "card-body"
};
var _hoisted_304 = {
  "class": "row"
};
var _hoisted_305 = {
  "class": "form-group col-md-3"
};
var _hoisted_306 = {
  "class": "form-check"
};

var _hoisted_307 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Demo Request ", -1
/* HOISTED */
);

var _hoisted_308 = {
  "class": "form-group col-md-2"
};
var _hoisted_309 = {
  "class": "form-check"
};

var _hoisted_310 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Export ", -1
/* HOISTED */
);

var _hoisted_311 = {
  "class": "form-group col-md-2"
};
var _hoisted_312 = {
  "class": "form-check"
};

var _hoisted_313 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " view ", -1
/* HOISTED */
);

var _hoisted_314 = {
  "class": "form-group col-md-2"
};
var _hoisted_315 = {
  "class": "form-check"
};

var _hoisted_316 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Show Message form ", -1
/* HOISTED */
);

var _hoisted_317 = {
  "class": "card"
};

var _hoisted_318 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Support Queries", -1
/* HOISTED */
);

var _hoisted_319 = {
  "class": "card-body"
};
var _hoisted_320 = {
  "class": "card-body"
};
var _hoisted_321 = {
  "class": "row"
};
var _hoisted_322 = {
  "class": "form-group col-md-3"
};
var _hoisted_323 = {
  "class": "form-check"
};

var _hoisted_324 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Support Queries ", -1
/* HOISTED */
);

var _hoisted_325 = {
  "class": "form-group col-md-2"
};
var _hoisted_326 = {
  "class": "form-check"
};

var _hoisted_327 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Edit ", -1
/* HOISTED */
);

var _hoisted_328 = {
  "class": "card"
};

var _hoisted_329 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, " Atlantic Notification ", -1
/* HOISTED */
);

var _hoisted_330 = {
  "class": "card-body"
};
var _hoisted_331 = {
  "class": "card-body"
};
var _hoisted_332 = {
  "class": "row"
};
var _hoisted_333 = {
  "class": "form-group col-md-3"
};
var _hoisted_334 = {
  "class": "form-check"
};

var _hoisted_335 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Atlantic Notification ", -1
/* HOISTED */
);

var _hoisted_336 = {
  "class": "form-group col-md-2"
};
var _hoisted_337 = {
  "class": "form-check"
};

var _hoisted_338 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " New Notification ", -1
/* HOISTED */
);

var _hoisted_339 = {
  "class": "form-group col-md-2"
};
var _hoisted_340 = {
  "class": "form-check"
};

var _hoisted_341 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Notification Edit ", -1
/* HOISTED */
);

var _hoisted_342 = {
  "class": "card"
};

var _hoisted_343 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "SMS", -1
/* HOISTED */
);

var _hoisted_344 = {
  "class": "card-body"
};
var _hoisted_345 = {
  "class": "row"
};
var _hoisted_346 = {
  "class": "form-group col-md-3"
};
var _hoisted_347 = {
  "class": "form-check"
};

var _hoisted_348 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Send SMS ", -1
/* HOISTED */
);

var _hoisted_349 = {
  "class": "card"
};

var _hoisted_350 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Links", -1
/* HOISTED */
);

var _hoisted_351 = {
  "class": "card-body"
};
var _hoisted_352 = {
  "class": "form-check"
};

var _hoisted_353 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable POS Link ", -1
/* HOISTED */
);

var _hoisted_354 = {
  "class": "card-body"
};
var _hoisted_355 = {
  "class": "card"
};

var _hoisted_356 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Links", -1
/* HOISTED */
);

var _hoisted_357 = {
  "class": "card-body"
};
var _hoisted_358 = {
  "class": "card-body"
};
var _hoisted_359 = {
  "class": "row"
};
var _hoisted_360 = {
  "class": "form-group col-md-3"
};
var _hoisted_361 = {
  "class": "form-check"
};

var _hoisted_362 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable POS Link ", -1
/* HOISTED */
);

var _hoisted_363 = {
  "class": "form-group col-md-3"
};
var _hoisted_364 = {
  "class": "form-check"
};

var _hoisted_365 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " add ", -1
/* HOISTED */
);

var _hoisted_366 = {
  "class": "form-group col-md-3"
};
var _hoisted_367 = {
  "class": "form-check"
};

var _hoisted_368 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " edit ", -1
/* HOISTED */
);

var _hoisted_369 = {
  "class": "card"
};

var _hoisted_370 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "POS Demo Links", -1
/* HOISTED */
);

var _hoisted_371 = {
  "class": "card-body"
};
var _hoisted_372 = {
  "class": "card-body"
};
var _hoisted_373 = {
  "class": "row"
};
var _hoisted_374 = {
  "class": "form-group col-md-3"
};
var _hoisted_375 = {
  "class": "form-check"
};

var _hoisted_376 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable POS Demo Link ", -1
/* HOISTED */
);

var _hoisted_377 = {
  "class": "form-group col-md-3"
};
var _hoisted_378 = {
  "class": "form-check"
};

var _hoisted_379 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " add ", -1
/* HOISTED */
);

var _hoisted_380 = {
  "class": "form-group col-md-3"
};
var _hoisted_381 = {
  "class": "form-check"
};

var _hoisted_382 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " edit ", -1
/* HOISTED */
);

var _hoisted_383 = {
  "class": "card"
};

var _hoisted_384 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Enquiry", -1
/* HOISTED */
);

var _hoisted_385 = {
  "class": "card-body"
};
var _hoisted_386 = {
  "class": "form-check"
};

var _hoisted_387 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Enquiry Tab ", -1
/* HOISTED */
);

var _hoisted_388 = {
  "class": "card-body"
};
var _hoisted_389 = {
  "class": "card"
};

var _hoisted_390 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Campaign Enquiry", -1
/* HOISTED */
);

var _hoisted_391 = {
  "class": "card-body"
};
var _hoisted_392 = {
  "class": "card-body"
};
var _hoisted_393 = {
  "class": "row"
};
var _hoisted_394 = {
  "class": "form-group col-md-3"
};
var _hoisted_395 = {
  "class": "form-check"
};

var _hoisted_396 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Campaign Enquiry ", -1
/* HOISTED */
);

var _hoisted_397 = {
  "class": "form-group col-md-3"
};
var _hoisted_398 = {
  "class": "form-check"
};

var _hoisted_399 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Export ", -1
/* HOISTED */
);

var _hoisted_400 = {
  "class": "card"
};

var _hoisted_401 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Quick Enquiry", -1
/* HOISTED */
);

var _hoisted_402 = {
  "class": "card-body"
};
var _hoisted_403 = {
  "class": "card-body"
};
var _hoisted_404 = {
  "class": "row"
};
var _hoisted_405 = {
  "class": "form-group col-md-3"
};
var _hoisted_406 = {
  "class": "form-check"
};

var _hoisted_407 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Quick Enquiry ", -1
/* HOISTED */
);

var _hoisted_408 = {
  "class": "form-group col-md-3"
};
var _hoisted_409 = {
  "class": "form-check"
};

var _hoisted_410 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " export ", -1
/* HOISTED */
);

var _hoisted_411 = {
  "class": "form-group col-md-3"
};
var _hoisted_412 = {
  "class": "form-check"
};

var _hoisted_413 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " edit ", -1
/* HOISTED */
);

var _hoisted_414 = {
  "class": "card"
};

var _hoisted_415 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, "Aur Employee", -1
/* HOISTED */
);

var _hoisted_416 = {
  "class": "card-body"
};
var _hoisted_417 = {
  "class": "form-check"
};

var _hoisted_418 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Employee Tab ", -1
/* HOISTED */
);

var _hoisted_419 = {
  "class": "card-body"
};
var _hoisted_420 = {
  "class": "card"
};

var _hoisted_421 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "card-header"
}, "Employee", -1
/* HOISTED */
);

var _hoisted_422 = {
  "class": "card-body"
};
var _hoisted_423 = {
  "class": "card-body"
};
var _hoisted_424 = {
  "class": "row"
};
var _hoisted_425 = {
  "class": "form-group col-md-3"
};
var _hoisted_426 = {
  "class": "form-check"
};

var _hoisted_427 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Enable Employee Tab ", -1
/* HOISTED */
);

var _hoisted_428 = {
  "class": "form-group col-md-3"
};
var _hoisted_429 = {
  "class": "form-check"
};

var _hoisted_430 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " add ", -1
/* HOISTED */
);

var _hoisted_431 = {
  "class": "form-group col-md-3"
};
var _hoisted_432 = {
  "class": "form-check"
};

var _hoisted_433 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " delete ", -1
/* HOISTED */
);

var _hoisted_434 = {
  "class": "form-group col-md-3"
};
var _hoisted_435 = {
  "class": "form-check"
};

var _hoisted_436 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " update ", -1
/* HOISTED */
);

var _hoisted_437 = {
  "class": "form-group col-md-3"
};
var _hoisted_438 = {
  "class": "form-check"
};

var _hoisted_439 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label",
  "for": "defaultCheck1"
}, " Message Credentials Update ", -1
/* HOISTED */
);

var _hoisted_440 = {
  "class": "modal-footer"
};
var _hoisted_441 = {
  type: "submit",
  "class": "btn btn-success"
};
var _hoisted_442 = {
  type: "submit",
  "class": "btn btn-primary"
};
var _hoisted_443 = {
  "class": "modal fade",
  id: "SmsInfoModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalCenterTitle",
  "aria-hidden": "true"
};
var _hoisted_444 = {
  "class": "modal-dialog modal-dialog-centered modal-lg",
  role: "document"
};
var _hoisted_445 = {
  "class": "modal-content"
};
var _hoisted_446 = {
  "class": "modal-header"
};

var _hoisted_447 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "modal-title",
  id: "exampleModalLongTitle"
}, " Update SMS Info ", -1
/* HOISTED */
);

var _hoisted_448 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×", -1
/* HOISTED */
);

var _hoisted_449 = [_hoisted_448];
var _hoisted_450 = {
  "class": "modal-body"
};
var _hoisted_451 = {
  "class": "row"
};
var _hoisted_452 = {
  "class": "col-md-4"
};
var _hoisted_453 = {
  "class": "form-group"
};

var _hoisted_454 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "username",
  "class": "control-label"
}, "Username:", -1
/* HOISTED */
);

var _hoisted_455 = ["innerHTML"];
var _hoisted_456 = {
  "class": "col-md-4"
};
var _hoisted_457 = {
  "class": "form-group"
};

var _hoisted_458 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "api_key",
  "class": "control-label"
}, "Api Key:", -1
/* HOISTED */
);

var _hoisted_459 = ["innerHTML"];
var _hoisted_460 = {
  "class": "col-md-4"
};
var _hoisted_461 = {
  "class": "form-group"
};

var _hoisted_462 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "sender_id",
  "class": "control-label"
}, "Sender Id:", -1
/* HOISTED */
);

var _hoisted_463 = ["innerHTML"];
var _hoisted_464 = {
  "class": "row"
};
var _hoisted_465 = {
  "class": "col-md-4"
};
var _hoisted_466 = {
  "class": "form-group"
};

var _hoisted_467 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "total_sms",
  "class": "control-label"
}, "Total SMS:", -1
/* HOISTED */
);

var _hoisted_468 = ["innerHTML"];
var _hoisted_469 = {
  "class": "col-md-4"
};
var _hoisted_470 = {
  "class": "form-group"
};

var _hoisted_471 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "total_used_sms",
  "class": "control-label"
}, "Total Used SMS:", -1
/* HOISTED */
);

var _hoisted_472 = ["innerHTML"];
var _hoisted_473 = {
  "class": "col-md-4"
};
var _hoisted_474 = {
  "class": "form-group"
};

var _hoisted_475 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "total_left_sms",
  "class": "control-label"
}, "Total Left SMS:", -1
/* HOISTED */
);

var _hoisted_476 = ["innerHTML"];
var _hoisted_477 = {
  "class": "row"
};
var _hoisted_478 = {
  "class": "col-md-4"
};
var _hoisted_479 = {
  "class": "form-group"
};

var _hoisted_480 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "api_flag"
}, "Select API", -1
/* HOISTED */
);

var _hoisted_481 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: ""
}, "Select SMS API", -1
/* HOISTED */
);

var _hoisted_482 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "0"
}, "Nagpur", -1
/* HOISTED */
);

var _hoisted_483 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "SMS Horizon", -1
/* HOISTED */
);

var _hoisted_484 = [_hoisted_481, _hoisted_482, _hoisted_483];
var _hoisted_485 = ["innerHTML"];
var _hoisted_486 = {
  "class": "col-md-4"
};
var _hoisted_487 = {
  "class": "form-group"
};

var _hoisted_488 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "is_active"
}, "Is Active:", -1
/* HOISTED */
);

var _hoisted_489 = {
  "class": "custom-control custom-switch"
};

var _hoisted_490 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "custom-control-label",
  "for": "is_active"
}, null, -1
/* HOISTED */
);

var _hoisted_491 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-4"
}, null, -1
/* HOISTED */
);

var _hoisted_492 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-4"
})], -1
/* HOISTED */
);

var _hoisted_493 = {
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    placeholder: "search",
    "aria-label": "search",
    "aria-describedby": "basic-addon2",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.search = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-secondary",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.getResults();
    }),
    type: "button"
  }, " Search ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$data.access_level.add == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-default",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.newModal && $options.newModal.apply($options, arguments);
    })
  }, _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-header "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [_hoisted_17, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.users.data, function (user) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: user.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.contact_no), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.email), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.type), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.created_at), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.access_level.update == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.editModal(user);
      }
    }, _hoisted_21, 8
    /* PROPS */
    , _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.message_credentials_update == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      type: "button",
      "class": "btn btn-warning",
      onClick: function onClick($event) {
        return $options.SMSModal(user);
      }
    }, _hoisted_24, 8
    /* PROPS */
    , _hoisted_22)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level["delete"] == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 2,
      type: "button",
      "class": "btn btn-danger",
      onClick: function onClick($event) {
        return $options.deleteUser(user.id);
      }
    }, _hoisted_27, 8
    /* PROPS */
    , _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
    data: $data.users,
    onPaginationChangePage: $options.getResults,
    limit: 8,
    "show-disabled": true
  }, {
    "prev-nav": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29];
    }),
    "next-nav": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_30];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["data", "onPaginationChangePage"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-body ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_35, " Add New ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editmode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_36, " Update User's Info ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.editmode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "close",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _hoisted_38)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[93] || (_cache[93] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.editmode ? $options.updateUser() : $options.createUser();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.name = $event;
    }),
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Enter name",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('name')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]), $data.form.errors.has('name') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('name')
  }, null, 8
  /* PROPS */
  , _hoisted_44)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.email = $event;
    }),
    type: "text",
    name: "email",
    id: "email",
    placeholder: "Enter email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('email')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.email]]), $data.form.errors.has('email') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('email')
  }, null, 8
  /* PROPS */
  , _hoisted_48)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.contact_no = $event;
    }),
    type: "text",
    name: "contact_no",
    id: "contact_no",
    placeholder: "Enter contact no",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('contact_no')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.contact_no]]), $data.form.errors.has('contact_no') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('contact_no')
  }, null, 8
  /* PROPS */
  , _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.password = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('password')
    }]),
    id: "password",
    placeholder: "Passport"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), $data.form.errors.has('password') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('password')
  }, null, 8
  /* PROPS */
  , _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-header "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "class": "form-check-input",
    id: "dashboard",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.access_level.dashboard = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.dashboard]]), _hoisted_66])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "feedback",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.access_level.feedback = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.feedback]]), _hoisted_69])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "backup_links",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.access_level.backup_links = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.backup_links]]), _hoisted_72])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "backup",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.access_level.backup = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.backup]]), _hoisted_75])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "profile",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.access_level.profile = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.profile]]), _hoisted_78])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_registration_pos_offline_registration_tab",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_offline_registration_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_offline_registration_tab]]), _hoisted_83]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_88, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_show_tab",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.show_tab]]), _hoisted_92])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_update",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.update]]), _hoisted_95])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_export_option",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration["export"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration["export"]]]), _hoisted_98])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_show_message_form",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.show_message_form]]), _hoisted_101])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_pos_activation_update",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.pos_activation_update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.pos_activation_update]]), _hoisted_104])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_show_user_log_details",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.show_user_log_details = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.show_user_log_details]]), _hoisted_107])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_message_credentials_update",
    "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
      return $data.form.access_level.pos_offline_registration.pos_registration.message_credentials_update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.pos_registration.message_credentials_update]]), _hoisted_110])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_111, [_hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_115, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_registration_captain_app_show_tab",
    "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
      return $data.form.access_level.pos_offline_registration.captain_app.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.captain_app.show_tab]]), _hoisted_118])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "captain_app_update",
    "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
      return $data.form.access_level.pos_offline_registration.captain_app.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.captain_app.update]]), _hoisted_121])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "captain_app_show_message_form",
    "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
      return $data.form.access_level.pos_offline_registration.captain_app.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.captain_app.show_message_form]]), _hoisted_124])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_126, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "captain_app_history",
    "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
      return $data.form.access_level.pos_offline_registration.captain_app.history = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.captain_app.history]]), _hoisted_127])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_128, [_hoisted_129, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_130, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_131, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_132, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_133, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_134, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "kitchen_app_show_tab",
    "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
      return $data.form.access_level.pos_offline_registration.kitchen_app.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.kitchen_app.show_tab]]), _hoisted_135])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_136, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_137, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "kitchen_app_update",
    "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
      return $data.form.access_level.pos_offline_registration.kitchen_app.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.kitchen_app.update]]), _hoisted_138])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_139, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_140, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "kitchen_app_show_message_form",
    "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
      return $data.form.access_level.pos_offline_registration.kitchen_app.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.kitchen_app.show_message_form]]), _hoisted_141])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_142, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_143, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "kitchen_app_history",
    "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
      return $data.form.access_level.pos_offline_registration.kitchen_app.history = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_registration.kitchen_app.history]]), _hoisted_144])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_145, [_hoisted_146, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_147, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_148, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_offline_activation_tab",
    "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_offline_activation_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_offline_activation_tab]]), _hoisted_149]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_150, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_151, [_hoisted_152, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_153, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_154, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_155, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_156, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_157, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_activation_keys_show_tab",
    "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_activation_keys.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_activation_keys.show_tab]]), _hoisted_158])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_159, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_160, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_activation_keys_generate_new_key",
    "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_activation_keys.generate_new_key = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_activation_keys.generate_new_key]]), _hoisted_161])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_162, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_163, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_activation_keys_edit",
    "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_activation_keys.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_activation_keys.edit]]), _hoisted_164])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_165, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_166, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_activation_keys_show_message_form",
    "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_activation_keys.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_activation_keys.show_message_form]]), _hoisted_167])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_168, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_169, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_activation_keys_copy_option",
    "onUpdate:modelValue": _cache[34] || (_cache[34] = function ($event) {
      return $data.form.access_level.pos_offline_activation.pos_activation_keys.copy_option = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.pos_activation_keys.copy_option]]), _hoisted_170])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_171, [_hoisted_172, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_173, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_174, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_175, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_176, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_177, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_pos_registration_captain_app_show_tab",
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
      return $data.form.access_level.pos_offline_activation.captain_app.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.captain_app.show_tab]]), _hoisted_178])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_179, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_180, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_captain_app_edit",
    "onUpdate:modelValue": _cache[36] || (_cache[36] = function ($event) {
      return $data.form.access_level.pos_offline_activation.captain_app.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.captain_app.edit]]), _hoisted_181])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_182, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_183, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_captain_app_show_message_form",
    "onUpdate:modelValue": _cache[37] || (_cache[37] = function ($event) {
      return $data.form.access_level.pos_offline_activation.captain_app.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.captain_app.show_message_form]]), _hoisted_184])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_185, [_hoisted_186, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_187, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_188, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_189, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_190, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_191, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_kitchen_app_show_tab",
    "onUpdate:modelValue": _cache[38] || (_cache[38] = function ($event) {
      return $data.form.access_level.pos_offline_activation.kitchen_app.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.kitchen_app.show_tab]]), _hoisted_192])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_193, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_194, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_kitchen_app_edit",
    "onUpdate:modelValue": _cache[39] || (_cache[39] = function ($event) {
      return $data.form.access_level.pos_offline_activation.kitchen_app.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.kitchen_app.edit]]), _hoisted_195])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_196, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_197, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_offline_activation_kitchen_app_show_message_form",
    "onUpdate:modelValue": _cache[40] || (_cache[40] = function ($event) {
      return $data.form.access_level.pos_offline_activation.kitchen_app.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_offline_activation.kitchen_app.show_message_form]]), _hoisted_198])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_199, [_hoisted_200, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_201, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_202, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_203, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_204, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_enabled_promocode_offline_tab",
    "onUpdate:modelValue": _cache[41] || (_cache[41] = function ($event) {
      return $data.form.access_level.promocode_offline.enabled_promocode_offline_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.enabled_promocode_offline_tab]]), _hoisted_205])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_206, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_207, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_promocode_pos",
    "onUpdate:modelValue": _cache[42] || (_cache[42] = function ($event) {
      return $data.form.access_level.promocode_offline.promocode_history = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.promocode_history]]), _hoisted_208])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_209, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_210, [_hoisted_211, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_212, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_213, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_214, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_215, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_216, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_promocode_pos_show_tab",
    "onUpdate:modelValue": _cache[43] || (_cache[43] = function ($event) {
      return $data.form.access_level.promocode_offline.promocode_pos.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.promocode_pos.show_tab]]), _hoisted_217])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_218, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_219, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_promocode_pos_add",
    "onUpdate:modelValue": _cache[44] || (_cache[44] = function ($event) {
      return $data.form.access_level.promocode_offline.promocode_pos.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.promocode_pos.add]]), _hoisted_220])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_221, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_222, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_promocode_pos_edit",
    "onUpdate:modelValue": _cache[45] || (_cache[45] = function ($event) {
      return $data.form.access_level.promocode_offline.promocode_pos.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.promocode_pos.edit]]), _hoisted_223])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_224, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_225, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "promocode_offline_promocode_pos_delete",
    "onUpdate:modelValue": _cache[46] || (_cache[46] = function ($event) {
      return $data.form.access_level.promocode_offline.promocode_pos["delete"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.promocode_offline.promocode_pos["delete"]]]), _hoisted_226])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_227, [_hoisted_228, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_229, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_230, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_231, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_232, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_plan_and_payment_enabled_pos_plan",
    "onUpdate:modelValue": _cache[47] || (_cache[47] = function ($event) {
      return $data.form.access_level.pos_plan_and_payment.enabled_pos_plan = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_plan_and_payment.enabled_pos_plan]]), _hoisted_233])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_234, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_235, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_plan_and_payment_plan",
    "onUpdate:modelValue": _cache[48] || (_cache[48] = function ($event) {
      return $data.form.access_level.pos_plan_and_payment.plan = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_plan_and_payment.plan]]), _hoisted_236])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_237, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_238, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "pos_plan_and_payment_payment",
    "onUpdate:modelValue": _cache[49] || (_cache[49] = function ($event) {
      return $data.form.access_level.pos_plan_and_payment.payment = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.pos_plan_and_payment.payment]]), _hoisted_239])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_240, [_hoisted_241, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_242, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_243, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "tmchannel_enabled_tmchannel",
    "onUpdate:modelValue": _cache[50] || (_cache[50] = function ($event) {
      return $data.form.access_level.tmchannel.enabled_tmchannel = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.tmchannel.enabled_tmchannel]]), _hoisted_244]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_245, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_246, [_hoisted_247, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_248, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_249, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_250, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_251, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_252, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "tmchannel_activated_users_show_tab",
    "onUpdate:modelValue": _cache[51] || (_cache[51] = function ($event) {
      return $data.form.access_level.tmchannel.activated_users.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.tmchannel.activated_users.show_tab]]), _hoisted_253])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_254, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_255, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "tmchannel_activated_users_add",
    "onUpdate:modelValue": _cache[52] || (_cache[52] = function ($event) {
      return $data.form.access_level.tmchannel.activated_users.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.tmchannel.activated_users.add]]), _hoisted_256])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_257, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_258, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "tmchannel_activated_users_update",
    "onUpdate:modelValue": _cache[53] || (_cache[53] = function ($event) {
      return $data.form.access_level.tmchannel.activated_users.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.tmchannel.activated_users.update]]), _hoisted_259])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_260, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_261, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "tmchannel_activated_users_show_message_form",
    "onUpdate:modelValue": _cache[54] || (_cache[54] = function ($event) {
      return $data.form.access_level.tmchannel.activated_users.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.tmchannel.activated_users.show_message_form]]), _hoisted_262])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_263, [_hoisted_264, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_265, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_266, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_enabled_atlantic_pos",
    "onUpdate:modelValue": _cache[55] || (_cache[55] = function ($event) {
      return $data.form.access_level.atlantic_pos.enabled_atlantic_pos = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.enabled_atlantic_pos]]), _hoisted_267]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_268, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_269, [_hoisted_270, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_271, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_272, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_273, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_274, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_275, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_activated_users_show_tab",
    "onUpdate:modelValue": _cache[56] || (_cache[56] = function ($event) {
      return $data.form.access_level.atlantic_pos.activated_users.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.activated_users.show_tab]]), _hoisted_276])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_277, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_278, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_activated_users_add",
    "onUpdate:modelValue": _cache[57] || (_cache[57] = function ($event) {
      return $data.form.access_level.atlantic_pos.activated_users.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.activated_users.add]]), _hoisted_279])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_280, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_281, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_activated_users_update",
    "onUpdate:modelValue": _cache[58] || (_cache[58] = function ($event) {
      return $data.form.access_level.atlantic_pos.activated_users.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.activated_users.update]]), _hoisted_282])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_283, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_284, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_activated_users_show_message_form",
    "onUpdate:modelValue": _cache[59] || (_cache[59] = function ($event) {
      return $data.form.access_level.atlantic_pos.activated_users.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.activated_users.show_message_form]]), _hoisted_285])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_286, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_287, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_activated_users_payment_settings",
    "onUpdate:modelValue": _cache[60] || (_cache[60] = function ($event) {
      return $data.form.access_level.atlantic_pos.activated_users.payment_settings = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.activated_users.payment_settings]]), _hoisted_288])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_289, [_hoisted_290, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_291, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_292, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_293, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_294, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_295, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_pos_plus_tmchannel_show_tab",
    "onUpdate:modelValue": _cache[61] || (_cache[61] = function ($event) {
      return $data.form.access_level.atlantic_pos.atlantic_pos_plus_tmchannel.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.atlantic_pos_plus_tmchannel.show_tab]]), _hoisted_296])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_297, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_298, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_pos_plus_tmchannel_add",
    "onUpdate:modelValue": _cache[62] || (_cache[62] = function ($event) {
      return $data.form.access_level.atlantic_pos.atlantic_pos_plus_tmchannel.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.atlantic_pos_plus_tmchannel.add]]), _hoisted_299])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_300, [_hoisted_301, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_302, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_303, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_304, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_305, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_306, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_pos_plus_demo_request_show_tab",
    "onUpdate:modelValue": _cache[63] || (_cache[63] = function ($event) {
      return $data.form.access_level.atlantic_pos.demo_request.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.demo_request.show_tab]]), _hoisted_307])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_308, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_309, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_demo_request_export",
    "onUpdate:modelValue": _cache[64] || (_cache[64] = function ($event) {
      return $data.form.access_level.atlantic_pos.demo_request["export"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.demo_request["export"]]]), _hoisted_310])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_311, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_312, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_demo_request_view",
    "onUpdate:modelValue": _cache[65] || (_cache[65] = function ($event) {
      return $data.form.access_level.atlantic_pos.demo_request.view = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.demo_request.view]]), _hoisted_313])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_314, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_315, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_demo_request_show_message_form",
    "onUpdate:modelValue": _cache[66] || (_cache[66] = function ($event) {
      return $data.form.access_level.atlantic_pos.demo_request.show_message_form = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.demo_request.show_message_form]]), _hoisted_316])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_317, [_hoisted_318, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_319, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_320, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_321, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_322, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_323, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_pos_plus_support_queries_show_tab",
    "onUpdate:modelValue": _cache[67] || (_cache[67] = function ($event) {
      return $data.form.access_level.atlantic_pos.support_queries.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.support_queries.show_tab]]), _hoisted_324])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_325, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_326, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_support_queries_edit",
    "onUpdate:modelValue": _cache[68] || (_cache[68] = function ($event) {
      return $data.form.access_level.atlantic_pos.support_queries.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.support_queries.edit]]), _hoisted_327])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_328, [_hoisted_329, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_330, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_331, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_332, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_333, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_334, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_pos_atlantic_notification_show_tab",
    "onUpdate:modelValue": _cache[69] || (_cache[69] = function ($event) {
      return $data.form.access_level.atlantic_pos.atlantic_notification.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.atlantic_notification.show_tab]]), _hoisted_335])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_336, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_337, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_notification_add",
    "onUpdate:modelValue": _cache[70] || (_cache[70] = function ($event) {
      return $data.form.access_level.atlantic_pos.atlantic_notification.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.atlantic_notification.add]]), _hoisted_338])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_339, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_340, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "atlantic_pos_atlantic_notification_edit",
    "onUpdate:modelValue": _cache[71] || (_cache[71] = function ($event) {
      return $data.form.access_level.atlantic_pos.atlantic_notification.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.atlantic_pos.atlantic_notification.edit]]), _hoisted_341])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_342, [_hoisted_343, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_344, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_345, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_346, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_347, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "sms_send_sms",
    "onUpdate:modelValue": _cache[72] || (_cache[72] = function ($event) {
      return $data.form.access_level.sms.send_sms = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.sms.send_sms]]), _hoisted_348])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_349, [_hoisted_350, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_351, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_352, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_enabled_links_tab",
    "onUpdate:modelValue": _cache[73] || (_cache[73] = function ($event) {
      return $data.form.access_level.links.enabled_links_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.enabled_links_tab]]), _hoisted_353]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_354, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_355, [_hoisted_356, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_357, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_358, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_359, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_360, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_361, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_links_show_tab",
    "onUpdate:modelValue": _cache[74] || (_cache[74] = function ($event) {
      return $data.form.access_level.links.pos_links.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_links.show_tab]]), _hoisted_362])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_363, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_364, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_links_add",
    "onUpdate:modelValue": _cache[75] || (_cache[75] = function ($event) {
      return $data.form.access_level.links.pos_links.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_links.add]]), _hoisted_365])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_366, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_367, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_links_edit",
    "onUpdate:modelValue": _cache[76] || (_cache[76] = function ($event) {
      return $data.form.access_level.links.pos_links.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_links.edit]]), _hoisted_368])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_369, [_hoisted_370, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_371, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_372, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_373, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_374, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_375, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_demo_links_show_tab",
    "onUpdate:modelValue": _cache[77] || (_cache[77] = function ($event) {
      return $data.form.access_level.links.pos_demo_links.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_demo_links.show_tab]]), _hoisted_376])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_377, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_378, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_demo_links_add",
    "onUpdate:modelValue": _cache[78] || (_cache[78] = function ($event) {
      return $data.form.access_level.links.pos_demo_links.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_demo_links.add]]), _hoisted_379])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_380, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_381, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "links_pos_demo_links_edit",
    "onUpdate:modelValue": _cache[79] || (_cache[79] = function ($event) {
      return $data.form.access_level.links.pos_demo_links.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.links.pos_demo_links.edit]]), _hoisted_382])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_383, [_hoisted_384, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_385, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_386, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_enabled_enquiry_tab",
    "onUpdate:modelValue": _cache[80] || (_cache[80] = function ($event) {
      return $data.form.access_level.enquiry.enabled_enquiry_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.enabled_enquiry_tab]]), _hoisted_387]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_388, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_389, [_hoisted_390, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_391, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_392, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_393, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_394, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_395, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_campaign_enquiry_show_tab",
    "onUpdate:modelValue": _cache[81] || (_cache[81] = function ($event) {
      return $data.form.access_level.enquiry.campaign_enquiry.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.campaign_enquiry.show_tab]]), _hoisted_396])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_397, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_398, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_campaign_enquiry_export",
    "onUpdate:modelValue": _cache[82] || (_cache[82] = function ($event) {
      return $data.form.access_level.enquiry.campaign_enquiry["export"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.campaign_enquiry["export"]]]), _hoisted_399])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_400, [_hoisted_401, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_402, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_403, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_404, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_405, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_406, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_quick_enquiry_show_tab",
    "onUpdate:modelValue": _cache[83] || (_cache[83] = function ($event) {
      return $data.form.access_level.enquiry.quick_enquiry.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.quick_enquiry.show_tab]]), _hoisted_407])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_408, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_409, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_quick_enquiry_export",
    "onUpdate:modelValue": _cache[84] || (_cache[84] = function ($event) {
      return $data.form.access_level.enquiry.quick_enquiry["export"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.quick_enquiry["export"]]]), _hoisted_410])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_411, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_412, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "enquiry_quick_enquiry_edit",
    "onUpdate:modelValue": _cache[85] || (_cache[85] = function ($event) {
      return $data.form.access_level.enquiry.quick_enquiry.edit = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.enquiry.quick_enquiry.edit]]), _hoisted_413])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_414, [_hoisted_415, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_416, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_417, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_enabled_employee_tab",
    "onUpdate:modelValue": _cache[86] || (_cache[86] = function ($event) {
      return $data.form.access_level.aur_employee.enabled_employee_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.enabled_employee_tab]]), _hoisted_418]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_419, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_420, [_hoisted_421, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_422, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_423, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_424, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_425, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_426, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_employee_show_tab",
    "onUpdate:modelValue": _cache[87] || (_cache[87] = function ($event) {
      return $data.form.access_level.aur_employee.employee.show_tab = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.employee.show_tab]]), _hoisted_427])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_428, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_429, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_employee_add",
    "onUpdate:modelValue": _cache[88] || (_cache[88] = function ($event) {
      return $data.form.access_level.aur_employee.employee.add = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.employee.add]]), _hoisted_430])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_431, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_432, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_employee_delete",
    "onUpdate:modelValue": _cache[89] || (_cache[89] = function ($event) {
      return $data.form.access_level.aur_employee.employee["delete"] = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.employee["delete"]]]), _hoisted_433])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_434, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_435, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_employee_update",
    "onUpdate:modelValue": _cache[90] || (_cache[90] = function ($event) {
      return $data.form.access_level.aur_employee.employee.update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.employee.update]]), _hoisted_436])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_437, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_438, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input",
    type: "checkbox",
    id: "aur_employee_employee_message_credentials_update",
    "onUpdate:modelValue": _cache[91] || (_cache[91] = function ($event) {
      return $data.form.access_level.aur_employee.employee.message_credentials_update = $event;
    }),
    name: "checkbox-1",
    value: "1",
    "unchecked-value": "0"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.access_level.aur_employee.employee.message_credentials_update]]), _hoisted_439])])])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-body ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_440, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    onClick: _cache[92] || (_cache[92] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, " Close "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_441, " Update ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.editmode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_442, " Create ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editmode]])])], 32
  /* HYDRATE_EVENTS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_443, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_444, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_445, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_446, [_hoisted_447, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "close",
    onClick: _cache[94] || (_cache[94] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _hoisted_449)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_450, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_451, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_452, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_453, [_hoisted_454, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[95] || (_cache[95] = function ($event) {
      return $data.smsInfoForm.username = $event;
    }),
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Enter username",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('username')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.username]]), $data.form.errors.has('username') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('username')
  }, null, 8
  /* PROPS */
  , _hoisted_455)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_456, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_457, [_hoisted_458, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[96] || (_cache[96] = function ($event) {
      return $data.smsInfoForm.api_key = $event;
    }),
    type: "text",
    name: "api_key",
    id: "api_key",
    placeholder: "Enter api key",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('api_key')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.api_key]]), $data.smsInfoForm.errors.has('api_key') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('api_key')
  }, null, 8
  /* PROPS */
  , _hoisted_459)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_460, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_461, [_hoisted_462, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[97] || (_cache[97] = function ($event) {
      return $data.smsInfoForm.sender_id = $event;
    }),
    type: "text",
    name: "sender_id",
    id: "sender_id",
    placeholder: "Enter sender id",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('sender_id')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.sender_id]]), $data.smsInfoForm.errors.has('sender_id') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('sender_id')
  }, null, 8
  /* PROPS */
  , _hoisted_463)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_464, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_465, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_466, [_hoisted_467, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[98] || (_cache[98] = function ($event) {
      return $data.smsInfoForm.total_sms = $event;
    }),
    type: "text",
    name: "total_sms",
    id: "total_sms",
    placeholder: "Total SMS",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('total_sms')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.total_sms]]), $data.smsInfoForm.errors.has('total_sms') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('total_sms')
  }, null, 8
  /* PROPS */
  , _hoisted_468)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_469, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_470, [_hoisted_471, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[99] || (_cache[99] = function ($event) {
      return $data.smsInfoForm.total_used_sms = $event;
    }),
    type: "text",
    name: "total_used_sms",
    id: "total_used_sms",
    placeholder: "Total Used SMS",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('total_used_sms')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.total_used_sms]]), $data.smsInfoForm.errors.has('total_used_sms') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('total_used_sms')
  }, null, 8
  /* PROPS */
  , _hoisted_472)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_473, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_474, [_hoisted_475, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[100] || (_cache[100] = function ($event) {
      return $data.smsInfoForm.total_left_sms = $event;
    }),
    type: "text",
    name: "total_left_sms",
    id: "total_left_sms",
    placeholder: "Total Left SMS",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('total_left_sms')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.smsInfoForm.total_left_sms]]), $data.smsInfoForm.errors.has('total_left_sms') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('total_left_sms')
  }, null, 8
  /* PROPS */
  , _hoisted_476)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_477, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_478, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_479, [_hoisted_480, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.smsInfoForm.errors.has('api_flag')
    }]),
    name: "api_flag",
    id: "api_flag",
    "onUpdate:modelValue": _cache[101] || (_cache[101] = function ($event) {
      return $data.smsInfoForm.api_flag = $event;
    })
  }, _hoisted_484, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.smsInfoForm.api_flag]]), $data.smsInfoForm.errors.has('api_flag') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.smsInfoForm.errors.get('api_flag')
  }, null, 8
  /* PROPS */
  , _hoisted_485)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_486, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_487, [_hoisted_488, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_489, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[102] || (_cache[102] = function ($event) {
      return $data.smsInfoForm.is_active = $event;
    }),
    name: "is_active",
    "class": "custom-control-input",
    id: "is_active"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.smsInfoForm.is_active]]), _hoisted_490])])]), _hoisted_491]), _hoisted_492])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_493, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-secondary",
    onClick: _cache[103] || (_cache[103] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, " Close "), $data.editmodeSMSInfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    onClick: _cache[104] || (_cache[104] = function ($event) {
      return $options.updateSMSInfo();
    }),
    "class": "btn btn-primary"
  }, " Save changes ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaravelVuePagination)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _sfc_main$1 = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange() {
      if (this.limit === -1) {
        return 0;
      }
      if (this.limit === 0) {
        return this.lastPage;
      }
      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function(i2) {
        if (l) {
          if (i2 - l === 2) {
            pages.push(l + 1);
          } else if (i2 - l !== 1) {
            pages.push("...");
          }
        }
        pages.push(i2);
        l = i2;
      });
      return pages;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(page) {
      if (page === "...") {
        return;
      }
      this.$emit("pagination-change-page", page);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.nextPage();
        }
      },
      pageButtonEvents: (page) => ({
        click: (e) => {
          e.preventDefault();
          this.selectPage(page);
        }
      })
    });
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  inheritAttrs: false,
  emits: ["pagination-change-page"],
  components: {
    RenderlessLaravelVuePagination: _sfc_main$1
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit("pagination-change-page", page);
    }
  }
};
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xAB", -1);
const _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_5 = ["tabindex"];
const _hoisted_6 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xBB", -1);
const _hoisted_7 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderlessLaravelVuePagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessLaravelVuePagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RenderlessLaravelVuePagination, {
    data: $props.data,
    limit: $props.limit,
    "show-disabled": $props.showDisabled,
    size: $props.size,
    align: $props.align,
    onPaginationChangePage: $options.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
      slotProps.computed.total > slotProps.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, _ctx.$attrs, {
        class: ["pagination", {
          "pagination-sm": slotProps.size == "small",
          "pagination-lg": slotProps.size == "large",
          "justify-content-center": slotProps.align == "center",
          "justify-content-end": slotProps.align == "right"
        }]
      }), [
        slotProps.computed.prevPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-prev-nav", { "disabled": !slotProps.computed.prevPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !slotProps.computed.prevPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.prevButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev-nav", {}, () => [
              _hoisted_2,
              _hoisted_3
            ])
          ], 16, _hoisted_1)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(slotProps.computed.pageRange, (page, key) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-page-nav", { "active": page == slotProps.computed.currentPage }]),
            key
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
              class: "page-link",
              href: "#"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.pageButtonEvents(page))), [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page) + " ", 1),
              page == slotProps.computed.currentPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "(current)")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
            ], 16)
          ], 2);
        }), 128)),
        slotProps.computed.nextPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-next-nav", { "disabled": !slotProps.computed.nextPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !slotProps.computed.nextPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.nextButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next-nav", {}, () => [
              _hoisted_6,
              _hoisted_7
            ])
          ], 16, _hoisted_5)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
    ]),
    _: 3
  }, 8, ["data", "limit", "show-disabled", "size", "align", "onPaginationChangePage"]);
}
var LaravelVuePagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Errors": () => (/* binding */ y),
/* harmony export */   "Form": () => (/* binding */ g),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||(axios__WEBPACK_IMPORTED_MODULE_0___default())).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./resources/js/components/UserComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/UserComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserComponent_vue_vue_type_template_id_7f050fd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=7f050fd2 */ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js */ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserComponent_vue_vue_type_template_id_7f050fd2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UserComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserComponent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserComponent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserComponent_vue_vue_type_template_id_7f050fd2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserComponent_vue_vue_type_template_id_7f050fd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserComponent.vue?vue&type=template&id=7f050fd2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2");


/***/ })

}]);