import { Router } from "express";
import { deleteEventReceiveQueue, getEventReceiveQueue, postEventReceiveQueue, putEventReceiveQueue } from "../controllers/eventReceiveQueue";

const router = Router();

router.get("/",getEventReceiveQueue);
router.post("/",postEventReceiveQueue);
router.put("/",putEventReceiveQueue);
router.delete("/",deleteEventReceiveQueue);



export default router;
