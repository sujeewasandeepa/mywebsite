import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
    const navigations = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <header className="h-16 flex items-center justify-between">
            <ul className="flex gap-4">
                { navigations.map (nav => (
                    <Link href={nav.path}><a
                        className="font-semibold text-gray-400 hover:text-gray-500"
                    >
                    { nav.label }
                    </a>
                    </Link>
                ))}
            </ul>
        </header>
    )
}

export default Header