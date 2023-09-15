"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassesController_1 = require("./controllers/ClassesController");
const ConnectionsController_1 = require("./controllers/ConnectionsController");
const routes = express_1.default.Router();
routes.post('/classes', new ClassesController_1.ClassesController().create);
routes.get('/classes', new ClassesController_1.ClassesController().index);
routes.post('/connections', new ConnectionsController_1.ConnectionsController().create);
routes.get('/connections', new ConnectionsController_1.ConnectionsController().index);
exports.default = routes;
