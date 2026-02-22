"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(false);
  const [history, setHistory] = useState<{ time: string }[]>([]);

  // Start camera on mobile when scanning
  useEffect(() => {
    let stream: MediaStream;
    const startCamera = async () => {
      try {
        if (scanning && videoRef.current) {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }, // back camera
          });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setScanning(false);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [scanning]);

  const startScan = () => {
    setScanning(true);
    setHistory((prev) => [
      { time: new Date().toLocaleTimeString() },
      ...prev,
    ]);
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

        {/* Camera / Scan Area */}
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center shadow-inner relative mb-6 overflow-hidden">
          {!scanning && (
            <p className="text-gray-400">Press the button to start camera scan</p>
          )}

          {scanning && (
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-2xl"
              playsInline
              muted
            />
          )}
        </div>

        {/* Status Text */}
        <p className={`text-base mb-6 ${scanning ? "text-yellow-600" : "text-green-600"}`}>
          {scanning ? "Scanning with camera..." : "Idle"}
        </p>

        {/* Scan Button */}
        <button
          onClick={startScan}
          className="bg-green-600 p-6 rounded-full shadow-lg hover:scale-110 active:scale-95 transition transform relative overflow-hidden flex items-center justify-center"
        >
          <span className="text-white font-bold">SCAN</span>
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