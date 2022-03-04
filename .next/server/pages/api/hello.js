"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 1362:
/***/ ((module) => {

module.exports = import("discord.js");;

/***/ }),

/***/ 2677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var discord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1362);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([discord_js__WEBPACK_IMPORTED_MODULE_0__]);
discord_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const token = 'OTI4NDEyNTMwNTQyNTE4MzMz.YdYZjA.Eqtq53L741vkR3WUHA_4C-nBaEU';
const channelId = '928412125284692019';
async function handler(req, res1) {
    const { name , email , sub , message  } = req.body;
    console.log(req.body);
    const client = new discord_js__WEBPACK_IMPORTED_MODULE_0__["default"].Client();
    const msg = `${name}(${email})\n${sub}\n${message}`;
    const response = await new Promise((resolve, reject)=>{
        // When the client is ready, run this code (only once)
        client.once('ready', async ()=>{
            try {
                const res = await client.channels.cache.get(channelId).send(msg);
                console.log(res);
                resolve(res);
            } catch (error) {
                reject(error);
            }
        });
        // Login to Discord with your client's token
        client.login(token);
    });
    res1.redirect('/contact-us?success');
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2677));
module.exports = __webpack_exports__;

})();