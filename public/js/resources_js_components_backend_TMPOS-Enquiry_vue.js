"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_TMPOS-Enquiry_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
      // users empty array
      ImportExports: false,
      ImportExport: false,
      editmode: false,
      EnquiryLIst: {
        data: []
      },
      isLoad: false,
      page: 1,
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        id: "",
        mobile: "",
        owner_name: "",
        hotel_name: "",
        address: "",
        city: "",
        email: "",
        message: "",
        enquiry_count: "",
        date_time: ""
      }),
      exportForm: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        exportType: "",
        dateRange: ""
      }),
      smsForm: new vform__WEBPACK_IMPORTED_MODULE_0__["default"]({
        api_flag: "",
        mobile: "",
        smsText: ""
      }),
      access_level: {}
    };
  },
  methods: {
    messageModel: function messageModel(user) {
      this.smsForm.mobile = user.mobile;
      $("#smsFormModal").modal("show");
    },
    loadEnquiry: function loadEnquiry() {
      var _this = this;

      this.isLoad = true;
      axios.get("api/tmpos-enquiry").then(function (response) {
        _this.EnquiryLIst = response.data;
        _this.isLoad = false;
      });
    },
    // Our method to GET results from a Laravel endpoint
    getResults: function getResults() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.page = page;
      this.isLoad = true;
      axios.get("api/tmpos-enquiry?q=" + this.search + "&page=" + page).then(function (response) {
        _this2.EnquiryLIst = response.data;
        _this2.isLoad = false;
      });
    },
    viewModal: function viewModal(user) {
      this.form.fill(user);
      $("#newModal").modal("show");
    },
    Export: function Export() {
      this.ImportExport = false;
      $("#ImportExportModal").modal("show");
    },
    exportUser: function exportUser(e) {
      var _this3 = this;

      this.exportForm.post("/enquiry-export").then(function (_ref) {
        var data = _ref.data;
        var url = "enquiry-export?" + $.param(_this3.exportForm);
        window.location = url;
        $("#ImportExportModal").modal("hide");
      });
    },
    closeModal: function closeModal() {
      $("#newModal").modal("hide");
    }
  },
  mounted: function mounted() {
    this.loadEnquiry();
    this.access_level = window.gate.user.access_level.atlantic_pos.demo_request; // console.log(this.access_level);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-wrapper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"content-header\"><div class=\"container-fluid\"><div class=\"row mb-2\"><div class=\"col-sm-6\"><h1>TMPOS</h1></div><div class=\"col-sm-6\"><ol class=\"breadcrumb float-sm-right\"><li class=\"breadcrumb-item\"><a href=\"#\">TMPOS</a></li><li class=\"breadcrumb-item active\">Enquiry</li></ol></div></div></div><!-- /.container-fluid --></section>", 1);

var _hoisted_3 = {
  "class": "content"
};
var _hoisted_4 = {
  "class": "container-fluid"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-12"
};
var _hoisted_7 = {
  "class": "input-group mb-3 col-md-4"
};
var _hoisted_8 = {
  "class": "input-group-append"
};
var _hoisted_9 = {
  "class": "card"
};
var _hoisted_10 = {
  "class": "card-header"
};
var _hoisted_11 = {
  "class": "row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Enquiry")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "col-md-2"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Export ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-cloud-download-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = [_hoisted_14, _hoisted_15];
var _hoisted_17 = {
  style: {
    "overflow-x": "auto"
  },
  "class": "card-body p-0 table-responsive"
};
var _hoisted_18 = {
  "class": "table"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "ID"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Hotel Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Mobile"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Email</th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "City"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th>Address</th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No.of times"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "btn-group",
  role: "group",
  "aria-label": "Basic example"
};
var _hoisted_21 = ["onClick"];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-eye"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = [_hoisted_22];
var _hoisted_24 = ["onClick"];

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-paper-plane"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = [_hoisted_25];

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "9"
}, "No data found", -1
/* HOISTED */
);

var _hoisted_28 = [_hoisted_27];
var _hoisted_29 = {
  key: 0,
  "class": "overlay"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-2x fa-sync-alt fa-spin"
}, null, -1
/* HOISTED */
);

var _hoisted_31 = [_hoisted_30];
var _hoisted_32 = {
  "class": "card-footer clearfix"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "< Previous", -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Next >", -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "modal fade",
  id: "newModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "addNewTitle",
  "aria-hidden": "true"
};
var _hoisted_36 = {
  "class": "modal-dialog modal-dialog-centered modal-lg",
  role: "document"
};
var _hoisted_37 = {
  "class": "modal-content"
};
var _hoisted_38 = {
  "class": "modal-header"
};
var _hoisted_39 = {
  "class": "modal-title",
  id: "addNewLabel"
};
var _hoisted_40 = {
  "class": "modal-title",
  id: "addNewLabel"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×", -1
/* HOISTED */
);

var _hoisted_42 = [_hoisted_41];
var _hoisted_43 = {
  "class": "modal-body"
};
var _hoisted_44 = {
  "class": "row"
};
var _hoisted_45 = {
  "class": "col-md-4"
};

var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "mobile"
}, "Tracking Id:", -1
/* HOISTED */
);

var _hoisted_47 = ["disabled"];
var _hoisted_48 = ["innerHTML"];
var _hoisted_49 = {
  "class": "col-md-4"
};
var _hoisted_50 = {
  "class": "form-group"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "owner_name"
}, "Owner Name:", -1
/* HOISTED */
);

var _hoisted_52 = ["innerHTML"];
var _hoisted_53 = {
  "class": "col-md-4"
};
var _hoisted_54 = {
  "class": "form-group"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "hotel_name"
}, "Hotel Name:", -1
/* HOISTED */
);

var _hoisted_56 = ["innerHTML"];
var _hoisted_57 = {
  "class": "row"
};
var _hoisted_58 = {
  "class": "col-md-4"
};
var _hoisted_59 = {
  "class": "form-group"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "city"
}, "City:", -1
/* HOISTED */
);

var _hoisted_61 = ["innerHTML"];
var _hoisted_62 = {
  "class": "col-md-4"
};
var _hoisted_63 = {
  "class": "form-group"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Email:", -1
/* HOISTED */
);

var _hoisted_65 = ["innerHTML"];
var _hoisted_66 = {
  "class": "col-md-4"
};
var _hoisted_67 = {
  "class": "form-group"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "enquiry_count"
}, "No.of times:", -1
/* HOISTED */
);

var _hoisted_69 = ["innerHTML"];
var _hoisted_70 = {
  "class": "row"
};
var _hoisted_71 = {
  "class": "col-md-6"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "address"
}, "Address:", -1
/* HOISTED */
);

var _hoisted_73 = ["innerHTML"];
var _hoisted_74 = {
  "class": "col-md-6"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "message"
}, "Message:", -1
/* HOISTED */
);

var _hoisted_76 = ["innerHTML"];
var _hoisted_77 = {
  "class": "modal-footer"
};
var _hoisted_78 = {
  "class": "modal fade",
  id: "ImportExportModal",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "ImportExportModal",
  "aria-hidden": "true"
};
var _hoisted_79 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_80 = {
  "class": "modal-content"
};
var _hoisted_81 = {
  "class": "modal-header"
};
var _hoisted_82 = {
  "class": "modal-title",
  id: "addNewLabel"
};
var _hoisted_83 = {
  "class": "modal-title",
  id: "addNewLabel"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "close",
  "data-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×")], -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "modal-body"
};
var _hoisted_86 = {
  "class": "form-group"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"\">Export Type</option><option value=\"xlsx\">xlsx</option><option value=\"xls\">xls</option><option value=\"csv\">csv</option><option value=\"pdf\">pdf</option><option value=\"ods\">ods</option><option value=\"tsv\">tsv</option><option value=\"html\">html</option>", 8);

var _hoisted_95 = [_hoisted_87];
var _hoisted_96 = ["innerHTML"];
var _hoisted_97 = {
  "class": "form-group"
};
var _hoisted_98 = ["innerHTML"];
var _hoisted_99 = {
  "class": "modal-footer"
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn btn-secondary",
  "data-dismiss": "modal"
}, " Close ", -1
/* HOISTED */
);

var _hoisted_101 = {
  type: "submit",
  "class": "btn btn-primary"
};
var _hoisted_102 = {
  type: "submit",
  "class": "btn btn-primary"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("pagination");

  var _component_VueCtkDateTimePicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueCtkDateTimePicker");

  var _component_common_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("common-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    placeholder: "search",
    "aria-label": "search",
    "aria-describedby": "basic-addon2",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.search = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.search]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-secondary",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.getResults && $options.getResults.apply($options, arguments);
    }),
    type: "button"
  }, " Search ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [$data.access_level["export"] == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "button",
    "class": "btn btn-outline-secondary pull-right",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.Export && $options.Export.apply($options, arguments);
    })
  }, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-header "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.EnquiryLIst.data, function (user, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: user.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.EnquiryLIst.from + index), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.owner_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.hotel_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.mobile), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>{{user.email}}</td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.city), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>{{user.address }}</td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.date_time), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.enquiry_count), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [$data.access_level.view == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 0,
      type: "button",
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.viewModal(user);
      }
    }, _hoisted_23, 8
    /* PROPS */
    , _hoisted_21)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.access_level.show_message_form == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: 1,
      type: "button",
      "class": "btn btn-secondary",
      onClick: function onClick($event) {
        return $options.messageModel(user);
      }
    }, _hoisted_26, 8
    /* PROPS */
    , _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, _hoisted_28, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.EnquiryLIst.data.length]])])])]), $data.isLoad ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_pagination, {
    data: $data.EnquiryLIst,
    onPaginationChangePage: $options.getResults,
    limit: 5,
    "show-disabled": true
  }, {
    "prev-nav": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    "next-nav": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["data", "onPaginationChangePage"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card-body ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.card ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_39, " View ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editmode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_40, " Update Info ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.editmode]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "close",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _hoisted_42)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.mobile = $event;
    }),
    type: "text",
    name: "mobile",
    placeholder: "Enter mobile",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('mobile')
    }]),
    disabled: $data.editmode
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_47), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.mobile]]), $data.form.errors.has('mobile') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('mobile')
  }, null, 8
  /* PROPS */
  , _hoisted_48)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.owner_name = $event;
    }),
    type: "text",
    name: "owner_name",
    placeholder: "Enter owner name",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('owner_name')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.owner_name]]), $data.form.errors.has('owner_name') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('owner_name')
  }, null, 8
  /* PROPS */
  , _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.hotel_name = $event;
    }),
    type: "text",
    name: "hotel_name",
    placeholder: "Enter hotel name",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('hotel_name')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.hotel_name]]), $data.form.errors.has('hotel_name') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('hotel_name')
  }, null, 8
  /* PROPS */
  , _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.city = $event;
    }),
    type: "text",
    name: "city",
    placeholder: "Enter city",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('city')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.city]]), $data.form.errors.has('city') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('city')
  }, null, 8
  /* PROPS */
  , _hoisted_61)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.email = $event;
    }),
    type: "text",
    name: "email",
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
  , _hoisted_65)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.enquiry_count = $event;
    }),
    type: "text",
    name: "enquiry_count",
    placeholder: "Enter enquiry count",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('enquiry_count')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.enquiry_count]]), $data.form.errors.has('enquiry_count') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('enquiry_count')
  }, null, 8
  /* PROPS */
  , _hoisted_69)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.address = $event;
    }),
    name: "address",
    placeholder: "Enter address",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('address')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.address]]), $data.form.errors.has('address') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('address')
  }, null, 8
  /* PROPS */
  , _hoisted_73)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $data.form.message = $event;
    }),
    name: "message",
    placeholder: "Enter message",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.has('message')
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.message]]), $data.form.errors.has('message') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.form.errors.get('message')
  }, null, 8
  /* PROPS */
  , _hoisted_76)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-danger",
    onClick: _cache[12] || (_cache[12] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, " Close ")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_82, " Export ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.ImportExport]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_83, " Import ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.ImportExport]]), _hoisted_84]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.ImportExport ? _ctx.importUser() : $options.exportUser();
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.exportForm.errors.has('exportType')
    }]),
    id: "sel1",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $data.exportForm.exportType = $event;
    }),
    name: "exportType"
  }, _hoisted_95, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.exportForm.exportType]]), $data.exportForm.errors.has('exportType') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.exportForm.errors.get('exportType')
  }, null, 8
  /* PROPS */
  , _hoisted_96)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.ImportExport]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueCtkDateTimePicker, {
    modelValue: $data.exportForm.dateRange,
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $data.exportForm.dateRange = $event;
    }),
    range: true,
    onlyDate: true,
    inline: false,
    noLabel: false,
    error: $data.exportForm.errors.has('dateRange')
  }, null, 8
  /* PROPS */
  , ["modelValue", "error"]), $data.exportForm.errors.has('dateRange') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "text-danger",
    innerHTML: $data.exportForm.errors.get('dateRange')
  }, null, 8
  /* PROPS */
  , _hoisted_98)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.ImportExport]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [_hoisted_100, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_101, " Export ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.ImportExport]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_102, " Import ", 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.ImportExport]])])], 32
  /* HYDRATE_EVENTS */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_common_form, {
    item: $data.smsForm
  }, null, 8
  /* PROPS */
  , ["item"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.container-fluid ")])]);
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

/***/ "./resources/js/components/backend/TMPOS-Enquiry.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/backend/TMPOS-Enquiry.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TMPOS_Enquiry_vue_vue_type_template_id_5c83457b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TMPOS-Enquiry.vue?vue&type=template&id=5c83457b */ "./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b");
/* harmony import */ var _TMPOS_Enquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TMPOS-Enquiry.vue?vue&type=script&lang=js */ "./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_TMBill_Admin2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TMPOS_Enquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TMPOS_Enquiry_vue_vue_type_template_id_5c83457b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/backend/TMPOS-Enquiry.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TMPOS_Enquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TMPOS_Enquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TMPOS-Enquiry.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TMPOS_Enquiry_vue_vue_type_template_id_5c83457b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TMPOS_Enquiry_vue_vue_type_template_id_5c83457b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TMPOS-Enquiry.vue?vue&type=template&id=5c83457b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/backend/TMPOS-Enquiry.vue?vue&type=template&id=5c83457b");


/***/ })

}]);