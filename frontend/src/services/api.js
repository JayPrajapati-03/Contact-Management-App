import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-app-0mgw.onrender.com/api",
});

export const getContacts = () => API.get("/contacts");
export const createContact = (data) => API.post("/contacts", data);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
