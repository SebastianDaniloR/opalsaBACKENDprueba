import {Router} from 'express';
import { authRequired } from "../middlewares/validateToken.js";
import { getMantenimientos, createMantenimiento, deleteMantenimiento  } from '../controllers/mantenimiento.controller.js'; // Ajusta las rutas de los controladores según tu estructura

const router = Router();

router.get('/mantenimientos',authRequired ,getMantenimientos);
router.post('/mantenimientos', createMantenimiento);
router.delete('/mantenimientos/:id', deleteMantenimiento);


export default router;