"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Mobile Container */}
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between">
        
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold text-green-600">
            Welcome to Citruspecs
          </h1>

          <p className="text-gray-500 mt-3">
            Citrus Hystrix Sustainability System
          </p>
        </div>

        <button
          onClick={() => router.push("/assess")}
          className="bg-green-500 text-white py-3 rounded-xl font-semibold"
        >
          Let’s Get Started →
        </button>

      </div>
    </div>
  );
}
