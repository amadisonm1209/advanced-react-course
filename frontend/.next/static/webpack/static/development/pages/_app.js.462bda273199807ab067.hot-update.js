webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _TakeMyMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TakeMyMoney */ "./components/TakeMyMoney.js");

var _jsxFileName = "/Users/madisonmartinez/Desktop/code/Advanced-React/sick-fits/frontend/components/Cart.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
/* eslint-disable */

var Composed = Object(react_adopt__WEBPACK_IMPORTED_MODULE_4__["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, render);
  },
  toggleCart: function toggleCart(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, render);
  },
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: LOCAL_STATE_QUERY,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, render);
  }
});
/* eslint-enable */

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Composed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  },
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
      var user, toggleCart, localState, me;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _ref4.user, toggleCart = _ref4.toggleCart, localState = _ref4.localState;
              me = user.data.me;

              if (me) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", null);

            case 4:
              return _context.abrupt("return", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
                open: localState.data.cartOpen,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
                onClick: toggleCart,
                title: "close",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                },
                __self: this
              }, me.name, "'s Cart"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              }, "You Have ", me.cart.length, " Item", me.cart.length === 1 ? '' : 's', " in your cart.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              }, me.cart.map(function (cartItem) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  key: cartItem.id,
                  cartItem: cartItem,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  },
                  __self: this
                });
              })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_11__["default"])(me.cart))), me.cart.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TakeMyMoney__WEBPACK_IMPORTED_MODULE_13__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              }, "Checkout")))));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ })

})
//# sourceMappingURL=_app.js.462bda273199807ab067.hot-update.js.map