"use client";

import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const [scanning, setScanning] = useState(false);
  const [history, setHistory] = useState<{ time: string }[]>([]); // ✅ TypeScript fix
  const [progress, setProgress] = useState(0);

  // Simulate scanning progress
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (scanning) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setScanning(false);
            // Add new scan to history
            setHistory((prevHistory) => [
              { time: new Date().toLocaleTimeString() },
              ...prevHistory,
            ]);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [scanning]);

  const startScan = () => {
    if (!scanning) setScanning(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        
        {/* Header with Back Button */}
        <div className="w-full flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeftIcon className="w-6 h-6 text-green-600" />
          </button>
          <h1 className="text-2xl font-semibold text-green-600 ml-4">
            Citrus Hystrix Status
          </h1>
        </div>

        {/* Scan Area */}
        <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner relative mb-6">
          {!scanning && <Camera size={48} className="text-gray-400" />}

          {scanning && (
            <div className="absolute flex items-center justify-center">
              {/* Circular progress */}
              <svg className="w-16 h-16 animate-spin text-green-600" viewBox="0 0 50 50">
                <circle
                  className="opacity-25"
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  className="opacity-75"
                  cx="25"
                  cy="25"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="31.4 31.4"
                  strokeLinecap="round"
                  fill="none"
                  style={{ strokeDashoffset: 31.4 - (progress / 100) * 31.4 }}
                />
              </svg>
            </div>
          )}
        </div>

        {/* Status Text */}
        <p className={`text-base mb-6 ${scanning ? "text-yellow-600" : "text-green-600"}`}>
          {scanning ? "Scanning in progress..." : "Press the button to start scanning"}
        </p>

        {/* Scan Button with Ripple / Scale effect */}
        <button
          onClick={startScan}
          className="bg-green-600 p-6 rounded-full shadow-lg hover:scale-110 active:scale-95 transition transform relative overflow-hidden flex items-center justify-center"
        >
          <Camera size={32} className="text-white" />
          {/* Ripple Effect */}
          <span className="absolute w-full h-full rounded-full bg-white opacity-10 animate-ping"></span>
        </button>

        {/* Scan History */}
        {history.length > 0 && (
          <div className="w-full mt-8">
            <h2 className="text-gray-500 text-sm uppercase font-medium mb-2">
              Scan History
            </h2>
            <ul className="divide-y">
              {history.map((item, index) => (
                <li key={index} className="py-2 text-gray-800">
                  Scanned at {item.time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}