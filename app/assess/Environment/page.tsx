"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  FireIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export default function Environment() {
  const router = useRouter();

  const environmentData = [
    {
      label: "Temperature",
      value: "28°C - Optimal for Citrus Hystrix",
      icon: FireIcon,
    },
    {
      label: "Humidity",
      value: "70% - Suitable range",
      icon: CloudIcon,
    },
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
            Environment
          </h1>
        </div>

        {/* Environment Data Cards */}
        <div className="space-y-4">
          {environmentData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:bg-gray-50 transition relative overflow-hidden"
              >
                {/* Icon with circular background */}
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mt-1">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>

                {/* Text content */}
                <div>
                  <p className="text-green-600 font-medium">{item.label}</p>
                  <p className="text-gray-600 mt-1">{item.value}</p>
                </div>

                {/* Optional ripple effect */}
                <span className="absolute w-full h-full rounded-2xl bg-white opacity-0 hover:opacity-10 transition"></span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}