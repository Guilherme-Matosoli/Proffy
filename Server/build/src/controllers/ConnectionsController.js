"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionsController = void 0;
const connection_1 = __importDefault(require("../database/connection"));
class ConnectionsController {
    async index(req, res) {
        const totalConnections = await (0, connection_1.default)('connections').count('* as total');
        const { total } = totalConnections[0];
        return res.json({ total });
    }
    ;
    async create(req, res) {
        const { user_id } = req.body;
        try {
            await (0, connection_1.default)('connections').insert({
                user_id,
            });
            return res.status(201).send();
        }
        catch (err) {
            console.log(err);
        }
    }
    ;
}
exports.ConnectionsController = ConnectionsController;
;
