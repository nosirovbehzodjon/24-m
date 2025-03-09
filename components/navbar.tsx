"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Teachers", href: "#teachers" },
    { name: "Alumni", href: "#alumni" },
    { name: "FAQ", href: "#faq" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {scrolled ? (
            <Image
              src={"/images/logo.png"}
              width={250}
              height={250}
              alt={"logo"}
            />
          ) : (
            <Image
              src={"/images/white-logo.png"}
              width={250}
              height={250}
              alt={"logo"}
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-8 justify-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-white hover:text-orange-400 transition-colors duration-300 font-medium",
                    scrolled && "text-black-400"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button>Enroll Now</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                className="text-xl font-medium text-navy hover:text-lightblue block py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-full pt-4">
            <Button className="w-full bg-navy text-white hover:bg-lightblue transition-colors duration-300">
              Enroll Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
