"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'zh' | 'en';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    isZH: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // 默认是中文
    const [lang, setLangState] = useState<Lang>('zh');

    // 初始化时，尝试从本地缓存读取语言设置（记住用户的选择）
    useEffect(() => {
        const savedLang = localStorage.getItem('app-lang') as Lang;
        if (savedLang) {
            setLangState(savedLang);
        }
    }, []);

    // 包装 setLang，同步更新本地缓存
    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        localStorage.setItem('app-lang', newLang);
    };

    const toggleLang = () => {
        setLang(lang === 'zh' ? 'en' : 'zh');
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, isZH: lang === 'zh' }}>
            {children}
        </LanguageContext.Provider>
    );
}

// 这是给页面用的“接收器”
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}