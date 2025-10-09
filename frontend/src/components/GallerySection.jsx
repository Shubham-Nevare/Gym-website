"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ImageIcon } from "lucide-react";
import { galleryData } from "../data";

/* ==============================
 🎯 GALLERY SECTION
============================== */
export default function GallerySection() {
  const { videos, images } = galleryData;

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-black rounded-3xl"
    >
      {/* 🏋️ Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
          <ImageIcon className="h-4 w-4" />
          GALLERY
        </div>
        <h2 className="section-title text-4xl md:text-5xl">
          Explore Our <span className="text-blue-400">World</span>
        </h2>
        <p className="section-subtitle text-center mt-4 max-w-2xl mx-auto text-lg">
          Discover our state-of-the-art facilities and vibrant community through
          photos and videos
        </p>
      </div>

      {/* 🎥 Featured Videos */}
      <FeaturedVideos videos={videos} />

      {/* 🖼️ Image Gallery Section */}
      <div className="mt-12">
        {/* 📱 Mobile: Horizontal Scroll */}
        <div className="block sm:hidden overflow-x-auto">
          <div className="flex gap-4 px-4 snap-x snap-mandatory">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="min-w-[250px] flex-shrink-0 snap-start group relative overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 639px) 250px, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 💻 Desktop: True Masonry Grid */}
        <div className="hidden sm:block px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 space-y-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-md hover:shadow-blue-500/20 transition-all duration-500 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={200}
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👀 View More Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
          View Complete Gallery
        </button>
      </div>
    </section>
  );
}

/* ==============================
 🎬 FeaturedVideos Component
============================== */
function FeaturedVideos({ videos }) {
  const [loaded, setLoaded] = useState({});

  const handleLoad = (idx) => {
    setLoaded((s) => ({ ...s, [idx]: true }));
  };

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {videos.map((video, idx) => (
        <div
          key={video.embedUrl || idx}
          className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-500 group bg-black"
        >
          {!loaded[idx] ? (
            <button
              onClick={() => handleLoad(idx)}
              className="w-full h-full flex items-center justify-center text-white bg-black/60 relative"
              aria-label={`Play ${video.title}`}
            >
              <img
                src={video.thumbnail}
                alt={video.alt || video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-white/10 border border-white/20">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-white/90">{video.title}</div>
              </div>
            </button>
          ) : (
            <iframe
              src={`${video.embedUrl}?autoplay=1&mute=0&modestbranding=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
          )}
        </div>
      ))}
    </div>
  );
}
