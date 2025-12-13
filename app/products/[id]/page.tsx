"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Globe, Shield, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductPage() {
    const params = useParams();
    const { lang, toggleLang } = useLanguage();

    // Find product
    // params can be null initially in some edge cases or tests, but usually defined in page
    const id = params?.id;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
                    <Link href="/" className="text-blue-600 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const content = product.content[lang];

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-[family-name:var(--font-geist-sans)]">

            {/* 顶部导航 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16">
                <div className="container mx-auto px-4 h-full flex items-center justify-between max-w-6xl">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        {lang === 'zh' ? '返回首页' : 'Back to Home'}
                    </Link>

                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs font-bold text-gray-600"
                    >
                        <Globe className="h-3.5 w-3.5" />
                        {lang === 'zh' ? 'CN / EN' : 'EN / CN'}
                    </button>
                </div>
            </nav>

            <main className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* 左侧：产品详情 (Apple Style) */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* 标题区 */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                                <Sparkles className="h-3 w-3 fill-current" />
                                {product.type} Series
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                                {content.name}
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                {content.description}
                            </p>
                        </div>

                        {/* 权益列表 */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-amber-500" />
                                {lang === 'zh' ? '核心权益' : 'Key Features'}
                            </h3>
                            <ul className="space-y-4">
                                {(content.features || []).map((feature: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                            <Check className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* details: Trust Signals */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                                <Shield className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '安全保障' : 'Secure & Safe'}</div>
                                <div className="text-xs text-gray-500 mt-1">{lang === 'zh' ? '30天无忧质保' : '30-Day Warranty'}</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                                <Zap className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                                <div className="text-sm font-bold text-gray-900">{lang === 'zh' ? '自动发货' : 'Instant Delivery'}</div>
                                <div className="text-xs text-gray-500 mt-1">{lang === 'zh' ? '支付后立即到账' : 'Get it seconds after pay'}</div>
                            </div>
                        </div>

                    </div>

                    {/* 右侧：购买卡片 (SaaS Style + Sticky) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100 border border-gray-100/50 backdrop-blur-xl relative overflow-hidden">

                                {/* 装饰背景 */}
                                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                                <div className="relative">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <div className="text-sm text-gray-500 font-medium mb-1">{lang === 'zh' ? '当前价格' : 'Current Price'}</div>
                                            <div className="flex items-base gap-1">
                                                <span className="text-2xl font-bold text-gray-400 -mb-2">{content.currency === 'CNY' ? '¥' : '$'}</span>
                                                <span className="text-6xl font-extrabold text-gray-900 tracking-tighter">{content.price}</span>
                                            </div>
                                        </div>
                                        {product.badge && (
                                            <div className="text-right">
                                                <div className="inline-flex px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                                                    {product.badge}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <a
                                            href={product.paymentLink}
                                            target="_blank"
                                            className="block w-full py-4 rounded-2xl bg-gray-900 hover:bg-black text-white font-bold text-lg text-center transition-all shadow-xl shadow-gray-900/20 hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            {lang === 'zh' ? '立即购买' : 'Buy Now'}
                                        </a>
                                        <p className="text-center text-xs text-gray-400">
                                            {lang === 'zh' ? '支持 支付宝 / 微信 / USDT' : 'Support Alipay / WeChat / USDT'}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
