import { useState } from "react";
import { createContact } from "../services/api";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await createContact(form);
    setForm({ name: "", email: "", phone: "", message: "" });
    refresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19a4 4 0 00-8 0m4-10a4 4 0 100-8 4 4 0 000 8zm6 4v2m0 0v2m0-2h2m-2 0h-2"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-slate-900 mb-1">
        Add New Contact
      </h2>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">
        Enter the details of the person you'd like to add to your network.
      </p>

      {/* Form */}
      <form onSubmit={submit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
              placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
                placeholder:text-slate-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
                placeholder:text-slate-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Notes (Optional)
          </label>
          <textarea
            rows={4}
            placeholder="Any additional information..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
              placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white
            font-semibold text-sm py-3 rounded-xl transition"
        >
          Create Contact
        </button>
      </form>
    </div>
  );
}
