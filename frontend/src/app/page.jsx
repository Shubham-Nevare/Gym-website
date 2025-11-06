"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Users,
  Flame,
  Star,
  Award,
  Clock,
  Shield,
  ArrowRight,
  Play,
  Check,
  MessageCircle,
  Zap,
  Target,
  TrendingUp,
  ImageIcon,
  Instagram,
  Youtube,
  HelpCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { useRef, useState } from "react";
import GallerySection from "@/components/GallerySection";
import { ShortsSection } from "@/components/ShortsSection";
import { testimonials, services, plan, trainer,aboutUs, faqData } from "../data";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div id="home" className="w-full overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918097196222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* <MessageCircle className="h-6 w-6 text-white" /> */}
        <FaWhatsapp className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse">
          <Zap className="h-2 w-2 sm:h-3 sm:w-3" />
        </div>
      </motion.a>

      {/* Hero */}
      <section className="hero-section relative overflow-hidden rounded-3xl border border-white/20 mt-6 bg-gradient-to-br from-gray-900 via-black to-red-900/20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
            alt="Gym workout"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black" />
        </div>

        <div className="relative pt-28 pb-40 md:pt-24 md:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-400 text-base font-semibold backdrop-blur-sm"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              #1 Rated Gym in Mira Road
            </motion.div>

            <motion.h1
              className="section-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-red-100 to-orange-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              TRANSFORM
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                YOUR BODY
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="section-subtitle mt-3 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-semibold px-4"
            >
              Premium facilities, certified trainers, and{" "}
              <span className="font-bold text-red-400">celebrity guidance</span>
              . Claim your{" "}
              <span className="font-bold text-orange-400">
                3-day free trial
              </span>{" "}
              & up to <span className="font-bold text-green-400">60% OFF</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
            >
              <motion.a
                href="#contact"
                className="group relative bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl font-bold shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  GET FREE TRIAL
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#gallery"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl border border-white/20 hover:border-red-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold text-sm sm:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Watch Gym Tour
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-8 sm:mt-12 text-xs sm:text-sm text-neutral-300 px-4"
            >
              {[
                {
                  icon: Shield,
                  text: "100% Safe & Clean",
                  color: "text-green-400",
                },
                { icon: Clock, text: "6 AM - 11 PM", color: "text-blue-400" },
                {
                  icon: Award,
                  text: "21+ Years Experience",
                  color: "text-yellow-400",
                },
                {
                  icon: Users,
                  text: "500+ Members",
                  color: "text-purple-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 group"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <item.icon
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${item.color}`}
                    />
                  </div>
                  <span className="font-medium text-center">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-md border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { number: "500+", label: "Happy Members" },
              { number: "21+", label: "Years Experience" },
              { number: "50+", label: "Transformations" },
              { number: "4.9", label: "Google Rating" },
            ].map((stat, index) => (
              <div key={index} className="py-3 sm:py-4 text-center px-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              ABOUT US
            </div>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              Why Choose <span className="text-red-400">YourGym</span>?
            </h2>
            <p className="section-subtitle mt-4 text-base sm:text-lg">
              Founded by{" "}
              <span className="font-semibold text-red-400">
                celebrity trainer Sujeet Sharma
              </span>{" "}
              with 21+ years of experience, we blend science-backed training
              with modern equipment and a supportive community.
            </p>

            <div className="mt-8 space-y-4">
              {aboutUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <item.icon className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-neutral-200">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold group"
              whileHover={{ scale: 1.05 }}
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-orange-500/10">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="Gym"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating achievement cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-2 -left-2 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-xl shadow-2xl"
              >
                <div className="text-2xl font-bold ">21+</div>
                <div className="text-xs">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-4 rounded-xl shadow-2xl"
              >
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs">Google Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <Activity className="h-4 w-4" />
            OUR SERVICES
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Transformative <span className="text-blue-400">Workouts</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Everything you need to hit your goals with state-of-the-art
            facilities and expert guidance
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map(({ icon: Icon, title, desc, gradient }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6 sm:p-8 space-y-4">
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {desc}
                </p>

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-sm text-neutral-400 group-hover:text-red-400 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            SUCCESS STORIES
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Real <span className="text-green-400">Results</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            See what our members have achieved with our proven training methods
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center px-4">
            {/* Testimonial Cards */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeTestimonial === index
                      ? "border-green-500 bg-green-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activeTestimonial === index
                          ? "bg-green-500"
                          : "bg-white/20"
                      }`}
                    />
                    <div>
                      <p className="text-white font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-green-400 text-sm font-medium">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-300 mt-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Transformation Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-green-500/20"
            >
              <Image
                // src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
                src={testimonials[activeTestimonial].image}
                alt="Transformation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-4 border border-green-500/30">
                  <div className="text-2xl font-bold text-white">
                    {testimonials[activeTestimonial].result}
                  </div>
                  <div className="text-green-400 font-semibold">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-white/80 text-sm mt-2">in 3 months</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            MEMBERSHIP
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Choose Your <span className="text-purple-400">Plan</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Flexible membership options designed for your fitness journey
          </p>
        </motion.div>

        {/* Plans Grid (Responsive + Scrollable on Mobile) */}
        <div
          className="
    mt-12 py-8 sm:mt-10 
    flex sm:grid sm:grid-cols-1 md:grid-cols-3 
    gap-4 sm:gap-6 md:gap-8 
    max-w-6xl mx-auto 
    overflow-x-auto sm:overflow-visible 
    snap-x snap-mandatory 
    px-2 sm:px-0 
    scrollbar-hide
  "
        >
          {plan.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`
        relative rounded-3xl border-2 p-8 
        min-w-[85%] sm:min-w-0 snap-center
        ${
          plan.popular
            ? "border-red-500 bg-gradient-to-b from-red-600/10 to-red-900/20 shadow-2xl shadow-red-500/20"
            : "border-white/10 bg-gradient-to-b from-white/5 to-transparent"
        }
      `}
            >
              {plan.popular && (
                <div className="absolute text-center -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-neutral-400 ml-2">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`mt-8 w-full py-4 rounded-xl font-bold text-center block transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>

                {plan.popular && (
                  <div className="mt-4 text-green-400 text-sm font-semibold flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4" />
                    Save 40% with this plan
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-center shadow-2xl shadow-yellow-500/25"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-white font-bold text-xl">
                🎁 SPECIAL OFFER
              </span>
            </div>
            <p className="text-white text-lg font-semibold">
              Get <span className="text-2xl">60% OFF</span> on Yearly Membership
              + <span className="underline">FREE</span> Personal Training
              Sessions!
            </p>
            <motion.a
              href="#contact"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Offer
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Dumbbell className="h-4 w-4" />
            OUR TRAINERS
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Meet Our <span className="text-purple-400">Experts</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Certified trainers dedicated to helping you reach your fitness
            goals.
          </p>
        </motion.div>

        {/* ✅ Scrollable on mobile, grid on desktop */}
        <div
          className="
      mt-12 py-8 sm:mt-16
      flex sm:grid sm:grid-cols-2 lg:grid-cols-3
      gap-4 sm:gap-6 md:gap-8
      max-w-6xl mx-auto
      overflow-x-auto sm:overflow-visible
      snap-x snap-mandatory
      px-2 sm:px-0
      scrollbar-hide
    "
        >
          {trainer.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
          group relative bg-gradient-to-b from-white/5 to-transparent
          rounded-2xl border border-white/10 hover:border-purple-500
          transition-all duration-500 overflow-hidden
          min-w-[85%] sm:min-w-0 snap-center
        "
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 639px) 85vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {trainer.experience}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <div className="text-center p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white text-lg mb-2">
                        Specialty
                      </h4>
                      <p className="text-purple-300 font-semibold">
                        {trainer.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="font-bold text-xl text-white group-hover:text-purple-200 transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-purple-400 font-semibold mt-1">
                  {trainer.role}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {trainer.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-neutral-300"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>

                {/* View Profile */}
                <button className="w-full mt-6 py-2 rounded-xl border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium group-hover:scale-105">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* Results / Before & After Results */}
      <section className="py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            SUCCESS STORIES
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Real <span className="text-green-400">Transformations</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
            Witness the incredible journeys of our members who achieved their
            fitness goals
          </p>
        </div>

        <div
          className="
      mt-16 pt-4 sm:mt-20
      flex sm:grid sm:grid-cols-2 lg:grid-cols-3
      gap-4 sm:gap-6 md:gap-8
      max-w-6xl mx-auto
      overflow-x-auto sm:overflow-visible
      snap-x snap-mandatory
      px-2 sm:px-0
      scrollbar-hide scroll-smooth
    "
        >
          {testimonials.map((result, idx) => (
            <div
              key={idx}
              className="
          group relative bg-gradient-to-b from-white/5 to-transparent
          rounded-2xl border border-white/10 hover:border-green-500
          transition-all duration-500 overflow-hidden
          min-w-[85%] sm:min-w-0 snap-center
        "
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={result.image}
                  alt={`${result.name} transformation`}
                  fill
                  sizes="(max-width: 639px) 85vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Achievement Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {result.achievement}
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                  {result.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-white">{result.name}</h3>
                <p className="text-green-400 font-semibold mt-1">
                  {result.program}
                </p>

                <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-neutral-300 text-sm italic">
                    "{result.testimonial}"
                  </p>
                </div>

                {/* View Story Button */}
                <button className="w-full mt-4 py-3 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 font-semibold">
                  Read Full Story
                </button>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful members who transformed their lives at
            YourGym
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Today
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Shorts */}
      <ShortsSection />

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Frequently Asked <span className="text-indigo-400">Questions</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
            Everything you need to know about starting your fitness journey with
            us
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 w-full max-w-xl lg:max-w-xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-indigo-500 bg-indigo-950/40"
                  : "border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-indigo-400"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-indigo-400" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-6 pb-5"
                  >
                    <p className="text-neutral-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Our team is here to help you get all the answers you need to start
            your fitness journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918097196222"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 px-4 md:py-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4" />
              GET IN TOUCH
            </div>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              Start Your <span className="text-blue-400">Transformation</span>{" "}
              Today
            </h2>
            <p className="section-subtitle mt-4 text-base sm:text-lg">
              Ready to change your life? Contact us now for your free trial and
              personalized consultation.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: Clock,
                  text: "Mon-Sun: 6:00 AM - 11:00 PM",
                  subtext: "7 Days Open",
                },
                {
                  icon: MessageCircle,
                  text: "+91 98765 43210",
                  subtext: "Call or WhatsApp",
                },
                {
                  icon: Award,
                  text: "21+ Years Experience",
                  subtext: "Expert Guidance",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.text}</div>
                    <div className="text-neutral-400 text-sm">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Contact Form with better styling
function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🧠 Add handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setIsSubmitting(true);

    // Simulate submission delay (optional)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Failed to submit, try again later."); // ✅ Alert message
    }, 1500);
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/20 p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm grid gap-4 sm:gap-6 shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="text-white font-medium mb-2 block">
            Full Name *
          </label>
          <input
            name="user_name"
            required
            placeholder="Enter your name"
            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="text-white font-medium mb-2 block text-sm sm:text-base">
            Phone Number *
          </label>
          <div className="flex items-center bg-black/40 rounded-xl border border-white/20 overflow-hidden">
            <span className="inline-flex items-center justify-center px-3 py-2 text-md text-white bg-transparent">
              +91
            </span>
            <input
              name="user_phone"
              required
              type="tel"
              inputMode="numeric"
              pattern="^[0-9]{10}$"
              maxLength={10}
              placeholder="Enter 10 digit mobile"
              onInput={(e) => {
                // allow only digits and limit to 10 characters
                const t = e.target;
                t.value = t.value.replace(/\D/g, "").slice(0, 10);
              }}
              className="flex-1 bg-transparent px-3 sm:px-1 py-2 sm:py-2 outline-none focus:border-none focus:ring-0 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-white font-medium mb-2 block text-sm sm:text-base">
          Email Address
        </label>
        <input
          name="user_email"
          type="email"
          placeholder="your@email.com"
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
        />
      </div>

      <div>
        <label className="text-white font-medium mb-2 block text-sm sm:text-base">
          Your Goal
        </label>
        <select
          name="user_goal"
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white text-sm sm:text-base"
        >
          <option className="text-black">Gym Membership</option>
          <option className="text-black">Personal Training (P.T)</option>
          <option className="text-black">Diet Consultation</option>
          <option className="text-black">Weight Loss Program</option>
          <option className="text-black">Muscle Building</option>
          <option className="text-black">General Fitness</option>
        </select>
      </div>

      <div>
        <label className="text-white font-medium mb-2 block text-sm sm:text-base">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your fitness goals and any specific requirements..."
          rows={3}
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-2 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin " />
            Sending...
          </div>
        ) : (
          "Start Free Trial & Get Consultation"
        )}
      </motion.button>

      <p className="text-center text-neutral-400 text-sm">
        We respect your privacy. Your information is 100% secure.
      </p>
    </motion.form>
  );
}
