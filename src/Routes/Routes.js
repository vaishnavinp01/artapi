const express = require("express");
const router = express.Router();

const UserController = require("../Controller/UserController");

router.post("/adduser", UserController.addUser);
router.get("/allusers", UserController.allUsers);
router.post("/dologin", UserController.doLogin);
router.put("/updateuser", UserController.updateUser);
router.delete("/deleteuser", UserController.deleteUser);

const OrderController = require("../Controller/OrderController");

router.post("/addorder", OrderController.addOrder);
router.get("/allorders",OrderController.allOrders);
router.get("/artorders", OrderController.artOrders);
router.get("/custorders", OrderController.custOrders);
router.post("/artorderbyid", OrderController.artorderById);
router.post("/custorderbyid", OrderController.custorderById);
router.put("/updateorder", OrderController.updateOrder);
router.delete("/deleteorder", OrderController.deleteOrder);

const CustomerController = require("../Controller/CustomerController");

router.post("/addcustomer", CustomerController.addCustomer);
router.get("/allcustomers", CustomerController.allCustomers);
// router.put("/updatecustomer", UserController.updateCustomer);
// router.delete("/deletecustomer", UserController.deleteCustomer);

const ContactController = require("../Controller/ContactController");

router.post("/addcontact", ContactController.addContact);
router.get("/allcontacts", ContactController.allContacts);

const ArtistController = require("../Controller/ArtistController");

router.post("/addartist", ArtistController.addArtist);
router.get("/allartists", ArtistController.allArtists);
router.post("/doisverified" , ArtistController.doIsVerified);

const ArtWorkController = require("../Controller/ArtWorkControlller");

router.post("/addartwork", ArtWorkController.addArtWork);
router.get("/allartworks", ArtWorkController.allArtWorks);

module.exports = router;
