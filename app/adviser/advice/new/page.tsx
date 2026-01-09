"use client";
import { useRouter, useSearchParams } from "next/navigation";
import AdviserSidebar from "@/components/adviser/AdviserSidebar";

export default function AdviceBuilder() {
  const params = useSearchParams();
  const client = params.get("client");
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    // TODO: call API to persist advice
    router.push("/adviser");
  }

  return (
    <div className="flex">
      <AdviserSidebar />

      <main className="p-8 flex-1">
        <h2 className="text-2xl font-bold">Advice for {client}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Example fields */}
          <div>
            <label className="block font-medium">Goal</label>
            <input type="text" className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block font-medium">Recommendation</label>
            <textarea className="border p-2 rounded w-full" />
          </div>
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Save Advice
          </button>
        </form>
      </main>
    </div>
  );
}
