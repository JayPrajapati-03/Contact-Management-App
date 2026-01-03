import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getContacts = () => API.get("/contacts");
export const createContact = (data) => API.post("/contacts", data);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
