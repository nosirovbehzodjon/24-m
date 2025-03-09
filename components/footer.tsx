"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Academy<span className="text-gold">Plus</span>
            </h3>
            <p className="text-blue-200 mb-4">
              {
                "Providing exceptional education and shaping tomorrow's leaders since 1985."
              }
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-200 hover:text-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-gold transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-gold transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-gold transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Campus Life
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Career Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-200 hover:text-gold transition-colors duration-300"
                >
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-navy-800 border-blue-900 text-white placeholder:text-blue-400"
              />
              <Button className="w-full bg-gold text-navy hover:bg-lightgold transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} AcademyPlus. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-blue-200 hover:text-gold text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-gold text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-gold text-sm transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
