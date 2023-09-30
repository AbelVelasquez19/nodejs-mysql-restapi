import { Router } from "express";
import { getDebts,getDebt,createDebet, updateDebet, deleteDebet} from "../controllers/debt.controller.js";
const router = Router();

router.get('/debts', getDebts)
router.get('/debts/:id', getDebt)
router.post('/debt', createDebet)
router.delete('/debts/:id', deleteDebet)
router.patch('/debts/:id', updateDebet)

export default router