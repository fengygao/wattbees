"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7673);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/routes.js
const routes = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Equipments",
        path: "/equipments"
    },
    {
        label: "Contact Us",
        path: "/contact-us"
    }, 
];
/* harmony default export */ const components_routes = ((/* unused pure expression or super */ null && (routes)));

// EXTERNAL MODULE: external "localStorage"
var external_localStorage_ = __webpack_require__(3118);
var external_localStorage_default = /*#__PURE__*/__webpack_require__.n(external_localStorage_);
// EXTERNAL MODULE: ./components/lang.js
var lang = __webpack_require__(8528);
;// CONCATENATED MODULE: ./components/Footer.js






function Footer(props) {
    let langStr = external_localStorage_default().getItem('language');
    console.log(props.langu, langStr);
    if (langStr === 'Chinese') {
        langStr = 'Chinese';
    } else {
        langStr = 'English';
    }
    const { 0: langu , 1: setN  } = (0,external_react_.useState)(props.langu);
    (0,external_react_.useEffect)(()=>{
        let langStr2 = external_localStorage_default().getItem('language');
        setN(langStr2);
        console.log(langu);
    }, [
        langu
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-12 col-xl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footsec",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footlogocntSec",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "footlogo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img-fluid",
                                                src: "img/logo.png",
                                                alt: "img",
                                                width: "100%"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: lang/* default.footerInfo.leftContent */.Z.footerInfo.leftContent[langu]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-12 col-xl-8 d-none d-md-flex justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footlinks"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footlinks"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footlinks",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: lang/* default.footerInfo.rightTitle */.Z.footerInfo.rightTitle[langu]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: lang/* default.menuTop */.Z.menuTop[langu].map((route, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: route.path,
                                                        children: route.label
                                                    })
                                                }, i)
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
;

;// CONCATENATED MODULE: ./components/layout.js





function Layout({ children , getOtherStr  }) {
    (0,external_react_.useEffect)(()=>{
        document.querySelector("body").classList.add("themebgcolor");
    });
    let langStr = external_localStorage_default().getItem('language');
    if (langStr === 'English' || !langStr) {
        langStr = 'English';
        external_localStorage_default().setItem('language', 'English');
    } else {
        langStr = 'Chinese';
        external_localStorage_default().setItem('language', 'Chinese');
    }
    const { 0: langu , 1: setN  } = (0,external_react_.useState)(langStr);
    // header中英文切换
    const getChildStr = (msg)=>{
        setN(msg);
        // console.log('Chinese',msg)
        getOtherStr(msg);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                getChildStr: getChildStr
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                langu: langu
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const getOtherStr = (msg)=>{
        console.log(msg);
        pageProps.langu = msg;
        location.reload();
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        getOtherStr: getOtherStr,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
};


/***/ }),

/***/ 3118:
/***/ ((module) => {

module.exports = require("localStorage");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 8582:
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ 8789:
/***/ ((module) => {

module.exports = require("react-bootstrap/DropdownButton");

/***/ }),

/***/ 2540:
/***/ ((module) => {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ 4934:
/***/ ((module) => {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,528,673], () => (__webpack_exec__(4294)));
module.exports = __webpack_exports__;

})();