"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const app_1 = require("./app");
const connection_1 = __importDefault(require("./db/connection"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const server = http_1.default.createServer(app_1.app);
exports.io = new socket_io_1.Server(server);
exports.io.on('connection', (socket) => {
    console.log('a user connected');
});
// Conecte-se ao MongoDB
(0, connection_1.default)();
const PORT = process.env.PORT || 3001;
app_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
