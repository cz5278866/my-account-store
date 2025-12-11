import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Headphones, Lock, Check } from "lucide-react";
import { products } from "@/data/products"; // 导入刚才的数据

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          现已支持 USDT TRC20 自动支付
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          全球优质数字资产交易平台
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          全网最稳的 Telegram 老号、Twitter 蓝标号、AI 账号商店。
          <br />24小时自动发货，匿名交易，售后无忧。
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20">
            查看商品
          </Button>
          <Button size="lg" variant="outline" className="text-white border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent">
            联系客服
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Zap, title: "极速发货", desc: "支付成功后系统自动将账号信息发送至您的邮箱，无需等待。" },
            { icon: Lock, title: "加密支付", desc: "支持 USDT, BTC, LTC 等加密货币支付，无需 KYC，保护您的隐私。" },
            { icon: Headphones, title: "售后保障", desc: "账号登录问题？联系客服，工作时间内 1 小时极速换号。" }
          ].map((feature, i) => (
            <Card key={i} className="bg-zinc-900/50 border-zinc-800 text-white hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product List Section (NEW!) */}
      <section id="products" className="container mx-auto px-4 py-16 border-t border-zinc-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">热销商品推荐</h2>
          <p className="text-gray-400">选择最适合您业务需求的优质账号。</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="bg-zinc-900 border-zinc-800 text-white flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">

              {/* 热销标签 */}
              {product.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  {product.badge}
                </div>
              )}

              <CardHeader>
                <div className="text-sm text-blue-400 font-semibold mb-1">{product.type}</div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-zinc-400">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-6">${product.price}</div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href={`/products/${product.id}`} className="w-full">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold">
                    查看详情
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}