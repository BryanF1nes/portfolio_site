"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/calc.png */ "./src/assets/calc.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/library.png */ "./src/assets/library.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/members-only.png */ "./src/assets/members-only.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/weather.png */ "./src/assets/weather.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inter:700|Inter:400);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Inter";
  font-weight: 400;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Inter";
  font-weight: 700;
}

html {
  font-size: 100%;
  margin: 0;
  padding: 0;
} /* 16px */

h1 {
  font-size: 3.366rem; /* 53.92px */
}

h2 {
  font-size: 2.525rem; /* 40.32px */
}

h3 {
  font-size: 1.894rem; /* 30.24px */
}

h4 {
  font-size: 1.421rem; /* 22.72px */
}

h5 {
  font-size: 1.066rem; /* 17.12px */
}

small {
  font-size: 0.6rem; /* 9.6px */
}

:root {
  --text: #fbfbfe;
  --background: #fbfbfe;
  --primary: #2f27ce;
  --secondary: #dddbff;
  --accent: #0600c2;
  --accent-glow: #332cff59;
  --dark-accent: #443dff;
  --dark-primary: #3a31d8;
  --dark-background: #0e0e1a;
  --dark-secondary: #020024;
}

#root {
  width: 100vw;
  max-width: 100%;
}

.dark nav {
  background-color: var(--dark-background);
}

nav {
  position: fixed;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 1px solid var(--dark-primary);
  background-color: var(--background);
}

nav p {
  cursor: default;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
}

nav ul i {
  font-size: 1.2em;
}

nav ul a {
  padding: 10px 20px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: 200ms ease-out;
}

nav ul a:hover {
  border-bottom: 1px solid var(--primary);
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

main .cta-container {
  max-width: 1200px;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
}

main .cta-container h1 {
  margin-bottom: 10px;
}

.cta-container .container p {
  max-width: 600px;
  text-align: center;
}

.cta-container button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: var(--primary);
  color: var(--text);
  font-size: 1.033em;
  cursor: pointer;
}

.cta-container button:hover {
  background-color: var(--accent);
}

.tech-stack {
  padding: 10px 0px 30px 0px;
  display: grid;
  grid-template-columns: repeat(6, 80px);
  justify-content: center;
  justify-items: center;
  gap: 15px 0px;
}

.tech-stack img:hover {
  background-color: var(--accent-glow);
  border-radius: 13px;
  -webkit-box-shadow: 0px 0px 20px 8px var(--accent-glow);
  -moz-box-shadow: 0px 0px 20px 8px var(--accent-glow);
  box-shadow: 0px 0px 20px 8px var(--accent-glow);
}

.project-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0rem 0rem 5rem 0rem;
  gap: 10px;
}

.container {
  min-width: 600px;
}

.container .img-container {
  width: auto;
  height: 300px;
}

.img-container img {
  height: 300px;
  width: auto;
}

.link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.link-container div {
  display: flex;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: 5rem;
}

form textarea {
  min-width: 600px;
  min-height: 200px;
  padding: 10px;
  font-size: 1.033rem;
  resize: vertical;
  border-radius: 5px;
}

form input {
  min-width: 600px;
  padding: 10px;
  font-size: 1.033rem;
  border-radius: 5px;
}

form button {
  min-width: 620px;
  min-height: 50px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--primary);
  color: var(--text);
  font-size: 1.033em;
  cursor: pointer;
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-top: 1px solid var(--primary);
  padding: 10px 0px;
}

a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  text-decoration: none;
  color: black;
  padding: 2px;
}

a i {
  font-size: 24px;
  text-align: center;
}

.footer-container div a p {
  margin: 2px;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 800px;
}

.dark {
  background-color: var(--dark-background);
  color: var(--text);
  transition: 300ms ease-in;
}

.dark a {
  color: var(--text);
}

#calculator {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border: none;
}

#library {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

#members-only {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

#weather {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}

@media only screen and (max-width: 1024px) {
  nav ul {
    gap: 0px;
    padding: 0px;
  }

  .tech-stack {
    grid-template-columns: repeat(2, 100px);
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container .img-container {
    width: 300px;
    height: 200px;
  }

  .container {
    min-width: 0;
  }

  .project-container {
    grid-template-columns: 300px;
  }

  .cta-container h1 {
    text-align: center;
    margin-top: 150px;
  }

  form {
    margin: 0px;
  }

  form input {
    min-width: 300px;
  }

  form textarea {
    min-width: 300px;
  }

  form button {
    min-width: 300px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Inter:700|Inter:400\");\n\nbody {\n  font-family: \"Inter\";\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: \"Inter\";\n  font-weight: 700;\n}\n\nhtml {\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n} /* 16px */\n\nh1 {\n  font-size: 3.366rem; /* 53.92px */\n}\n\nh2 {\n  font-size: 2.525rem; /* 40.32px */\n}\n\nh3 {\n  font-size: 1.894rem; /* 30.24px */\n}\n\nh4 {\n  font-size: 1.421rem; /* 22.72px */\n}\n\nh5 {\n  font-size: 1.066rem; /* 17.12px */\n}\n\nsmall {\n  font-size: 0.6rem; /* 9.6px */\n}\n\n:root {\n  --text: #fbfbfe;\n  --background: #fbfbfe;\n  --primary: #2f27ce;\n  --secondary: #dddbff;\n  --accent: #0600c2;\n  --accent-glow: #332cff59;\n  --dark-accent: #443dff;\n  --dark-primary: #3a31d8;\n  --dark-background: #0e0e1a;\n  --dark-secondary: #020024;\n}\n\n#root {\n  width: 100vw;\n  max-width: 100%;\n}\n\n.dark nav {\n  background-color: var(--dark-background);\n}\n\nnav {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  border-bottom: 1px solid var(--dark-primary);\n  background-color: var(--background);\n}\n\nnav p {\n  cursor: default;\n}\n\nnav ul {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  list-style: none;\n}\n\nnav ul i {\n  font-size: 1.2em;\n}\n\nnav ul a {\n  padding: 10px 20px;\n  border-bottom: 1px solid transparent;\n  cursor: pointer;\n  transition: 200ms ease-out;\n}\n\nnav ul a:hover {\n  border-bottom: 1px solid var(--primary);\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\nmain .cta-container {\n  max-width: 1200px;\n  margin: 0 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-bottom: 30px;\n}\n\nmain .cta-container h1 {\n  margin-bottom: 10px;\n}\n\n.cta-container .container p {\n  max-width: 600px;\n  text-align: center;\n}\n\n.cta-container button {\n  padding: 10px 20px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--primary);\n  color: var(--text);\n  font-size: 1.033em;\n  cursor: pointer;\n}\n\n.cta-container button:hover {\n  background-color: var(--accent);\n}\n\n.tech-stack {\n  padding: 10px 0px 30px 0px;\n  display: grid;\n  grid-template-columns: repeat(6, 80px);\n  justify-content: center;\n  justify-items: center;\n  gap: 15px 0px;\n}\n\n.tech-stack img:hover {\n  background-color: var(--accent-glow);\n  border-radius: 13px;\n  -webkit-box-shadow: 0px 0px 20px 8px var(--accent-glow);\n  -moz-box-shadow: 0px 0px 20px 8px var(--accent-glow);\n  box-shadow: 0px 0px 20px 8px var(--accent-glow);\n}\n\n.project-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 0rem 0rem 5rem 0rem;\n  gap: 10px;\n}\n\n.container {\n  min-width: 600px;\n}\n\n.container .img-container {\n  width: auto;\n  height: 300px;\n}\n\n.img-container img {\n  height: 300px;\n  width: auto;\n}\n\n.link-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.link-container div {\n  display: flex;\n}\n\nsection {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 20px;\n  margin: 5rem;\n}\n\nform textarea {\n  min-width: 600px;\n  min-height: 200px;\n  padding: 10px;\n  font-size: 1.033rem;\n  resize: vertical;\n  border-radius: 5px;\n}\n\nform input {\n  min-width: 600px;\n  padding: 10px;\n  font-size: 1.033rem;\n  border-radius: 5px;\n}\n\nform button {\n  min-width: 620px;\n  min-height: 50px;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  background-color: var(--primary);\n  color: var(--text);\n  font-size: 1.033em;\n  cursor: pointer;\n}\n\n.footer-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  border-top: 1px solid var(--primary);\n  padding: 10px 0px;\n}\n\na {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  text-decoration: none;\n  color: black;\n  padding: 2px;\n}\n\na i {\n  font-size: 24px;\n  text-align: center;\n}\n\n.footer-container div a p {\n  margin: 2px;\n}\n\n.form-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 800px;\n}\n\n.dark {\n  background-color: var(--dark-background);\n  color: var(--text);\n  transition: 300ms ease-in;\n}\n\n.dark a {\n  color: var(--text);\n}\n\n#calculator {\n  background: url(\"./assets/calc.png\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  border: none;\n}\n\n#library {\n  background: url(\"./assets/library.png\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n}\n\n#members-only {\n  background: url(\"./assets/members-only.png\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n}\n\n#weather {\n  background: url(\"./assets/weather.png\");\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n}\n\n@media only screen and (max-width: 1024px) {\n  nav ul {\n    gap: 0px;\n    padding: 0px;\n  }\n\n  .tech-stack {\n    grid-template-columns: repeat(2, 100px);\n  }\n\n  main {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .container .img-container {\n    width: 300px;\n    height: 200px;\n  }\n\n  .container {\n    min-width: 0;\n  }\n\n  .project-container {\n    grid-template-columns: 300px;\n  }\n\n  .cta-container h1 {\n    text-align: center;\n    margin-top: 150px;\n  }\n\n  form {\n    margin: 0px;\n  }\n\n  form input {\n    min-width: 300px;\n  }\n\n  form textarea {\n    min-width: 300px;\n  }\n\n  form button {\n    min-width: 300px;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main */ "./src/modules/main.js");



(0,_modules_main__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
function main() {
  const root = document.querySelector("#root");
  const dark_btn = document.querySelector(".toggle");
  const footer = document.querySelector(".footer-container");

  dark_btn?.addEventListener("click", () => {
    if (root?.classList.contains("dark")) {
      root.classList.remove("dark");
      footer?.classList.remove("dark");
      dark_btn.classList.remove("fa-sun");
      dark_btn.classList.add("fa-cloud-moon");
    } else {
      root?.classList.add("dark");
      footer?.classList.add("dark");
      dark_btn.classList.remove("fa-cloud-moon");
      dark_btn.classList.add("fa-sun");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const offset = 40;
      const target = document.querySelector(this.getAttribute("href"));
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  const button = document.querySelector("button");

  button.addEventListener("click", (e) => {
    const offset = 40;
    const target = document.querySelector("#projects");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}


/***/ }),

/***/ "./src/assets/calc.png":
/*!*****************************!*\
  !*** ./src/assets/calc.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "861dc1b0d10a47231dc3.png";

/***/ }),

/***/ "./src/assets/library.png":
/*!********************************!*\
  !*** ./src/assets/library.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0947e6ead29a00bee04d.png";

/***/ }),

/***/ "./src/assets/members-only.png":
/*!*************************************!*\
  !*** ./src/assets/members-only.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df594ce3568b0dddfc8b.png";

/***/ }),

/***/ "./src/assets/weather.png":
/*!********************************!*\
  !*** ./src/assets/weather.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb2bfa5ef4be6002e5fd.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG1IQUFtSDtBQUNuSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxTQUFTLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sc0dBQXNH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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9jYWxjLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2xpYnJhcnkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbWVtYmVycy1vbmx5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3dlYXRoZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUludGVyOjcwMHxJbnRlcjo0MDApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSAvKiAxNnB4ICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAzLjM2NnJlbTsgLyogNTMuOTJweCAqL1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi41MjVyZW07IC8qIDQwLjMycHggKi9cbn1cblxuaDMge1xuICBmb250LXNpemU6IDEuODk0cmVtOyAvKiAzMC4yNHB4ICovXG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxLjQyMXJlbTsgLyogMjIuNzJweCAqL1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMS4wNjZyZW07IC8qIDE3LjEycHggKi9cbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDAuNnJlbTsgLyogOS42cHggKi9cbn1cblxuOnJvb3Qge1xuICAtLXRleHQ6ICNmYmZiZmU7XG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmZTtcbiAgLS1wcmltYXJ5OiAjMmYyN2NlO1xuICAtLXNlY29uZGFyeTogI2RkZGJmZjtcbiAgLS1hY2NlbnQ6ICMwNjAwYzI7XG4gIC0tYWNjZW50LWdsb3c6ICMzMzJjZmY1OTtcbiAgLS1kYXJrLWFjY2VudDogIzQ0M2RmZjtcbiAgLS1kYXJrLXByaW1hcnk6ICMzYTMxZDg7XG4gIC0tZGFyay1iYWNrZ3JvdW5kOiAjMGUwZTFhO1xuICAtLWRhcmstc2Vjb25kYXJ5OiAjMDIwMDI0O1xufVxuXG4jcm9vdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZGFyayBuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xufVxuXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxubmF2IHAge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbm5hdiB1bCBpIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxubmF2IHVsIGEge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLW91dDtcbn1cblxubmF2IHVsIGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubWFpbiAuY3RhLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG5tYWluIC5jdGEtY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmN0YS1jb250YWluZXIgLmNvbnRhaW5lciBwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3RhLWNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEuMDMzZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN0YS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnRlY2gtc3RhY2sge1xuICBwYWRkaW5nOiAxMHB4IDBweCAzMHB4IDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgODBweCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweCAwcHg7XG59XG5cbi50ZWNoLXN0YWNrIGltZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1nbG93KTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggOHB4IHZhcigtLWFjY2VudC1nbG93KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggOHB4IHZhcigtLWFjY2VudC1nbG93KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDhweCB2YXIoLS1hY2NlbnQtZ2xvdyk7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIG1hcmdpbjogMHJlbSAwcmVtIDVyZW0gMHJlbTtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA2MDBweDtcbn1cblxuLmNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmxpbmstY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbn1cblxuLmxpbmstY29udGFpbmVyIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogNXJlbTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMDMzcmVtO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmZvcm0gaW5wdXQge1xuICBtaW4td2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEuMDMzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA2MjBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMS4wMzNlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMnB4O1xufVxuXG5hIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgZGl2IGEgcCB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogODAwcHg7XG59XG5cbi5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluO1xufVxuXG4uZGFyayBhIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4jY2FsY3VsYXRvciB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNsaWJyYXJ5IHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNtZW1iZXJzLW9ubHkge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3dlYXRoZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgbmF2IHVsIHtcbiAgICBnYXA6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAudGVjaC1zdGFjayB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMTAwcHgpO1xuICB9XG5cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cblxuICAucHJvamVjdC1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHg7XG4gIH1cblxuICAuY3RhLWNvbnRhaW5lciBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICBmb3JtIGlucHV0IHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgZm9ybSB0ZXh0YXJlYSB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIGZvcm0gYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7Ozs7O0VBS0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtBQUNaLEVBQUUsU0FBUzs7QUFFWDtFQUNFLG1CQUFtQixFQUFFLFlBQVk7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSxZQUFZO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsWUFBWTtBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQixFQUFFLFlBQVk7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUIsRUFBRSxZQUFZO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUUsVUFBVTtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHVEQUF1RDtFQUN2RCxvREFBb0Q7RUFDcEQsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtREFBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbURBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbURBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbURBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW50ZXI6NzAwfEludGVyOjQwMFxcXCIpO1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufSAvKiAxNnB4ICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzLjM2NnJlbTsgLyogNTMuOTJweCAqL1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIuNTI1cmVtOyAvKiA0MC4zMnB4ICovXFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS44OTRyZW07IC8qIDMwLjI0cHggKi9cXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjQyMXJlbTsgLyogMjIuNzJweCAqL1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuMDY2cmVtOyAvKiAxNy4xMnB4ICovXFxufVxcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC42cmVtOyAvKiA5LjZweCAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRleHQ6ICNmYmZiZmU7XFxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmU7XFxuICAtLXByaW1hcnk6ICMyZjI3Y2U7XFxuICAtLXNlY29uZGFyeTogI2RkZGJmZjtcXG4gIC0tYWNjZW50OiAjMDYwMGMyO1xcbiAgLS1hY2NlbnQtZ2xvdzogIzMzMmNmZjU5O1xcbiAgLS1kYXJrLWFjY2VudDogIzQ0M2RmZjtcXG4gIC0tZGFyay1wcmltYXJ5OiAjM2EzMWQ4O1xcbiAgLS1kYXJrLWJhY2tncm91bmQ6ICMwZTBlMWE7XFxuICAtLWRhcmstc2Vjb25kYXJ5OiAjMDIwMDI0O1xcbn1cXG5cXG4jcm9vdCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYXJrIG5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbn1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstcHJpbWFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxubmF2IHAge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiB1bCBpIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbm5hdiB1bCBhIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG5uYXYgdWwgYTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW4gLmN0YS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IDAgNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbm1haW4gLmN0YS1jb250YWluZXIgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmN0YS1jb250YWluZXIgLmNvbnRhaW5lciBwIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jdGEtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMS4wMzNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN0YS1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi50ZWNoLXN0YWNrIHtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDgwcHgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHggMHB4O1xcbn1cXG5cXG4udGVjaC1zdGFjayBpbWc6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWdsb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDhweCB2YXIoLS1hY2NlbnQtZ2xvdyk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjBweCA4cHggdmFyKC0tYWNjZW50LWdsb3cpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDhweCB2YXIoLS1hY2NlbnQtZ2xvdyk7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIG1hcmdpbjogMHJlbSAwcmVtIDVyZW0gMHJlbTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmxpbmstY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5saW5rLWNvbnRhaW5lciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogNXJlbTtcXG59XFxuXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjAzM3JlbTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgbWluLXdpZHRoOiA2MDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDEuMDMzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBtaW4td2lkdGg6IDYyMHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMS4wMzNlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMTBweCAwcHg7XFxufVxcblxcbmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDE1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbmEgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIGRpdiBhIHAge1xcbiAgbWFyZ2luOiAycHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4uZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmRhcmsgYSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbiNjYWxjdWxhdG9yIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvY2FsYy5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbGlicmFyeSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL2xpYnJhcnkucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI21lbWJlcnMtb25seSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL21lbWJlcnMtb25seS5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYXNzZXRzL3dlYXRoZXIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIGdhcDogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxuXFxuICAudGVjaC1zdGFjayB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDEwMHB4KTtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIgLmltZy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgfVxcblxcbiAgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jdGEtY29udGFpbmVyIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICBtYXJnaW46IDBweDtcXG4gIH1cXG5cXG4gIGZvcm0gaW5wdXQge1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICBmb3JtIGJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgbWFpbiBmcm9tIFwiLi9tb2R1bGVzL21haW5cIjtcblxubWFpbigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbiAgY29uc3QgZGFya19idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXItY29udGFpbmVyXCIpO1xuXG4gIGRhcmtfYnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChyb290Py5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpKSB7XG4gICAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgICAgZm9vdGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcbiAgICAgIGRhcmtfYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1zdW5cIik7XG4gICAgICBkYXJrX2J0bi5jbGFzc0xpc3QuYWRkKFwiZmEtY2xvdWQtbW9vblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdD8uY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICBmb290ZXI/LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgICAgZGFya19idG4uY2xhc3NMaXN0LnJlbW92ZShcImZhLWNsb3VkLW1vb25cIik7XG4gICAgICBkYXJrX2J0bi5jbGFzc0xpc3QuYWRkKFwiZmEtc3VuXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IDQwO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIikpO1xuICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPVxuICAgICAgICB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIC0gb2Zmc2V0O1xuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSA0MDtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24gLSBvZmZzZXQ7XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==