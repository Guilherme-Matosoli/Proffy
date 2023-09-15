"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesController = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const convertHourToMinutes_1 = require("../utils/convertHourToMinutes");
class ClassesController {
    async index(req, res) {
        const filters = req.query;
        if (!filters.subject || !filters.week_day || !filters.time) {
            return res.status(400).json({
                error: "Missing filter to search classes"
            });
        }
        ;
        const subject = filters.subject;
        const week_day = filters.week_day;
        const time = filters.time;
        const timeInMinutes = (0, convertHourToMinutes_1.convertHourToMinutes)(filters.time);
        const classes = await (0, connection_1.default)('classes')
            .whereExists(function () {
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
        })
            .where('classes.subject', "=", subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);
        return res.json(classes);
    }
    ;
    async create(req, res) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;
        const trx = await connection_1.default.transaction();
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
            const user_id = insertedUsersIds[0];
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
            const class_id = insertedClassesIds[0];
            const classSchedule = schedule.map((scheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: (0, convertHourToMinutes_1.convertHourToMinutes)(scheduleItem.from),
                    to: (0, convertHourToMinutes_1.convertHourToMinutes)(scheduleItem.to)
                };
            });
            await trx('class_schedule').insert(classSchedule);
            await trx.commit();
            return res.status(201).send();
        }
        catch (err) {
            trx.rollback();
            return res.status(400).json({ message: "Internal Server Error"
            });
        }
    }
}
exports.ClassesController = ClassesController;
