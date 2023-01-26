"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var headers_1 = __importDefault(require("./headers"));
/** 成功
 * @param res response
 * @param data custom data to send
 */
var successHandle = function (res, data) {
    if (data === void 0) { data = {}; }
    res.writeHead(200, headers_1.default);
    res.write(JSON.stringify(__assign({ status: 'success' }, data)));
    res.end();
};
exports.default = successHandle;
