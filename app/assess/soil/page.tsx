"use client";

import { useRouter } from "next/navigation";
import {
  AdjustmentsHorizontalIcon,
  CloudIcon,
  ArrowUpRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function SoilPage() {
  const router = useRouter();

  const soilProperties = [
    { label: "pH Level", value: "6.0 - 6.5 (Ideal)", icon: AdjustmentsHorizontalIcon },
    { label: "Moisture", value: "Moderate", icon: CloudIcon },
    { label: "Drainage", value: "Good", icon: ArrowUpRightIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col">
        
        {/* Header with Back Button */}
        <div className="w-full flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeftIcon className="w-6 h-6 text-green-600" />
          </button>
          <h1 className="text-2xl font-semibold text-green-600 ml-4">
            Soil Properties
          </h1>
        </div>

        {/* Soil Properties Card */}
        <div className="bg-gray-100 rounded-2xl divide-y">
          {soilProperties.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{prop.label}</span>
                </div>
                <span className="text-gray-600">{prop.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}