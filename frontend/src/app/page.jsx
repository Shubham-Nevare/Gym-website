"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rahul Singh",
      achievement: "Lost 20kg in 3 months",
      image: "/before after img 1.webp",
      duration: "12 Weeks",
      program: "Weight Loss Program",
      testimonial: "Gymmerzz changed my life completely!",
      text: "One of the best gyms in Mira Road. Transformed my body in just 3 months!",
      author: "Rahul S.",
      result: "Lost 12kg",
    },
    {
      name: "Priym Mehta",
      achievement: "Gained 8kg muscle in 6 months",
      image: "/before after img 2.webp",
      duration: "24 Weeks",
      program: "Muscle Building",
      testimonial: "Best decision I ever made!",
      text: "Great trainers and hygiene maintained. The community vibe is amazing!",
      author: "Priya M.",
      result: "Gained 5kg muscle",
    },
    {
      name: "Amit Kumar",
      achievement: "Lost 15kg in 4 months",
      image: "/before after img 3.jpg",
      duration: "16 Weeks",
      program: "Transformation Challenge",
      testimonial: "Unbelievable results with expert guidance!",
      text: "Well equipped and amazing vibe! Perfect balance of modern equipment and expert guidance.",
      author: "Amit K.",
      result: "Strength increased 40%",
    },
  ];

  const galleryData = [
    {
      type: "image",
      src: "/gym img1.webp",
      alt: "Gym Equipment",
      category: "Equipment",
    },
    {
      type: "image",
      src: "/gym img 2.jpeg",
      alt: "Training Area",
      category: "Training",
    },
    {
      type: "image",
      src: "/gym img 3.webp",
      alt: "Yoga Studio",
      category: "Yoga",
    },
    {
      type: "image",
      src: "/gym img 4.jpg",
      alt: "Cardio Zone",
      category: "Cardio",
    },
    {
      type: "image",
      src: "/gym img 5.jpeg",
      alt: "Weight Area",
      category: "Weights",
    },
    {
      type: "image",
      src: "/gym img 6.jpeg",
      alt: "Locker Room",
      category: "Facilities",
    },
    {
      type: "image",
      src: "/gym img 7.jpeg",
      alt: "Gym Equipment",
      category: "Equipment",
    },
    {
      type: "image",
      src: "/gym img 8.webp",
      alt: "Training Area",
      category: "Training",
    },
    {
      type: "image",
      src: "/gym img 9.jpeg",
      alt: "Yoga Studio",
      category: "Yoga",
    },
    {
      type: "image",
      src: "/gym img10.webp",
      alt: "Cardio Zone",
      category: "Cardio",
    },
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/tmu0dxdLfog/hqdefault.jpg",
      url: "https://youtu.be/tmu0dxdLfog",
      title: "Gymmerzz Full Tour",
      duration: "2:45",
      category: "Tour",
      alt: "Gymmerzz Gym Tour Video", // Added alt text
    },
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/as16JOI_SDI/hqdefault.jpg",
      url: "https://youtu.be/as16JOI_SDI",
      title: "Workout Session",
      duration: "1:30",
      category: "Training",
      alt: "Workout Session Video", // Added alt text
    },
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/Q595t3wpnU8/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=Q595t3wpnU8",
      title: "Cardio Tips",
      duration: "0:45",
      category: "Tips",
      alt: "Cardio Tips Video", // Added alt text
    },
    {
      type: "video",
      title: "Strength Training Basics",
      url: "https://www.youtube.com/watch?v=EUxQpQMnpa8",
      thumbnail: "https://img.youtube.com/vi/EUxQpQMnpa8/maxresdefault.jpg",
      duration: "1:15",
      level: "Intermediate",
      calories: "200 cal",
      duration: "0:45",
      category: "Tips",
      alt: "Cardio Tips Video", // Added alt text
    },
  ];

  const services = [
    {
      icon: Dumbbell,
      title: "Weight Training",
      desc: "Build strength and muscle with premium equipment",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Activity,
      title: "CrossFit",
      desc: "High-intensity functional training for ultimate fitness",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: HeartPulse,
      title: "Yoga & Mindfulness",
      desc: "Flexibility, balance, and mental wellness",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: HeartPulse,
      title: "Cardio Zone",
      desc: "Endurance training and fat-loss optimization",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personal Training",
      desc: "1:1 expert coaching for maximum results",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Flame,
      title: "Wellness Suite",
      desc: "Steam, sauna for recovery and relaxation",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const shortsGalleryData = [
    {
      title: "Quick Cardio Burn",
      url: "https://www.youtube.com/watch?v=Q595t3wpnU8",
      thumbnail: "https://img.youtube.com/vi/Q595t3wpnU8/maxresdefault.jpg",
      duration: "0:45",
      level: "Beginner",
      calories: "150 cal",
    },
    {
      title: "Strength Training Basics",
      url: "https://www.youtube.com/watch?v=EUxQpQMnpa8",
      thumbnail: "https://img.youtube.com/vi/EUxQpQMnpa8/maxresdefault.jpg",
      duration: "1:15",
      level: "Intermediate",
      calories: "200 cal",
    },
    {
      title: "Yoga Flow",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "https://img.youtube.com/vi/Q595t3wpnU8/maxresdefault.jpg",
      duration: "2:00",
      level: "All Levels",
      calories: "120 cal",
    },
    {
      title: "HIIT Workout",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "https://img.youtube.com/vi/EUxQpQMnpa8/maxresdefault.jpg",
      duration: "1:30",
      level: "Advanced",
      calories: "250 cal",
    },
  ];

  const plan = [
    {
      name: "Starter",
      price: "₹1,999",
      period: "per month",
      features: ["Gym Access", "Cardio Zone", "Steam Room", "Locker Facility"],
      popular: false,
      gradient: "from-gray-600 to-gray-800",
    },
    {
      name: "Pro",
      price: "₹4,999",
      period: "for 3 months",
      features: [
        "Everything in Starter",
        "Personal Diet Plan",
        "Group Classes",
        "Progress Tracking",
        "2 PT Sessions",
      ],
      popular: true,
      gradient: "from-red-600 to-orange-600",
    },
    {
      name: "Elite",
      price: "₹13,999",
      period: "for 12 months",
      features: [
        "Everything in Pro",
        "Unlimited PT Sessions",
        "Premium Merchandise",
        "Nutrition Coaching",
        "Recovery Therapy",
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const trainer = [
    {
      name: "Sujeet Kargutkar",
      role: "Founder & Head Trainer",
      image: "/gym trainer img 3.jpg",
      experience: "21+ years",
      specialty: "Celebrity Trainer",
      achievements: ["500+ Transformations", "National Award Winner"],
    },
    {
      name: "Rajesh Kumar",
      role: "Strength & Conditioning",
      image: "/gym trainer img 2.jpg",
      experience: "15+ years",
      specialty: "Powerlifting Coach",
      achievements: ["State Champion", "IFBB Certified"],
    },
    {
      name: "Priya Sharma",
      role: "Yoga & Wellness",
      image: "/gym trainer img 1.jpg",
      experience: "12+ years",
      specialty: "Holistic Wellness",
      achievements: ["RYT 500 Certified", "Meditation Expert"],
    },
  ];

  const aboutUs = [
    {
      icon: HeartPulse,
      text: "Personalised coaching tailored to your goals",
    },
    {
      icon: Users,
      text: "Great crowd and positive workout vibe",
    },
    {
      icon: Flame,
      text: "Steam, yoga, cardio - complete wellness",
    },
    {
      icon: TrendingUp,
      text: "Proven results with data-driven approach",
    },
  ];

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

      {/* Hero Section - Enhanced */}
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
              className="section-subtitle mt-3 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light px-4"
            >
              Premium facilities, certified trainers, and{" "}
              <span className="font-semibold text-red-400">
                celebrity guidance
              </span>
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

      {/* About Section - Enhanced */}
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
              Why Choose <span className="text-red-400">Gymmerzz</span>?
            </h2>
            <p className="section-subtitle mt-4 text-base sm:text-lg">
              Founded by{" "}
              <span className="font-semibold text-red-400">
                celebrity trainer Sujeet Kargutkar
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

      {/* Services Section - Enhanced */}
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

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
    
    <div className="relative p-8 space-y-4">
      {/* Icon + Title in one row */}
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-neutral-300 leading-relaxed">
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

      {/* Interactive Testimonials */}
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

      {/* Plans Section - Enhanced */}
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

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plan.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-3xl border-2 p-8 ${
                plan.popular
                  ? "border-red-500 bg-gradient-to-b from-red-600/10 to-red-900/20 shadow-2xl shadow-red-500/20"
                  : "border-white/10 bg-gradient-to-b from-white/5 to-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
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

      {/* Trainers - Enhanced */}
      <section id="trainers" className="py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            OUR TEAM
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Meet Our <span className="text-purple-400">Expert Trainers</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
            Certified professionals with decades of combined experience to guide
            your fitness journey
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainer.map((trainer, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-purple-500 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
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

                {/* View Profile Button */}
                <button className="w-full mt-6 py-2 rounded-xl border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium group-hover:scale-105">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black rounded-3xl"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <ImageIcon className="h-4 w-4" />
            GALLERY
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Explore Our <span className="text-blue-400">World</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
            Discover our state-of-the-art facilities and vibrant community
            through photos and videos
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryData.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent"
            >
              {item.type === "image" ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {item.category}
                  </div>
                </div>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.thumbnail || "/fallback.png"}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 shadow-2xl">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                          VIDEO
                        </span>
                        <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                          {item.duration}
                        </span>
                      </div>
                      <h4 className="font-semibold text-white text-sm leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-neutral-300 text-xs mt-1">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            View Complete Gallery
          </button>
        </div>
      </section>

      {/* Before & After Results - Enhanced */}
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

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((result, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 hover:border-green-500 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={result.image}
                  alt={`${result.name} transformation`}
                  fill
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
            Gymmerzz
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

      {/* Shorts Videos - Enhanced */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            QUICK WORKOUTS
          </div>
          <h2 className="section-title text-4xl md:text-5xl">
            Quick <span className="text-orange-400">Workout Tips</span>
          </h2>
          <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
            Short, effective workouts and tips you can do anywhere, anytime
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortsGalleryData.map((video, idx) => (
            <div
              key={idx}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 hover:border-orange-500 transition-all duration-500 bg-gradient-to-b from-white/5 to-transparent"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 shadow-2xl">
                      <svg
                        className="w-5 h-5 text-white ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {/* Level Badge */}
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                        video.level === "Beginner"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : video.level === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {video.level}
                    </div>

                    <h4 className="font-bold text-white text-lg leading-tight mb-2">
                      {video.title}
                    </h4>

                    <div className="flex items-center justify-between text-sm text-neutral-300">
                      <span>{video.duration}</span>
                      <span>{video.calories}</span>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-400 mb-4">Want more daily workout tips?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Youtube className="h-5 w-5" />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* FAQ - Enhanced */}
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

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                {
                  question: "What are your gym timings?",
                  answer:
                    "We're open 6 AM to 11 PM, 7 days a week. Early morning and late evening slots are available for your convenience.",
                },
                {
                  question: "Do you provide personal training?",
                  answer:
                    "Yes! We have certified personal trainers including our founder Sujeet Kargutkar with 21+ years of experience. PT sessions are available for all membership plans.",
                },
                {
                  question: "What facilities do you have?",
                  answer:
                    "We have modern weight training equipment, cardio machines, steam room, yoga studio, group classes, and a clean, well-maintained environment.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-indigo-500 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500 transition-colors duration-300">
                      <HelpCircle className="h-5 w-5 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {[
                {
                  question: "Is there a trial period?",
                  answer:
                    "Yes! We offer a 3-day free trial so you can experience our facilities and training before committing to a membership.",
                },
                {
                  question: "What are your membership plans?",
                  answer:
                    "We have Monthly (₹1,999), Quarterly (₹4,999), and Yearly (₹13,999) plans. All plans include gym access, cardio, and steam facilities.",
                },
                {
                  question: "Do you provide diet plans?",
                  answer:
                    "Yes! Our Quarterly and Yearly plans include personalized diet plans to help you achieve your fitness goals faster.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-indigo-500 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500 transition-colors duration-300">
                      <HelpCircle className="h-5 w-5 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl"
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
                  text: "+91 80971 96222",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "EmailJS environment variables are missing. Please add them in .env.local"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      alert("Thanks! We'll contact you shortly to schedule your free trial.");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert(
        "Failed to submit. Please try again or call us directly at +91 80971 96222"
      );
    } finally {
      setIsSubmitting(false);
    }
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
            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="text-white font-medium mb-2 block text-sm sm:text-base">
            Phone Number *
          </label>
          <input
            name="user_phone"
            required
            type="tel"
            placeholder="+91 00000 00000"
            className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
          />
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
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
        />
      </div>

      <div>
        <label className="text-white font-medium mb-2 block text-sm sm:text-base">
          Your Goal
        </label>
        <select
          name="user_goal"
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white text-sm sm:text-base"
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
          className="w-full bg-black/40 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none text-sm sm:text-base"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
