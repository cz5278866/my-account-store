"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { Check, Zap, Shield, Crown, Star, ArrowRight, Sparkles, Globe, Search, X, Send, Bot, Twitter, Instagram, Video, LayoutGrid, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const CONTACT_LINK = "https://t.me/YOUR_TG_ID";

export default function Home() {
  const { lang, toggleLang, isZH } = useLanguage();
  const [showOrderModal, setShowOrderModal] = useState(false);

  // 分类配置 (把所有分类的定义都放在这里，修改更方便)
  const categoryConfig = [
    { id: "telegram", type: "Telegram", icon: Send, name: "Telegram", color: "text-blue-500", bg: "bg-blue-100", text: "text-blue-600" },
    { id: "twitter", type: "Twitter", icon: Twitter, name: "Twitter / X", color: "text-sky-500", bg: "bg-sky-100", text: "text-sky-600" },
    { id: "instagram", type: "Instagram", icon: Instagram, name: "Instagram", color: "text-pink-500", bg: "bg-pink-100", text: "text-pink-600" },
    { id: "tiktok", type: "TikTok", icon: Video, name: "TikTok", color: "text-black", bg: "bg-gray-100", text: "text-black" },
    { id: "ai", type: "AI", icon: Bot, name: "AI Tools", color: "text-green-500", bg: "bg-green-100", text: "text-green-600" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // --- 查单弹窗 ---
  const OrderLookupModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
        <button onClick={() => setShowOrderModal(false)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-900">
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-600" />
          {isZH ? "订单查询" : "Track Order"}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {isZH ? "请输入您的下单邮箱或订单号查询卡密。" : "Enter your email or order ID to retrieve your key."}
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              {isZH ? "订单号 / 邮箱" : "Order ID / Email"}
            </label>
            <input type="text" placeholder={isZH ? "例如：20251212xxxxx" : "e.g. 20251212xxxxx"} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
            {isZH ? "立即查询" : "Search Now"}
          </button>
        </div>
      </div>
    </div>
  );

  // --- 商品卡片 ---
  const ProductCard = ({ product, isRecommended }: any) => {
    const content = product.content[lang];
    if (!content) return null;
    return (
      <div className={`relative flex flex-col p-6 rounded-3xl transition-all duration-300 h-full ${isRecommended
          ? 'bg-white shadow-2xl shadow-blue-900/10 ring-2 ring-blue-600 scale-[1.02] z-10'
          : 'bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1'
        }`}>
        {isRecommended && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20 flex items-center gap-1">
            <Star className="h-3 w-3 fill-current" />
            {isZH ? "店长推荐" : "Best Seller"}
          </div>
        )}
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{content.name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">{content.description}</p>
        </div>
        <div className="mb-6 flex items-baseline justify-center gap-1 border-b border-gray-50 pb-6">
          <span className="text-sm font-semibold text-gray-400">{isZH ? '¥' : '$'}</span>
          <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{content.price}</span>
          <span className="text-xs font-medium text-gray-400 ml-1">{content.currency}</span>
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
          {(content.features || []).map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${isRecommended ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                <Check className="h-2.5 w-2.5" />
              </div>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3">
          <a href={product.paymentLink} target="_blank" className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-lg ${isRecommended
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30'
              : 'bg-gray-900 hover:bg-gray-800 text-white shadow-gray-200'
            }`}>
            {isZH ? "立即购买" : "Buy Now"} <ArrowRight className="h-4 w-4" />
          </a>
          <Link href={`/products/${product.id}`} className="block text-center text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors">
            {isZH ? "查看详细参数" : "View Details"}
          </Link>
        </div>
      </div>
    );
  };

  // --- ✨ 智能分类区块组件 (带展开/收起功能) ---
  const CategorySection = ({ config }: { config: any }) => {
    // 1. 筛选出当前类型的商品
    const items = products.filter((p) => p.type === config.type);

    // 2. 定义展开状态
    const [isExpanded, setIsExpanded] = useState(false);

    // 如果没有商品，直接不渲染
    if (items.length === 0) return null;

    // 3. 计算要显示的商品 (默认8个，展开显示全部)
    const displayItems = isExpanded ? items : items.slice(0, 8);
    const hasMore = items.length > 8;

    return (
      <section id={config.id} className="scroll-mt-48">
        {/* 标题 */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`h-10 w-10 rounded-2xl ${config.bg} flex items-center justify-center ${config.text} shadow-sm`}>
            <config.icon className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">
            {isZH ? `${config.name} 专区` : `${config.name} Accounts`}
          </h2>
          <span className="text-sm font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {items.length}
          </span>
        </div>

        {/* 商品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((p, idx) => (
            <ProductCard key={p.id} product={p} isRecommended={idx === 0} />
          ))}
        </div>

        {/* 展开/收起按钮 (只有当商品大于8个时才显示) */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
            >
              {isExpanded ? (
                <>
                  {isZH ? "收起列表" : "Show Less"} <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  {isZH ? `查看全部 (${items.length - 8})` : `View More (${items.length - 8})`} <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-[family-name:var(--font-geist-sans)] selection:bg-blue-100 selection:text-blue-900 pb-20">

      {showOrderModal && <OrderLookupModal />}

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tight flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-blue-200 shadow-lg">
              <Sparkles className="h-4 w-4 fill-current" />
            </div>
            DigitalStore
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => setShowOrderModal(true)} className="hidden md:flex text-base font-medium text-gray-500 hover:text-blue-600 transition-colors items-center gap-2">
              <Search className="h-5 w-5" /> {isZH ? "查单" : "Orders"}
            </button>
            <a href={CONTACT_LINK} target="_blank" className="hidden md:flex text-base font-medium text-gray-500 hover:text-blue-600 transition-colors items-center gap-2">
              <Send className="h-5 w-5" /> {isZH ? "客服" : "Support"}
            </a>
            <button onClick={toggleLang} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-bold text-gray-700 ring-1 ring-inset ring-gray-200">
              <Globe className="h-4 w-4 text-blue-600" /> {isZH ? "CN" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <div className="container mx-auto px-4 pt-16 pb-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-700 mb-6 ring-1 ring-inset ring-blue-600/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            {isZH ? "2025 官方直营 · 售后无忧" : "2025 Official Store · 24/7 Support"}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            {isZH ? "为专业人士准备的" : "Premium Digital Assets"} <br />
            <span className="text-blue-600">{isZH ? "顶级数字资产" : "For Professionals"}</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            {isZH ? "Telegram / TikTok / Instagram 优质账号一站式采购。" : "One-stop shop for Telegram, TikTok & Instagram accounts."}
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-400">
            <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-amber-500" /> {isZH ? "极速发货" : "Fast"}</span>
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-green-500" /> {isZH ? "售后包赔" : "Safe"}</span>
            <span className="flex items-center gap-1"><Crown className="h-3.5 w-3.5 text-purple-500" /> {isZH ? "一手资源" : "Private"}</span>
          </div>
        </div>

        {/* 吸顶分类导航 */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 shadow-sm mb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 overflow-x-auto py-4 no-scrollbar">
              <div className="flex items-center gap-2 pr-4 border-r border-gray-200 mr-2">
                <LayoutGrid className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">{isZH ? "分类" : "Menu"}</span>
              </div>
              {categoryConfig.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-all active:scale-95 whitespace-nowrap group"
                >
                  <cat.icon className={`h-5 w-5 ${cat.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-bold text-gray-700">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 商品列表区 (使用循环渲染，更简洁) */}
        <div className="container mx-auto px-4 max-w-7xl pb-16 space-y-24">
          {categoryConfig.map((config) => (
            <CategorySection key={config.id} config={config} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">&copy; 2025 DigitalStore. All rights reserved.</p>
        </div>
      </footer>
      <a href={CONTACT_LINK} target="_blank" className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-110 hover:bg-blue-700 active:scale-95">
        <Bot className="h-7 w-7" />
        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>
      </a>

    </div>
  );
}