const express = require("express");
const router = express.Router();

const{
    getOrders,
    addOrder,
    editOrder,
    deleteOrder
} = require("../controllers/orderController")

router.route.get(getOrders);
router.route.post(addOrder);
router.route.patch(editOrder);
router.route.delete(deleteOrder);

module.exports = router;
