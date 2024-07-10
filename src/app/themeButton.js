"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeButton({ src }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
        const value = localStorage.getItem("theme");
        if (!value) return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        return value
        }
    });
    useEffect(()=>{
        const html = document.getElementsByTagName("html")[0];
        if(theme == "dark"){
            localStorage.setItem("theme", theme);
            html.classList.add('dark')
        }else{
            localStorage.setItem("theme", theme);
            html.classList.remove('dark')
        }
    },[theme]);
    const switchMode = () => {
        
        if (theme !== 'dark') {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <Image src={src}
            id="themeRope"
            className="fixed right-5 -top-24 [&:not(:active)]:animate-[pushDown_0.5s]"
            onClick={switchMode}
            draggable="false"
            alt="rope"
            width="40px"
            priority />
    );
}