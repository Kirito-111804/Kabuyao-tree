"use client";

export default function Settings() {
  const items = [
    "FAQ",
    "Privacy Policy",
    "Term of Service",
    "App Appearance",
    "Accessibility",
    "Feedback",
    "About Us",
    "Rate Us",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[390px] h-[844px] bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-lg font-semibold text-green-600 mb-6">
          SETTINGS
        </h1>

        <div className="bg-gray-100 rounded-2xl p-4 space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2 last:border-none"
            >
              <span className="text-green-600">{item}</span>
              <span className="text-green-600">{">"}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
