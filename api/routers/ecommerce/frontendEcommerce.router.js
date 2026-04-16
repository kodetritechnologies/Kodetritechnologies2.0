import express from "express";
const router = express.Router();
import { customerAuthMiddleware } from "../../middlewares/customerAuthMiddleware.js";
import {
  createCustomerReview,
  customerReviewDelete,
  customerReviewUpdate,
  getCustomerReview,
} from "../../controllers/ecommerce/review.controller.js";
import {
  getPublicItemBySlugOrId,
  getPublicItems,
} from "../../controllers/ecommerce/item.controller.js";
import {
  claimCoupan,
  getAllCoupan,
  getCustomerCoupan,
  verifyCoupon,
} from "../../controllers/ecommerce/coupan.controller.js";
import {
  addToWishlist,
  getCustomerWishlist,
  removeFromWishlist,
} from "../../controllers/ecommerce/wishlist.controller.js";
import {
  createCustomerAddress,
  deleteCustomerAddress,
  getAllCustomerAddress,
  updateCustomerAddress,
} from "../../controllers/ecommerce/address.controller.js";
import {
  addTocartCustomer,
  getCustomerCart,
  removeToCartCustomer,
  updateCartCustomer,
} from "../../controllers/ecommerce/cart.controller.js";
import { createPayment } from "../../controllers/ecommerce/order.controller.js";

router.get("/reviews", customerAuthMiddleware, getCustomerReview);
router.post("/reviews/create", customerAuthMiddleware, createCustomerReview);
router.patch("/reviews/update", customerAuthMiddleware, customerReviewUpdate);
router.delete(
  "/reviews/delete/:id",
  customerAuthMiddleware,
  customerReviewDelete,
);

// Item

router.get("/item/all", getPublicItems);
router.get("/item/:id", getPublicItemBySlugOrId);

// Coupan

router.get("/coupan/all", customerAuthMiddleware, getAllCoupan);
router.get("/customer/coupan", customerAuthMiddleware, getCustomerCoupan);
router.post("/coupan/claim", customerAuthMiddleware, claimCoupan);
router.post("/verify-coupon", verifyCoupon);

// Wishlist

router.get("/wishlist", customerAuthMiddleware, getCustomerWishlist);
router.post("/wishlist/create", customerAuthMiddleware, addToWishlist);
router.delete(
  "/wishlist/remove/:id",
  customerAuthMiddleware,
  removeFromWishlist,
);

// Address

router.get("/address", customerAuthMiddleware, getAllCustomerAddress);
router.post("/address", customerAuthMiddleware, createCustomerAddress);
router.patch("/address/:id", customerAuthMiddleware, updateCustomerAddress);
router.delete("/address/:id", customerAuthMiddleware, deleteCustomerAddress);

// Cart

router.get("/cart", customerAuthMiddleware, getCustomerCart);
router.post("/cart/create", customerAuthMiddleware, addTocartCustomer);
router.patch("/cart/update/:id", customerAuthMiddleware, updateCartCustomer);
router.delete("/cart/delete/:id", customerAuthMiddleware, removeToCartCustomer);

// Order

router.get("/order/payment", createPayment);

export default router;
