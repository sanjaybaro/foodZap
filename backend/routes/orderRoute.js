import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  placeOrder,
  userOrders,
  verifyorder,
} from "../controllers/orderContoller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyorder);
orderRouter.post("/userorders", authMiddleware, userOrders);

export default orderRouter;
