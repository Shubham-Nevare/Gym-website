"use client"; // Add this at the top

import Link from "next/link";
import { Facebook, Instagram, Phone, Youtube, Mail, MapPin, Clock, Dumbbell, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500 hover:border-pink-500"
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500 hover:border-blue-500"
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:text-red-500 hover:border-red-500"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#plans", label: "Membership" },
    { href: "#trainers", label: "Trainers" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Weight Training",
    "Personal Training",
    "CrossFit",
    "Yoga Classes",
    "Cardio Zone",
    "Steam & Sauna"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-red-900/20 border-t border-red-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-black text-2xl bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Gymmerzz
                </h3>
                <p className="text-red-400 text-sm font-medium -mt-1">Premium Fitness Club</p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Mumbai's premier fitness destination in Mira Road. Celebrity trainer guidance, 
              state-of-the-art equipment, and a supportive community to transform your fitness journey.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { number: "500+", label: "Members" },
                { number: "21+", label: "Years Exp" },
                { number: "4.9★", label: "Rating" },
                { number: "50+", label: "Transformations" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-lg font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-red-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="text-neutral-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Bing-G Wing, First & Upper Ground Floor, Shop FF 13 Gate 3,
                    Delta Vrindavan, Mira Road East, Thane, 
                    Maharashtra 401107
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <a 
                  href="tel:+918097196222" 
                  className="text-neutral-300 hover:text-green-400 transition-colors font-medium"
                >
                  +91 80971 96222
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a 
                  href="mailto:info@gymmerzz.com" 
                  className="text-neutral-300 hover:text-blue-400 transition-colors"
                >
                  info@gymmerzz.com
                </a>
              </div>

              {/* Timings */}
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <div className="text-neutral-300">
                  <div className="font-medium">6:00 AM - 11:00 PM</div>
                  <div className="text-sm">7 Days a Week</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block w-full mt-6 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 px-6 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-neutral-400 text-sm text-center md:text-left">
            © {currentYear} Gymmerzz Private Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}