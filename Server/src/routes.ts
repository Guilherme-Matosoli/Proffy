import express from 'express';
import { ClassesController } from './controllers/ClassesController';
import { ConnectionsController } from './controllers/ConnectionsController';


const routes = express.Router();

routes.post('/classes', new ClassesController().create);
routes.get('/classes', new ClassesController().index);

routes.post('/connections', new ConnectionsController().create);
routes.get('/connections', new ConnectionsController().index);

export default routes;