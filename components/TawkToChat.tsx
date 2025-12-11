"use client";
import { useEffect } from "react";

export default function TawkToChat() {
    useEffect(() => {
        // @ts-ignore
        var Tawk_API = window.Tawk_API || {};
        // @ts-ignore
        var Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            // OFFICIAL SOURCE URL
            s1.src = "https://embed.tawk.to/693a979cf831981980dd3c8d/1jc6e0f42";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
            }
        })();
    }, []);

    return null;
}
