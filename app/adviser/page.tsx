import Link from "next/link";
import AdviserSidebar from "@/components/adviser/AdviserSidebar";

export default function AdviserDashboard() {
  return (
    <div className="flex">
      <AdviserSidebar />

      <main className="p-8 flex-1 space-y-8">
        <h1 className="text-3xl font-bold">Adviser Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/adviser/clients">
            <div className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 cursor-pointer">
              📋 Client List
            </div>
          </Link>
          <Link href="/adviser/advice/new">
            <div className="p-6 bg-white rounded-lg shadow hover:bg-gray-50 cursor-pointer">
              ✍️ New Advice
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
