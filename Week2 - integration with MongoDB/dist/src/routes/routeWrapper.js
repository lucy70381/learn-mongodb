"use strict";
// const routeWrapper = (routePath: String, targetRoute) => {};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var post_1 = __importDefault(require("./post"));
var routes = function (req, res) {
    var reqUrl = req.url;
    var reqMethod = req.method;
    switch (reqUrl) {
        case '/posts':
            (0, post_1.default)(req, res);
            break;
        default:
            break;
    }
};
exports.default = routes;
