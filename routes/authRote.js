import express from 'express';
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../controller/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router objects

const router = express.Router();

//routing

//register || post method
router.post('/register', registerController)
//login
router.post('/login', loginController);

//forgot password
router.post("/forgotPassword", forgotPasswordController)
//test route
router.get('/test', requireSignIn, isAdmin, testController)

//protected route auth
router.get("/userAuth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})
//protected route  Admin auth
router.get("/adminAuth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})
//update profile
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;