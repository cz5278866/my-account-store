"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { guides } from "@/data/guides";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useParams } from "next/navigation";

export default function GuideDetailPage() {
    const { lang, isZH } = useLanguage();
    const params = useParams();
    const slug = params.slug;

    const guide = guides.find((g) => g.slug === slug);

    if (!guide) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {isZH ? "未找到教程" : "Guide Not Found"}
                </h1>
                <Link href="/guides" className="text-blue-600 hover:underline">
                    {isZH ? "返回教程列表" : "Back to Guides"}
                </Link>
            </div>
        );
    }

    const content = guide.content[lang];

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-[family-name:var(--font-geist-sans)] pb-20">
            {/* Navbar with Back Button */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16">
                <div className="container mx-auto px-4 h-full flex items-center max-w-4xl">
                    <Link href="/guides" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        {isZH ? "返回列表" : "Back to Guides"}
                    </Link>
                </div>
            </nav>

            <main className="container mx-auto px-4 pt-8 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <header className="mb-10 text-center border-b border-gray-100 pb-10">
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full">
                                <Calendar className="h-3.5 w-3.5" />
                                {guide.date}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full">
                                <User className="h-3.5 w-3.5" />
                                DigitalStore
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            {content.title}
                        </h1>
                        <p className="text-xl text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
                            {content.summary}
                        </p>
                    </header>

                    {/* 
              Prose article wrapper for content. 
              Using whitespace-pre-wrap because the content is currently simple markdown text.
            */}
                    <article className="prose prose-lg max-w-none prose-blue prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 whitespace-pre-wrap text-gray-700 font-sans">
                        {content.content}
                    </article>
                </div>
            </main>
        </div>
    );
}
