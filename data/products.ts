export interface Product {
    id: string;
    // 👇 1. 扩展类型定义，加入 Instagram 和 TikTok
    type: 'Telegram' | 'Twitter' | 'AI' | 'Instagram' | 'TikTok';
    badge?: string;
    paymentLink: string;

    // 兼容旧字段 (可选)
    name?: string;
    description?: string;
    price?: number | string;
    features?: string[];

    // 双语内容
    content: {
        zh: {
            name: string;
            description: string;
            price: string;
            currency: string;
            features: string[];
        };
        en: {
            name: string;
            description: string;
            price: string;
            currency: string;
            features: string[];
        };
    };
}

const TG_USERNAME = "zhangsan"; // ⚠️ 记得改您的 TG 用户名

const createTgLink = (productName: string) => {
    const text = `Hi, I want to buy: ${productName}`;
    return `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(text)}`;
};

export const products: Product[] = [
    // --- 原有的 Telegram ---
    {
        id: 'tg-usa-5',
        type: 'Telegram',
        badge: 'Hot / 店长推荐',
        paymentLink: createTgLink('TG USA Account'),
        content: {
            zh: {
                name: 'Telegram 美国老号 (直登)',
                description: '5个高质量美国老号，注册时长 > 6个月。适合新手尝试。',
                price: '110',
                currency: 'CNY',
                features: ['Session + JSON格式', '直登无验证', '质保 24 小时']
            },
            en: {
                name: 'Telegram USA Aged Account',
                description: '5 High-quality USA accounts. Aged > 6 months. Best for beginners.',
                price: '15',
                currency: 'USD',
                features: ['Session + JSON Format', 'Direct Login (No 2FA)', '24h Warranty']
            }
        }
    },
    {
        id: 'tg-bulk-20',
        type: 'Telegram',
        badge: 'Value / 超值',
        paymentLink: createTgLink('TG Bulk 20'),
        content: {
            zh: {
                name: 'Telegram 协议号 (20个)',
                description: '20个精选老号，适合工作室群发营销，高性价比。',
                price: '360',
                currency: 'CNY',
                features: ['单价低至 $2.5', '抗封耐用', '赠送群发软件教程']
            },
            en: {
                name: 'Telegram Session Accounts (20 Pack)',
                description: '20 Selected aged accounts. Perfect for bulk marketing & studios.',
                price: '50',
                currency: 'USD',
                features: ['Low as $2.5/each', 'Anti-ban Durability', 'Free Bulk Tool Guide']
            }
        }
    },

    // --- 原有的 Twitter ---
    {
        id: 'x-blue',
        type: 'Twitter',
        badge: 'Pro',
        paymentLink: createTgLink('Twitter Blue'),
        content: {
            zh: {
                name: 'Twitter 蓝标认证号',
                description: '带有蓝标认证的推特账号，权重极高，发帖排名靠前。',
                price: '180',
                currency: 'CNY',
                features: ['Token 登录', '含 100+ 粉丝', '适合品牌官推']
            },
            en: {
                name: 'Twitter / X Blue Badge',
                description: 'Verified Blue Badge account. High ranking tweets. High Authority.',
                price: '25',
                currency: 'USD',
                features: ['Token Login', '100+ Real Followers', 'Best for Branding']
            }
        }
    },

    // --- ✨ 新增：Instagram ---
    {
        id: 'ins-aged',
        type: 'Instagram',
        badge: 'New',
        paymentLink: createTgLink('Instagram Aged'),
        content: {
            zh: {
                name: 'Instagram 2019-2022 老号',
                description: '自带部分粉丝和帖子，权重高，耐封，适合做各类业务主页。',
                price: '35',
                currency: 'CNY',
                features: ['带 Cookie 登录', '含头像/帖子', '已过手机验证']
            },
            en: {
                name: 'Instagram Aged Account (2019+)',
                description: 'Aged accounts with posts/followers. High trust score. Anti-ban.',
                price: '5',
                currency: 'USD',
                features: ['Cookie Login', 'Profile/Posts included', 'Phone Verified']
            }
        }
    },
    {
        id: 'ins-10k',
        type: 'Instagram',
        badge: 'Popular',
        paymentLink: createTgLink('Instagram 10k'),
        content: {
            zh: {
                name: 'Instagram 万粉号 (真人粉)',
                description: '真实活跃粉丝，互动率高，即买即用，适合快速起号。',
                price: '450',
                currency: 'CNY',
                features: ['10k+ 真实粉丝', '带原始邮箱', '无违规记录']
            },
            en: {
                name: 'Instagram 10k Followers',
                description: 'Real active followers with good engagement. Ready to use.',
                price: '65',
                currency: 'USD',
                features: ['10k+ Real Fans', 'Original Email Included', 'Clean History']
            }
        }
    },

    // --- ✨ 新增：TikTok ---
    {
        id: 'tiktok-us-beta',
        type: 'TikTok',
        badge: 'Hot / 爆款',
        paymentLink: createTgLink('TikTok US Beta'),
        content: {
            zh: {
                name: 'TikTok 美区基金号 (创作者)',
                description: '已开通中视频计划 (Beta Program)，发视频即可产生收益。',
                price: '210',
                currency: 'CNY',
                features: ['美区原生 IP 注册', '已开通创作者基金', '免税务填写教程']
            },
            en: {
                name: 'TikTok US Creator Rewards',
                description: 'Creativity Program Beta enabled. Monetize your views instantly.',
                price: '30',
                currency: 'USD',
                features: ['US Native IP', 'Rewards Program Active', 'Tax Guide Included']
            }

        }
    },
    {
        id: 'tiktok-ads',
        type: 'TikTok',
        paymentLink: createTgLink('TikTok Ads'),
        content: {
            zh: {
                name: 'TikTok Ads 广告户 (BC户)',
                description: '企业级广告账户，不限额，抗封，适合投放带货广告。',
                price: '550',
                currency: 'CNY',
                features: ['企业认证 BC 户', '不限消耗额度', '赠送防关联指纹']
            },
            en: {
                name: 'TikTok Ads Business Center',
                description: 'Enterprise ad account. No spending limit. Best for dropshipping.',
                price: '78',
                currency: 'USD',
                features: ['Verified BC Account', 'Unlimited Spend', 'Anti-detect Guide']
            }
        }
    },


    // --- 原有的 AI ---
    {
        id: 'gpt-plus',
        type: 'AI',
        paymentLink: createTgLink('GPT Plus'),
        content: {
            zh: {
                name: 'ChatGPT Plus 成品号',
                description: 'GPT-4/5 独享账号，正规充值，秒发货。',
                price: '72',
                currency: 'CNY',
                features: ['GPT-4/5 模型', 'DALL·E 3 作图', '30天售后']
            },
            en: {
                name: 'ChatGPT Plus Premium',
                description: 'Private GPT-4/5 account. Legit subscription. Instant delivery.',
                price: '9.9',
                currency: 'USD',
                features: ['GPT-4/5 Access', 'DALL·E 3 Supported', '30-Day Warranty']
            }
        }
    }
];