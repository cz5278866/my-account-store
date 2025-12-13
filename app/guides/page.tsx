"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { guides } from "@/data/guides";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Tag } from "lucide-react";

export default function GuidesPage() {
    const { lang, isZH } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)] pb-20">

            {/* Header Area */}
            <div className="bg-white border-b border-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        {isZH ? "教程中心" : "Guides Center"}
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        {isZH ? "这里为您提供最详细的操作指南和常见问题解答。" : "Detailed tutorials and FAQs to help you get started."}
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide) => {
                        const content = guide.content[lang];
                        return (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block h-full">
                                <article className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Tag className="h-3 w-3" />
                                            {guide.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {content.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {content.summary}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4 text-xs text-gray-400 font-medium">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {guide.date}
                                        </span>
                                        <span className="flex items-center gap-1 text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                            {isZH ? "阅读详情" : "Read More"} <ArrowRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
