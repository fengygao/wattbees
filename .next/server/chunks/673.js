"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8789);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8582);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8528);
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3118);
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(localStorage__WEBPACK_IMPORTED_MODULE_11__);












const SearchBar = ()=>/*#__PURE__*/ _jsx("div", {
        className: "searchform d-none d-md-inline-flex"
    })
;
const Header = ({ getChildStr  })=>{
    const { 0: expand , 1: setExpand  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let langStr = localStorage__WEBPACK_IMPORTED_MODULE_11___default().getItem('language');
    console.log(langStr);
    if (langStr === 'Chinese') {
        langStr = 'Chinese';
    } else {
        langStr = 'English';
    }
    const { 0: langu , 1: setN  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(langStr); // 函数式组件 类似state的声明并设置初始值 第一个参数为nane,第二个为function
    const currentUser = false;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // console.log(props) 传值
    // 英文切换
    const onEnglish = ()=>{
        localStorage__WEBPACK_IMPORTED_MODULE_11___default().setItem('language', 'English');
        setN('English');
        getChildStr('English');
        console.log('English', langu);
    };
    // 中文切换
    const onChinese = ()=>{
        setN('Chinese');
        getChildStr('Chinese');
        console.log('Chinese', langu);
        localStorage__WEBPACK_IMPORTED_MODULE_11___default().setItem('language', 'Chinese');
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Wattbees"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "Googlebot-News",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "googlebot",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noimageindex"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default()), {
                collapseOnSelect: true,
                expand: "lg",
                onToggle: (expanded)=>setExpand(expanded)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: "/",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default().Brand), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "img-fluid",
                                    src: "img/logo.png",
                                    alt: "img",
                                    width: "180px"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default().Toggle), {
                            "aria-controls": "responsive-navbar-nav",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hamburger-toggle",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `hamburger ${expand ? 'active' : ''}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default().Collapse), {
                            id: "responsive-navbar-nav",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: _lang__WEBPACK_IMPORTED_MODULE_10__/* ["default"].menuTop */ .Z.menuTop[langu].map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            href: menu.path,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default().Link), {
                                                active: router.pathname === menu.path,
                                                children: menu.label
                                            })
                                        }, i)
                                    )
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    variant: "outline-secondary",
                                    title: langu,
                                    id: "input-group-dropdown-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default().Item), {
                                            href: "#",
                                            onClick: onEnglish,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "img-fluid",
                                                    src: "img/iconChinese.png",
                                                    alt: "img",
                                                    width: "28px"
                                                }),
                                                " English"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default().Divider), {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default().Item), {
                                            href: "#",
                                            onClick: onChinese,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "img-fluid",
                                                    src: "img/iconEnglish.png",
                                                    alt: "img",
                                                    width: "28px"
                                                }),
                                                " Chinese"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        currentUser && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "loginWallet d-none d-md-inline-flex",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dropdown me-md-3 me-lg-2 me-xl-1 me-xxl-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "btn dropdown-toggle",
                                            href: "#",
                                            role: "button",
                                            id: "dropdownMenuLink",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "img/usericon.svg",
                                                alt: "img"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "dropdown-menu",
                                            "aria-labelledby": "dropdownMenuLink",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "dropdown-item",
                                                        href: "signin.html",
                                                        children: "Sign in"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "dropdown-item",
                                                        href: "signup.html",
                                                        children: "Sign up"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "dropdown-item",
                                                        href: "#",
                                                        children: "Forgot password"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "btn",
                                    href: "wallet.html",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "img/walleticon.svg",
                                        alt: "img"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;