webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _libs_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/apollo */ "./src/libs/apollo.tsx");




var _jsxFileName = "/Users/chrisneven/Documents/Projects/2019/dooloo/dooloo-nextjs/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    query Stories {\n        story {\n            title\n\n            text\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var query = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var Home = function Home(_ref) {
  var userAgent = _ref.userAgent;

  var _useStoriesQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_8__["useStoriesQuery"])(),
      data = _useStoriesQuery.data;

  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Hello world! - user agent: ", userAgent, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: '/about',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Go to about-us"))), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data, null, 2)));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, userAgent;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
            return _context.abrupt("return", {
              userAgent: userAgent
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_libs_apollo__WEBPACK_IMPORTED_MODULE_9__["withApollo"])(Home));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-15hnh08-0"
})(["background:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary.dark;
});

/***/ })

})
//# sourceMappingURL=index.js.7d31020e561da2dc193e.hot-update.js.map