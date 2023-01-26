"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var mongoose_1 = __importDefault(require("mongoose"));
var routeWrapper_1 = __importDefault(require("./src/routes/routeWrapper"));
var dotenv = require('dotenv');
dotenv.config({ path: '.env' });
var DATABASE = (_a = process.env.DATABASE) === null || _a === void 0 ? void 0 : _a.replace('<password>', (_b = process.env.DATABASE_PASSWORD) !== null && _b !== void 0 ? _b : '');
mongoose_1.default.set('strictQuery', false);
mongoose_1.default
    .connect(DATABASE !== null && DATABASE !== void 0 ? DATABASE : '')
    .then(function () { return console.log('DB connection success'); })
    .catch(function (err) { return console.log(err); });
var server = (0, http_1.createServer)(function (req, res) {
    (0, routeWrapper_1.default)(req, res);
});
server.listen(process.env.PORT, function () {
    console.log('Server is running on Port 3005');
});
