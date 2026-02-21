"use client";

import Link from "next/link";
import { Camera, Leaf, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-between">

        <div>
          <h1 className="text-xl font-semibold text-center mb-6 text-green-600">
            Citruspecs
          </h1>

          <div className="space-y-6">
            
            <Link href="/assess/leaves">
              <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center shadow hover:scale-105 transition">
                <Camera size={48} className="text-green-600" />
                <p className="mt-4 text-green-600 font-medium">
                  Scan Kabuyaw Tree Status
                </p>
              </div>
            </Link>

            <Link href="/assess/soil">
              <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center shadow hover:scale-105 transition">
                <Leaf size={48} className="text-green-600" />
                <p className="mt-4 text-green-600 font-medium">
                  Scan Soil Status
                </p>
              </div>
            </Link>

          </div>
        </div>

        <div className="flex justify-between">
          <Link href="/assess/Environment">
            <button className="p-3 bg-green-100 rounded-xl">
              🌿
            </button>
          </Link>

          <Link href="/assess/settings">
            <button className="p-3 bg-green-100 rounded-xl">
              <Settings className="text-green-600" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
