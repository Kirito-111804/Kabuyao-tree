"use client";

export default function Environment() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-lg font-semibold text-green-600 mb-6">
          ENVIRONMENT
        </h1>

        <div className="space-y-4">

          <div className="bg-gray-100 p-6 rounded-2xl">
            <p className="text-green-600 font-medium">
              TEMPERATURE
            </p>
            <p className="text-gray-600 mt-2">
              28°C - Optimal for Citrus Hystrix
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl">
            <p className="text-green-600 font-medium">
              HUMIDITY
            </p>
            <p className="text-gray-600 mt-2">
              70% - Suitable range
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
