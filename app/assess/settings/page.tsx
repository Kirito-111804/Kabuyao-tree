"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  StarIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function Settings() {
  const router = useRouter();

  // Group items into sections for Android-style layout
  const sections = [
    {
      title: "General",
      items: [
        { label: "App Appearance", href: "/appearance", icon: PaintBrushIcon },
        { label: "Accessibility", href: "/accessibility", icon: EyeIcon },
      ],
    },
    {
      title: "Support",
      items: [
        { label: "FAQ", href: "/faq", icon: QuestionMarkCircleIcon },
        { label: "Feedback", href: "/feedback", icon: ChatBubbleLeftRightIcon },
        { label: "About Us", href: "/about", icon: InformationCircleIcon },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "/privacy", icon: ShieldCheckIcon },
        { label: "Terms of Service", href: "/terms", icon: DocumentTextIcon },
      ],
    },
    {
      title: "Extras",
      items: [
        { label: "Rate Us", href: "/rate", icon: StarIcon },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Header with Back Button */}
        <div className="flex items-center px-4 py-4 border-b">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ArrowLeftIcon className="w-6 h-6 text-green-600" />
          </button>
          <h1 className="text-2xl font-semibold text-green-600 ml-4">
            Settings
          </h1>
        </div>

        {/* Sections */}
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            {/* Section Title */}
            <div className="px-6 py-2 text-xs text-gray-500 uppercase font-medium">
              {section.title}
            </div>

            {/* Section Items */}
            <div className="divide-y">
              {section.items.map((item, iIndex) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={iIndex}
                    href={item.href}
                    className="flex items-center px-6 py-4 hover:bg-gray-50 transition"
                  >
                    {/* Icon with background */}
                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                      <Icon className="w-5 h-5 text-green-600" />
                    </div>

                    {/* Label */}
                    <span className="ml-4 text-gray-800 text-base flex-1">
                      {item.label}
                    </span>

                    {/* Chevron */}
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}