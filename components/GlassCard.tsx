import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
    return (
        <div
            className={`
        relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        transition-all duration-300
        hover:border-white/20
        hover:bg-white/10
        hover:-translate-y-1
        ${className}
      `}
        >
            {children}
        </div>
    );
};