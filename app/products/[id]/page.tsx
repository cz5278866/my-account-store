import { products } from "@/data/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// 1. Generate Static Params for SSG
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

// 2. Generate Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - Instant Delivery | My Account Store`,
        description: `Buy ${product.name} instantly. ${product.description} Secure crypto payment and 24/7 support.`,
        openGraph: {
            title: `${product.name} - Premium Digital Asset`,
            description: product.description,
        },
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 pb-20">
            <div className="container mx-auto px-4 py-8">
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Store
                </Link>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Visual Representation */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                            {/* Visual Placeholder based on type */}
                            {product.type === 'Telegram' && <Globe className="h-32 w-32 text-blue-500 opacity-80" />}
                            {product.type === 'Twitter' && <Zap className="h-32 w-32 text-white opacity-80" />}
                            {product.type === 'AI' && <Cpu className="h-32 w-32 text-green-500 opacity-80" />}
                            {!['Telegram', 'Twitter', 'AI'].includes(product.type) && <ShieldCheck className="h-32 w-32 text-purple-500 opacity-80" />}

                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-mono text-zinc-400 border border-white/10">
                                ID: {product.id}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col justify-center">
                        {product.badge && (
                            <Badge className="w-fit mb-4 bg-blue-600 text-white hover:bg-blue-700">
                                {product.badge}
                            </Badge>
                        )}

                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{product.name}</h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">{product.description}</p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-5xl font-bold text-white">${product.price}</span>
                            <span className="text-gray-500 font-medium">USD</span>
                        </div>

                        <div className="flex gap-4 mb-10">
                            <a href={product.paymentLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button size="lg" className="w-full h-14 text-lg bg-white text-black hover:bg-gray-200 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    Buy Now & Instant Delivery
                                </Button>
                            </a>
                        </div>

                        {/* Feature List */}
                        <Card className="bg-zinc-900/50 border-zinc-800">
                            <CardContent className="pt-6">
                                <h3 className="font-semibold text-lg mb-4 text-white">Features & Guarantees</h3>
                                <ul className="space-y-3">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-start text-gray-300">
                                        <ShieldCheck className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                                        <span>Secure Crypto Payment (USDT/BTC/LTC)</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Detailed Description Section */}
                <div className="border-t border-zinc-800 pt-16">
                    <h2 className="text-2xl font-bold mb-6">Product Description</h2>
                    <div className="prose prose-invert max-w-none text-gray-400">
                        <p>
                            Get immediate access to high-quality <strong>{product.name}</strong>.
                            This product is verified and ready for use. We ensure 100% anonymity and security for all our customers.
                        </p>
                        <h3 className="text-white mt-6 mb-2">Delivery Process</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Click "Buy Now" to proceed to the payment page.</li>
                            <li>Complete the payment using your preferred cryptocurrency.</li>
                            <li>Receive your account details via email instantly.</li>
                        </ul>
                        <h3 className="text-white mt-6 mb-2">Support</h3>
                        <p>
                            If you encounter any issues, our 24/7 support team is available to assist you.
                            We offer a replacement guarantee for any non-working accounts within the warranty period.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
