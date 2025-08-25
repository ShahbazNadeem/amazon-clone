"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const allCurrencies = [
    { code: "USD", name: "United States dollar", flag: "/images/wise/us.svg" },
    { code: "GBP", name: "British pound", flag: "/images/wise/gb.svg" },
    { code: "INR", name: "Indian rupee", flag: "/images/wise/in.svg" },
    { code: "AED", name: "United Arab Emirates dirham", flag: "/images/wise/aed.svg" },
    { code: "AUD", name: "Australian dollar", flag: "/images/wise/aud.svg" },
    { code: "PKR", name: "Pakistani rupee", flag: "/images/wise/pkr.svg" },
    { code: "CAD", name: "Canadian dollar", flag: "/images/wise/ca.svg" },
    { code: "JPY", name: "Japanese yen", flag: "/images/wise/jpy.svg" },
    { code: "CNY", name: "Chinese yuan", flag: "/images/wise/cny.svg" },
    { code: "BGN", name: "Bulgarian lev", flag: "/images/wise/bgn.svg" },
    { code: "BRL", name: "Brazilian real", flag: "/images/wise/brl.svg" },
];

const popularCodes = ["USD", "EUR", "GBP", "INR", "AED", "AUD"];

export default function CurrencySelect() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(allCurrencies[0]);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    const popular = useMemo(
        () => allCurrencies.filter(c => popularCodes.includes(c.code)),
        []
    );

    const rest = useMemo(
        () => allCurrencies.filter(c => !popularCodes.includes(c.code)),
        []
    );

    const filtered = useMemo(() => {
        if (!query.trim()) return allCurrencies;
        const q = query.toLowerCase();
        return allCurrencies.filter(
            c => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
        );
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClick = e => {
            if (!wrapperRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleKey = e => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, []);

    // Autofocus search when opened
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 0);
    }, [open]);

    const SelectRow = ({ currency }) => (
        <button
            onClick={() => {
                setSelected(currency);
                setOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 ${selected.code === currency.code ? "bg-gray-50" : ""
                }`}
        >
            <span className="flex items-center gap-3">
                <Image
                    src={currency.flag}
                    alt={currency.code}
                    width={20}
                    height={20}
                    className="rounded-full"
                />
                <span className="font-medium">{currency.code}</span>
                <span className="text-gray-500 text-sm">{currency.name}</span>
            </span>
            {selected.code === currency.code && (
                <svg
                    className="h-5 w-5 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            )}
        </button>
    );

    return (
        <div ref={wrapperRef} className="relative w-96">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between border rounded-lg px-4 py-2 bg-white shadow-sm"
            >
                <div className="flex items-center gap-2">
                    <Image
                        src={selected.flag}
                        alt={selected.code}
                        width={20}
                        height={20}
                        className="rounded-full"
                    />
                    <span className="font-medium">{selected.code}</span>
                    <span className="text-gray-500 text-sm">{selected.name}</span>
                </div>
                <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""
                        }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
                    {/* Search bar */}
                    <div className="sticky top-0 bg-white border-b p-3">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search currency or country"
                                className="w-full rounded-md border px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <svg
                                className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="M20 20l-3-3" />
                            </svg>
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-gray-100"
                                >
                                    <svg
                                        className="h-4 w-4 text-gray-500"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Popular + All */}
                    {!query ? (
                        <>
                            <div className="px-3 py-2 text-sm text-gray-500">Popular currencies</div>
                            {popular.map(c => (
                                <SelectRow key={`pop-${c.code}`} currency={c} />
                            ))}
                            <div className="px-3 py-2 text-sm text-gray-500 border-t">All currencies</div>
                            {rest.map(c => (
                                <SelectRow key={`all-${c.code}`} currency={c} />
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="px-3 py-2 text-sm text-gray-500">
                                Results ({filtered.length})
                            </div>
                            {filtered.map(c => (
                                <SelectRow key={`f-${c.code}`} currency={c} />
                            ))}
                            {filtered.length === 0 && (
                                <div className="px-4 py-6 text-sm text-gray-500">No matches</div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
