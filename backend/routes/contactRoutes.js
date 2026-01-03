const express = require("express");
const router = express.Router();
const {
  createContact,
  getContacts,
  deleteContact
} = require("../controllers/contactController");

router.post("/contacts", createContact);
router.get( "/contacts", getContacts);
router.delete("/contacts/:id", deleteContact);

module.exports = router;
