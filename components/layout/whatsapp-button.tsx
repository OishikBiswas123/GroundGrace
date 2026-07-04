"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "918981891586";

  return (
    <a
      href={"https://wa.me/" + phone}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}