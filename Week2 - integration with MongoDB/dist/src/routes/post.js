"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var posts_1 = __importDefault(require("../api/posts"));
var postHandler = function (req, res) {
    var reqUrl = req.url;
    var reqMethod = req.method;
    switch (reqMethod) {
        case 'GET':
            posts_1.default.GET(req, res);
            break;
        default:
            break;
    }
};
exports.default = postHandler;
