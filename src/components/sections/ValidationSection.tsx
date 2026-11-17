'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Video,
  Sparkles,
  CheckCircle2,
  Star,
} from 'lucide-react';
import {
  CREATIVE_TECH_STACK,
  TESTIMONIALS,
  PABLO_VIDEO_TESTIMONIAL,
} from '@/data/content';

export function ValidationSection() {
  const [activeTab, setActiveTab] = useState<'video' | 'audits'>('video');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Video Player state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(88.7);
  const [showControls, setShowControls] = useState(true);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 88.7);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const nextTime = Number(e.target.value);
    videoRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainerRef.current.requestFullscreen?.();
    }
  };

  // Pause video when switching away from video tab
  useEffect(() => {
    if (activeTab !== 'video' && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [activeTab]);

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-20 bg-[#12131a] relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-['Space_Grotesk'] text-xs text-[#d4af37] tracking-widest uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              {'//'} VERIFIED CLIENT REVIEWS &amp; PRODUCTION AUDIT
            </span>
            <h2 className="font-['Space_Grotesk'] text-[clamp(1.5rem,5.5vw,3rem)] font-bold uppercase tracking-tight text-[#f5f6fa] mt-1 leading-tight break-words">
              ENGINEERED WITH ELITE TECH.<br />
              <span className="text-[#d4af37]">CRAFTED FOR VISUAL SUPREMACY.</span>
            </h2>
          </div>
          <p className="font-['Manrope'] text-sm sm:text-base text-[#9ba1b3] max-w-sm">
            Harnessing industry-grade creative suites, GPU-accelerated 3D simulation engines, and authentic client endorsements.
          </p>
        </div>

        {/* Infinite Creative Software & Tech Ticker */}
        <div className="w-full overflow-hidden py-5 relative mb-12 border-y border-white/10 bg-[#07080c]">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080c] via-[#07080c]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080c] via-[#07080c]/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center">
            <div className="flex items-center gap-4 shrink-0 pr-4">
              {CREATIVE_TECH_STACK.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 px-4 py-2 rounded-full bg-[#12131a] hover:bg-[#181924] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-md cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                  />
                  <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#f5f6fa] group-hover:text-white uppercase tracking-wider whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#9ba1b3] group-hover:text-[#d4af37] transition-colors uppercase tracking-widest whitespace-nowrap border-l border-white/10 pl-2">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Seamless clone for infinite scroll */}
            <div aria-hidden="true" className="flex items-center gap-4 shrink-0 pr-4">
              {CREATIVE_TECH_STACK.map((tech, idx) => (
                <div
                  key={`clone-${idx}`}
                  className="group flex items-center gap-3 px-4 py-2 rounded-full bg-[#12131a] hover:bg-[#181924] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-md cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
                  />
                  <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-[#f5f6fa] group-hover:text-white uppercase tracking-wider whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#9ba1b3] group-hover:text-[#d4af37] transition-colors uppercase tracking-widest whitespace-nowrap border-l border-white/10 pl-2">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Mode Selector Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#07080c] border border-white/10">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-md font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-[#d4af37] text-[#050507] shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                  : 'text-[#9ba1b3] hover:text-[#f5f6fa] hover:bg-white/5'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>CLIENT VIDEO REVIEW // PABLO SOARES</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
            <button
              onClick={() => setActiveTab('audits')}
              className={`px-4 py-2 rounded-md font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'audits'
                  ? 'bg-[#d4af37] text-[#050507] shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                  : 'text-[#9ba1b3] hover:text-[#f5f6fa] hover:bg-white/5'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CLIENT REVIEWS ({TESTIMONIALS.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1b3]">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="hidden sm:inline">AUTHENTIC CLIENT REVIEWS // 2026 ARCHIVE</span>
          </div>
        </div>

        {/* TAB 1: PABLO SOARES'S CLIENT VIDEO REVIEW SHOWCASE */}
        {activeTab === 'video' && (
          <div className="relative bg-[#0f1017] rounded-lg p-6 sm:p-10 border border-white/10 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: 16:9 Video Player */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                <div
                  ref={videoContainerRef}
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => isVideoPlaying && setShowControls(false)}
                  className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#050507] border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.8)] group"
                >
                  <video
                    ref={videoRef}
                    src="/videos/Pablo.mp4"
                    poster="/videos/pablo_poster.jpg"
                    playsInline
                    preload="none"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsVideoPlaying(false)}
                    onClick={toggleVideoPlay}
                    className="w-full h-full object-cover cursor-pointer"
                  />

                  {/* Top HUD Overlay */}
                  <div className="absolute top-0 inset-x-0 p-3.5 bg-gradient-to-b from-[#050507]/90 via-[#050507]/40 to-transparent flex items-center justify-between pointer-events-none z-10 font-mono text-[11px]">
                    <div className="flex items-center gap-2 bg-[#050507]/85 backdrop-blur px-2.5 py-1 rounded border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[#f5f6fa] font-bold">CLIENT REVIEW // PABLO SOARES</span>
                    </div>
                  </div>

                  {/* Central Play/Pause Overlay */}
                  {!isVideoPlaying && (
                    <button
                      onClick={toggleVideoPlay}
                      aria-label="Play video review"
                      className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#d4af37]/90 hover:bg-[#d4af37] text-[#050507] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_36px_rgba(212,175,55,0.6)] cursor-pointer z-10"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                    </button>
                  )}

                  {/* Sleek Bottom Control Bar */}
                  <div
                    className={`absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#050507]/95 via-[#050507]/70 to-transparent flex flex-col gap-2 transition-opacity duration-200 z-10 ${
                      showControls || !isVideoPlaying ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {/* Scrub Timeline */}
                    <input
                      type="range"
                      min={0}
                      max={duration || 88.7}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek timeline"
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                    />

                    <div className="flex items-center justify-between text-xs font-mono text-[#f5f6fa]">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleVideoPlay}
                          aria-label={isVideoPlaying ? 'Pause' : 'Play'}
                          className="hover:text-[#d4af37] transition-colors cursor-pointer"
                        >
                          {isVideoPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 fill-current" />
                          )}
                        </button>

                        <button
                          onClick={toggleMute}
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                          className="hover:text-[#d4af37] transition-colors cursor-pointer"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-[#d4af37]" />
                          ) : (
                            <Volume2 className="w-4 h-4" />
                          )}
                        </button>

                        <span className="text-[11px] text-[#9ba1b3]">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleFullscreen}
                          aria-label="Toggle fullscreen"
                          className="hover:text-[#d4af37] transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center px-1 text-[11px] font-mono text-[#9ba1b3]">
                  <span>RECORDED CLIENT TESTIMONIAL</span>
                  <span className="text-[#d4af37]">FULL CLIENT INTERVIEW</span>
                </div>
              </div>

              {/* Right Column: Client Bio & Written Endorsement */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    <span className="font-['Space_Grotesk'] text-[11px] text-[#d4af37] uppercase tracking-widest font-semibold">
                      VERIFIED CLIENT REVIEW
                    </span>
                  </div>

                  <blockquote className="font-['Space_Grotesk'] text-lg sm:text-xl text-[#f5f6fa] leading-relaxed font-medium border-l-2 border-[#d4af37] pl-4 my-3 italic">
                    {PABLO_VIDEO_TESTIMONIAL.quote}
                  </blockquote>

                  <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3] leading-relaxed pt-2">
                    Direct feedback from Pablo Soares regarding VAIKA GROUP&apos;s real estate media workflow, post-production speed, and visual authority across international campaigns.
                  </p>
                </div>

                {/* Author Card & Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-full bg-[#20222d] border-2 border-[#d4af37] flex items-center justify-center font-['Space_Grotesk'] text-base font-bold text-[#d4af37] shrink-0 shadow-[0_0_16px_rgba(212,175,55,0.25)]">
                      PS
                    </div>
                    <div>
                      <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#f5f6fa] uppercase tracking-wide flex items-center gap-2">
                        <span>{PABLO_VIDEO_TESTIMONIAL.author}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                      </h4>
                      <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3]">
                        {PABLO_VIDEO_TESTIMONIAL.role} • {PABLO_VIDEO_TESTIMONIAL.company}
                      </p>
                    </div>
                  </div>

                  {/* Verification Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    <span className="px-3 py-1 rounded bg-[#161720] border border-[#d4af37]/30 text-[#d4af37] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      AUTHENTIC VIDEO REVIEW
                    </span>
                    <span className="px-3 py-1 rounded bg-[#161720] border border-white/5 text-[#9ba1b3]">
                      {PABLO_VIDEO_TESTIMONIAL.rating ? `${PABLO_VIDEO_TESTIMONIAL.rating.toFixed(1)} RATING` : '4.9 RATING'}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={toggleVideoPlay}
                      className="px-5 py-2.5 rounded bg-[#d4af37] hover:bg-[#e0bc45] text-[#050507] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      {isVideoPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>PAUSE VIDEO REVIEW</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>PLAY CLIENT REVIEW</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setActiveTab('audits')}
                      className="px-4 py-2.5 rounded bg-[#161720] hover:bg-[#20222d] text-[#f5f6fa] border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      READ CLIENT REVIEWS →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUTHENTIC CLIENT REVIEWS CAROUSEL */}
        {activeTab === 'audits' && (
          <div className="relative group/carousel">
            {/* Prominent Left Navigation Button */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous client review"
              className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#161720]/95 hover:bg-[#d4af37] text-[#f5f6fa] hover:text-[#050507] border border-white/20 hover:border-[#d4af37] items-center justify-center transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer hover:scale-110 active:scale-95 group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Prominent Right Navigation Button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next client review"
              className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#161720]/95 hover:bg-[#d4af37] text-[#f5f6fa] hover:text-[#050507] border border-white/20 hover:border-[#d4af37] items-center justify-center transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer hover:scale-110 active:scale-95 group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Main Review Card */}
            <div className="relative bg-[#0f1017] rounded-xl p-6 sm:p-10 border border-white/10 shadow-2xl animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left/Main Column: Testimonial & Author Info */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Header Badges & Rating */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#161720] border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>VERIFIED CLIENT ENDORSEMENT</span>
                      </div>

                      {/* Rating Stars + Score */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161720] border border-[#d4af37]/30">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#d4af37] text-[#d4af37]" />
                          ))}
                        </div>
                        <span className="font-mono text-xs font-bold text-[#d4af37] border-l border-white/10 pl-1.5">
                          {current.rating ? current.rating.toFixed(1) : '5.0'}
                        </span>
                      </div>

                      {current.tag && (
                        <span className="font-mono text-[10px] text-[#9ba1b3] uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10">
                          {current.tag}
                        </span>
                      )}
                    </div>

                    {/* Review Quote */}
                    <p className="font-['Space_Grotesk'] text-lg sm:text-xl lg:text-2xl text-[#f5f6fa] leading-relaxed font-medium min-h-[110px] flex items-center">
                      {current.quote}
                    </p>
                  </div>

                  {/* Author Details & Pablo Video CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#20222d] border border-[#d4af37]/40 flex items-center justify-center font-['Space_Grotesk'] text-sm font-bold text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.2)] shrink-0">
                        {current.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#f5f6fa] uppercase tracking-wide">
                          {current.author}
                        </h4>
                        <p className="font-['Manrope'] text-xs sm:text-sm text-[#9ba1b3]">
                          {current.role} • {current.company}, {current.location}
                        </p>
                      </div>
                    </div>

                    {current.videoUrl && (
                      <button
                        onClick={() => setActiveTab('video')}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#161720] border border-[#d4af37]/50 text-[#d4af37] font-mono text-xs uppercase tracking-wider hover:bg-[#20222d] transition-colors cursor-pointer"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>WATCH PABLO SOARES&apos;S VIDEO REVIEW →</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Verification Trust Panel & Mobile Controls */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="w-full bg-[#161720] rounded-xl p-5 border border-white/10 flex flex-col justify-between gap-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1b3]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="uppercase">RECORD // 0{currentIndex + 1}</span>
                      </div>
                      <span className="font-mono text-xs text-[#d4af37] font-semibold">
                        CLIENT ARCHIVE
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-[#9ba1b3]">
                        <span>VERIFICATION:</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> AUTHENTIC
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[#9ba1b3]">
                        <span>PARTNER STATUS:</span>
                        <span className="text-[#f5f6fa] font-semibold">{current.author}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#9ba1b3]">
                        <span>EXPERIENCE:</span>
                        <span className="text-[#d4af37] font-semibold">
                          {current.rating ? `${current.rating.toFixed(1)} / 5.0 RATING` : '5.0 / 5.0 RATING'}
                        </span>
                      </div>
                    </div>

                    {/* Direct Review Selector Dots */}
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-[10px] font-mono text-[#9ba1b3] uppercase tracking-wider mb-2 flex justify-between items-center">
                        <span>SELECT CLIENT REVIEW</span>
                        <span className="text-[#d4af37]">0{currentIndex + 1} / 0{TESTIMONIALS.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {TESTIMONIALS.map((t, idx) => (
                          <button
                            key={t.id}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Jump to review by ${t.author}`}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              idx === currentIndex
                                ? 'w-8 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                                : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Responsive Left & Right Side Navigation Buttons */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={prevTestimonial}
                        aria-label="Previous review"
                        className="flex-1 py-2.5 px-3 rounded-lg bg-[#20222d] hover:bg-[#d4af37] text-[#f5f6fa] hover:text-[#050507] border border-white/10 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>PREV</span>
                      </button>

                      <button
                        onClick={nextTestimonial}
                        aria-label="Next review"
                        className="flex-1 py-2.5 px-3 rounded-lg bg-[#20222d] hover:bg-[#d4af37] text-[#f5f6fa] hover:text-[#050507] border border-white/10 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>NEXT</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
