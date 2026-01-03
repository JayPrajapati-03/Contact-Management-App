const Contact = require("../models/Contact");

// POST - Add Contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newContact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET - Fetch Contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE - Remove Contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
