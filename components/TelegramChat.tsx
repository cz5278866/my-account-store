"use client";

import Link from "next/link";
import { Send } from "lucide-react";

export default function TelegramChat() {
    // TODO: User needs to change this to their real TG username
    const tgUsername = "zhangsan";

    return (
        <Link
            href={`https://t.me/${tgUsername}`}
            target="_blank"
            className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 active:scale-95 animate-bounce"
            title="Contact on Telegram"
        >
            <Send className="h-6 w-6 text-white" />
        </Link>
    );
}
