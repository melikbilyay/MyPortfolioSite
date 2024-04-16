import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <img src="/Me.png" alt="Me" className="my-4 w-32 h-32"/>
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">

                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Necip Melik Bilyay
            </h1>

            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Someone who develops creative applications and websites.
                </h2>
                <a
                    href="/pdf/NecipMelikBilyay_CV.pdf"
                    download="NecipMelikBilyay_CV.pdf"
                    className="text-zinc-500 hover:text-zinc-300 focus:outline-none inline-flex items-center mt-2"
                >
                    <svg
                        className="w-6 h-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    Click to download my CV
                </a>
            </div>
        </div>
    );
}
