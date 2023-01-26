"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = exports.successHandle = void 0;
var successHandle_1 = __importDefault(require("./successHandle"));
exports.successHandle = successHandle_1.default;
var errorHandle_1 = __importDefault(require("./errorHandle"));
exports.errorHandle = errorHandle_1.default;
