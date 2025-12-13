export interface Guide {
    slug: string; // URL slug, e.g., 'how-to-use-session'
    category: 'Telegram' | 'TikTok' | 'General';
    date: string; // 格式: YYYY-MM-DD

    // 双语内容
    content: {
        zh: {
            title: string;
            summary: string;
            content: string; // 教程正文
        };
        en: {
            title: string;
            summary: string;
            content: string;
        };
    };
}

export const guides: Guide[] = [
    {
        slug: 'how-to-use-session-accounts',
        category: 'Telegram',
        date: '2025-11-20',
        content: {
            zh: {
                title: 'TG 协议号 (Session) 如何安全登陆和使用？',
                summary: '详解 Session 文件的工作原理，以及如何在 Windows/Mac/Linux 上安全、批量导入和管理您的 Telegram 账号。',
                content: `
          ## 协议号工作原理

          协议号（Session 文件）是一种绕过传统的手机号 + 验证码登录方式的便捷方式。它包含了一个会话令牌，允许您直接通过特定客户端（如 Telethon、Pyrogram）登陆。

          ### 🚀 步骤一：准备环境
          
          您需要一个支持 Session 格式导入的工具，例如 [Termux] 或定制的群控软件。

          ### 💡 安全提示
          
          * **不要修改密码：** 首次登录后，请勿立即修改密码，这可能触发风控。
          * **养号：** 登陆后，先进行少量阅读、点赞操作，模拟真实用户行为，养号至少 48 小时。
        `,
            },
            en: {
                title: 'How to Safely Log In and Use Telegram Session Accounts?',
                summary: 'A detailed guide on how Session files work, and how to safely import and manage your Telegram accounts in bulk on Windows/Mac/Linux.',
                content: `
          ## Session Account Mechanism

          Session accounts (Session files) provide a convenient way to bypass traditional phone number + code login. They contain a session token allowing direct login via specific clients (e.g., Telethon, Pyrogram).

          ### 🚀 Step 1: Environment Setup
          
          You need a tool that supports Session file import, such as [Termux] or a custom bulk control software.

          ### 💡 Security Tips
          
          * **Do Not Change Password:** Avoid changing the password immediately after the first login, as this can trigger risk control flags.
          * **Warm-up Period:** After logging in, perform minor activities like reading and liking to simulate real user behavior. Warm up the account for at least 48 hours.
        `,
            },
        },
    },
    {
        slug: 'tiktok-creator-rewards-setup',
        category: 'TikTok',
        date: '2025-12-05',
        content: {
            zh: {
                title: 'TikTok 美区创作者基金 (Creator Rewards) 极速开通教程',
                summary: '详细指导如何使用我们提供的美区账号，完成 Creator Rewards Program 的注册、税务填写（W-8BEN）和绑定收款，快速获得美刀收益。',
                content: `
          ## 变现的前提条件

          1. 账号必须是美区原生 IP 注册。
          2. 必须年满 18 周岁。
          3. 粉丝数达到 10,000 以上。
          
          ### 🛠️ 注册步骤
          
          1. **VPN/代理：** 确保您的网络环境稳定在美国 IP 上。
          2. **申请：** 在 TikTok Creator Tools 中点击申请 Creator Rewards Program。
          3. **税务填写：** 填写 W-8BEN 表格（非美国人适用），这是关键一步。
          
          ... (后续内容)
        `,
            },
            en: {
                title: 'TikTok US Creator Rewards Program Quick Setup Guide',
                summary: 'A detailed tutorial on how to use the US accounts we provide to complete the Creator Rewards Program registration, tax form (W-8BEN), and link payment methods to quickly earn revenue in USD.',
                content: `
          ## Monetization Prerequisites

          1. Account must be registered under a native US IP address.
          2. Must be 18 years of age or older.
          3. Must have over 10,000 followers.

          ### 🛠️ Registration Steps

          1. **VPN/Proxy:** Ensure your network environment is consistently on a US IP.
          2. **Application:** Apply for the Creator Rewards Program within TikTok Creator Tools.
          3. **Tax Form:** Fill out the W-8BEN form (for non-US citizens). This is the crucial step.
          
          ... (More content)
        `,
            },
        },
    },
];