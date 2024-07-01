import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  userOrders,
  verifyorder,
} from "../controllers/orderContoller.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyorder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);

export default orderRouter;
