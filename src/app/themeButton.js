"use client";
import Image from "next/image";

export default function ThemeButton({ src }) {
    const switchMode = () => {
        const html = document.getElementsByTagName("html")[0];
        const themeRope = document.getElementById("themeRope");
        // themeRope.classList.remove("pushDownRope");
        // themeRope.classList.add("pushDownRope");
        if (localStorage.theme !== 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.setItem("theme", "dark");
            html.classList.add('dark')
        } else {
            localStorage.setItem("theme", "light");
            html.classList.remove('dark')
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