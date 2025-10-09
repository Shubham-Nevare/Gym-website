"use client";
import { Zap, Instagram, Youtube } from "lucide-react";
import {shortsGalleryData} from "../data";

export function ShortsSection() {
  return (
    <section className="py-20 md:py-16 md:px-16 bg-gradient-to-br from-gray-900 to-black rounded-3xl">
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

      {/* ✅ Scrollable for mobile, grid for desktop */}
      <div
        className="
      mt-16 pt-4 sm:mt-10
      flex sm:grid sm:grid-cols-2 lg:grid-cols-4
      gap-4 sm:gap-6 md:gap-8
      max-w-6xl mx-auto
      overflow-x-auto sm:overflow-visible
      snap-x snap-mandatory
      px-2 sm:px-0
      scrollbar-hide scroll-smooth
    "
      >
        {shortsGalleryData.map((video, idx) => (
          <ShortsVideoCard key={idx} video={video} />
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
  );
}

/* ==============================
 🎥 SHORTS VIDEO CARD COMPONENT
============================== */
function ShortsVideoCard({ video }) {

  return (
    <div
      className="
        group relative aspect-[9/16]
        overflow-hidden rounded-2xl border border-white/10
        hover:border-orange-500 transition-all duration-500
        bg-gradient-to-b from-white/5 to-transparent
        min-w-[80%] sm:min-w-0 snap-center
      "
    >
      {/* 🎞️ YouTube Shorts Iframe */}
        <iframe
          src={`${video.embedUrl}?autoplay=0&mute=0&modestbranding=1&rel=0&playsinline=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-2xl"
        ></iframe>
    
    </div>
  );
}
