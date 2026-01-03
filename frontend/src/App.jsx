import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "./services/api";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await getContacts();
    setContacts(res.data);
  };

  const removeContact = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-600 font-semibold">
            ContactManager
          </p>
          <h1 className="text-4xl font-bold mt-2">
            Manage your{" "}
            <span className="text-blue-600">Connections</span>
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl leading-relaxed">
            A beautiful, centralized hub for all your professional
            and personal contacts.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactForm refresh={fetchContacts} />

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Your Directory
              </h2>
              <span className="text-sm text-slate-500">
                {contacts.length} Contacts
              </span>
            </div>

            <ContactList
              contacts={contacts}
              onDelete={removeContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
