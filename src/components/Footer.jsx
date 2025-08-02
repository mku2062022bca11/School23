import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme, setTheme, currentTheme } = useTheme();

  const themeColors = [
    { name: "green", color: "bg-green-500", label: "🟢" },
    { name: "blue", color: "bg-blue-500", label: "🔵" },
    { name: "purple", color: "bg-purple-500", label: "🟣" },
    { name: "red", color: "bg-red-500", label: "🔴" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Star className={`h-8 w-8 ${currentTheme.primary}`} />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <GraduationCap
                    className={`h-8 w-8 ${currentTheme.primary}`}
                  />
                </motion.div>
              </div>
              <span
                className={`text-xl font-bold bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent`}
              >
                OB365 School
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Shaping tomorrow's leaders through innovation, mental wellness,
              and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold ${currentTheme.primaryDark} mb-4`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/campus-life"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-lg font-semibold ${currentTheme.primaryDark} mb-4`}
            >
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Future Street, Innovation City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@starlitacademy.edu</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3
              className={`text-lg font-semibold ${currentTheme.primaryDark} mb-4`}
            >
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${currentTheme.primary} hover:text-white transition-colors`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${currentTheme.primary} hover:text-white transition-colors`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${currentTheme.primary} hover:text-white transition-colors`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${currentTheme.primary} hover:text-white transition-colors`}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 OB365 School. All rights reserved. | CBSE Affiliation No:
            123456
          </p>

          {/* Theme Switcher */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Theme:</span>
            {themeColors.map((color) => (
              <button
                key={color.name}
                onClick={() => setTheme(color.name)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                  theme === color.name
                    ? "ring-2 ring-white scale-110"
                    : "hover:scale-105"
                }`}
                title={`Switch to ${color.name} theme`}
              >
                {color.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
