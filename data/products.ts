export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
    type: 'Telegram' | 'Twitter' | 'AI' | 'SMM';
    badge?: string;
    paymentLink: string; // [新增] 收款链接字段
}

export const products: Product[] = [
    {
        id: 'tg-usa-5',
        name: 'Telegram 美国老号 (直登)',
        price: 15,
        description: '5个高质量美国老号，注册时长 > 6个月。适合新手尝试。',
        features: ['Session + JSON格式', '直登无验证', '质保 24 小时'],
        type: 'Telegram',
        badge: '新手推荐',
        paymentLink: 'https://google.com?q=buy-tg-starter' // 暂时用 Google 测试
    },
    {
        id: 'tg-bulk-20',
        name: 'Telegram 协议号 (20个)',
        price: 50,
        description: '20个精选老号，适合工作室群发营销，高性价比。',
        features: ['单价低至 $2.5', '抗封耐用', '赠送群发软件教程'],
        type: 'Telegram',
        badge: '超值推荐',
        paymentLink: 'https://google.com?q=buy-tg-bulk'
    },
    {
        id: 'x-blue',
        name: 'Twitter 蓝标认证号',
        price: 25,
        description: '带有蓝标认证的推特账号，权重极高，发帖排名靠前。',
        features: ['Token 登录', '含 100+ 粉丝', '适合品牌官推'],
        type: 'Twitter',
        paymentLink: 'https://google.com?q=buy-twitter'
    },
    {
        id: 'gpt-plus',
        name: 'ChatGPT Plus 成品号',
        price: 9.9,
        description: 'GPT-4 共享账号，正规充值，秒发货。',
        features: ['GPT-4 模型', 'DALL·E 3 作图', '30天售后'],
        type: 'AI',
        paymentLink: 'https://google.com?q=buy-gpt'
    }
];