const express = require("express");
const router = express.Router();

const UserController = require("../Controller/UserController");
router.post("/adduser", UserController.addUser);
router.get("/allusers", UserController.allUsers);
router.post("/dologin", UserController.doLogin);

const OrderController = require("../Controller/OrderController");
router.post("/addorder", OrderController.addOrder);
router.get("/allorders", OrderController.allOrders);
router.post("/ordersbyartistid", OrderController.ordersByArtistId);
router.post("/ordersbycustid", OrderController.ordersByCustId);
router.put("/updateorder", OrderController.updateOrder);
router.delete("/deleteorder", OrderController.deleteOrder);

const CustomerController = require("../Controller/CustomerController");
router.post("/addcustomer", CustomerController.addCustomer);
router.get("/allcustomers", CustomerController.allCustomers);
router.post("/getcustomerprofile", CustomerController.getCustomerProfile);

const ContactController = require("../Controller/ContactController");
router.post("/addcontact", ContactController.addContact);
router.get("/allcontacts", ContactController.allContacts);

const ArtistController = require("../Controller/ArtistController");
router.post("/addartist", ArtistController.addArtist);
router.get("/allartists", ArtistController.allArtists);
router.post("/doisapprove", ArtistController.doIsApprove);
router.get("/getapprovedartist", ArtistController.getApprovedArtist);
router.post("/getartistprofile", ArtistController.getArtistProfile);

const ArtWorkController = require("../Controller/ArtWorkControlller");
router.post("/addartwork", ArtWorkController.addArtWork);
router.get("/allartworks", ArtWorkController.allArtWorks);
router.post("/getartworksbyartistid", ArtWorkController.getArtWorksByArtistId);

module.exports = router;
