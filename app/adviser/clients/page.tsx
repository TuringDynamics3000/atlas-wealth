import Link from "next/link";
import AdviserSidebar from "@/components/adviser/AdviserSidebar";

const clients = [
  { id: "c1", name: "Jane Doe", goals: ["Retirement", "Education"] },
  { id: "c2", name: "John Smith", goals: ["Investment Growth"] },
];

export default function AdviserClients() {
  return (
    <div className="flex">
      <AdviserSidebar />

      <main className="p-8 flex-1">
        <h2 className="text-2xl font-bold mb-4">Clients</h2>
        <ul className="space-y-4">
          {clients.map((c) => (
            <li key={c.id}>
              <Link href={`/adviser/clients/${c.id}`}>
                <div className="p-4 bg-white rounded-lg shadow hover:ring-2">
                  {c.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
