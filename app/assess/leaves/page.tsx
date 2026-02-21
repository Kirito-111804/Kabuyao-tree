"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

export default function ScanPage() {
  const [scanning, setScanning] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center">

        <h1 className="text-lg font-semibold text-green-600 mb-6">
          Citrus Hystrix Status
        </h1>

        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
          <Camera size={40} className="text-gray-400" />
        </div>

        {!scanning ? (
          <p className="text-green-600 mb-4">
            Press the button to start scanning
          </p>
        ) : (
          <p className="text-green-600 mb-4">
            Scanning in progress...
          </p>
        )}

        <button
          onClick={() => setScanning(!scanning)}
          className="mt-4 bg-green-600 text-white p-6 rounded-full shadow-lg hover:scale-110 transition"
        >
          <Camera size={32} />
        </button>

      </div>
    </div>
  );
}
