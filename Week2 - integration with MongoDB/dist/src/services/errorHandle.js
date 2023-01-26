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
/** request fail
 * @param res response
 * @param errorData custom error to send
 * @param errorCode default status code is 400
 */
var errorHandle = function (res, errorData, errorCode) {
    if (errorData === void 0) { errorData = {}; }
    if (errorCode === void 0) { errorCode = 400; }
    res.writeHead(errorCode, headers_1.default);
    res.write(JSON.stringify(__assign({ status: 'fail' }, errorData)));
    res.end();
};
exports.default = errorHandle;
