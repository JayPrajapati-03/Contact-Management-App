import { TrashIcon } from "@heroicons/react/24/outline";

export default function ContactList({ contacts, onDelete }) {
  if (!contacts.length) {
    return (
      <p className="text-slate-500 text-sm">No contacts found.</p>
    );
  }

  return (
    <div className="space-y-4">
      {contacts.map((c) => (
        <div
          key={c._id}
          className="relative bg-white rounded-2xl p-5 shadow-md
            border border-blue-100
            before:absolute before:left-0 before:top-0 before:h-full before:w-1
            before:bg-blue-500 before:rounded-l-2xl"
        >
          {/* Delete button */}
          <button
            onClick={() => onDelete(c._id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition"
            title="Delete contact"
          >
            <TrashIcon className="w-5 h-5" />
          </button>

          {/* Name */}
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            {c.name}
          </h3>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0l-8 0m8 0l-8 0m12-6H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2z"
              />
            </svg>
            {c.email}
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {c.phone}
          </div>

          {/* Notes (optional) */}
          {c.message && (
            <p className="mt-3 text-sm text-slate-500">
              {c.message}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
