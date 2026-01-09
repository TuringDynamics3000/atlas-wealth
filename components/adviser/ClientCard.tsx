"use client";
export default function ClientCard({ name, href }) {
  return (
    <a href={href} className="block p-4 bg-white rounded-lg shadow hover:bg-gray-50">
      {name}
    </a>
  );
}
