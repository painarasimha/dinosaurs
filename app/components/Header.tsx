'use client';

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-md px-4 py-3 md:px-8 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Dinosaurs</Link>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all ${open ? 'block' : 'hidden'} md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 px-4 md:px-0 py-4 md:py-0`}>
          <Link href="/about" className="block">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/portfolio" className="block">Portfolio</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/book-call" className="block md:px-4 md:py-2 bg-blue-600 text-white rounded">Book a Call</Link>
        </nav>
      </div>
    </header>
  )
}