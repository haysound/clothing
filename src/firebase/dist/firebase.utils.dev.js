"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/firestore");

require("firebase/compat/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyAP9WP-ktMHZd1RjqKzgchvFsxarqumAxw",
  authDomain: "clothing-db-12b1d.firebaseapp.com",
  projectId: "clothing-db-12b1d",
  storageBucket: "clothing-db-12b1d.appspot.com",
  messagingSenderId: "291992522054",
  appId: "1:291992522054:web:ee48d67aebbd20a5302947",
  measurementId: "G-BKYGGXC4T2"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;