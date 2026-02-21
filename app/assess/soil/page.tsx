"use client";

export default function SoilPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-lg font-semibold text-green-600 mb-6">
          SOIL PROPERTIES
        </h1>

        <div className="bg-gray-100 p-6 rounded-2xl space-y-3">
          <p>pH Level: 6.0 - 6.5 (Ideal)</p>
          <p>Moisture: Moderate</p>
          <p>Drainage: Good</p>
        </div>

      </div>
    </div>
  );
}
