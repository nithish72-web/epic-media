import React, { useState } from 'react';

/**
 * EPIC MEDIA - Digital Marketing Agency Landing Page Component
 * Tech Stack: React + Tailwind CSS
 * Target Audience: Local Businesses & Content Creators
 * Aesthetic: Dark Modern, Minimalist, High-Contrast Accents (Zinc/Emerald)
 */

export default function EpicMediaWebsite() {
  const [clientType, setClientType] = useState('creator'); // 'creator' | 'business'
  const [selectedServices, setSelectedServices] = useState(['video']);
  const [formData, setFormData] = useState({
    name: '',
    brandOrHandle: '',
    email: '',
    phone: '',
    budget: 'mid',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center font-black text-black text-xl tracking-tighter shadow-lg shadow-emerald-500/20">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-xl leading-tight text-white">
                EPIC<span className="text-emerald-400">.</span>MEDIA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                Digital Agency
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#audiences" className="hover:text-emerald-400 transition-colors">Who We Serve</a>
            <a href="#results" className="hover:text-emerald-400 transition-colors">Results</a>
            <a href="#process" className="hover:text-emerald-400 transition-colors">Process</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/?text=Hi%20EPIC%20Media,%20I'd%20like%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-zinc-700 hover:border-emerald-500/50 hover:bg-zinc-800/60 transition-all text-zinc-200"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-emerald-400 text-black hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 px-6 py-4 space-y-3">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-emerald-400">Services</a>
            <a href="#audiences" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-emerald-400">Who We Serve</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-emerald-400">Results</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-emerald-400">Process</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-emerald-400">Contact</a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-bold uppercase rounded-lg bg-emerald-400 text-black"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Short-Form Content • Social Growth • Brand Identity
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08]">
            We turn visual storytelling into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">viral momentum</span> & paying customers.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            EPIC Media partners with ambitious <strong>content creators</strong> and fast-growing <strong>local businesses</strong> to engineer high-retention video content, organic social dominance, and memorable brand identities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-400 text-black font-bold text-sm tracking-wide uppercase hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Start Your Campaign
            </a>
            <a
              href="#results"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 font-semibold text-sm transition-all"
            >
              View Case Studies & Metrics
            </a>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-800/80 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">120M+</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400 font-medium">Short-Form Views</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="text-3xl sm:text-4xl font-black text-white">3.8x</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400 font-medium">Avg. Engagement Lift</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">45+</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400 font-medium">Partners Scaled</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="text-3xl sm:text-4xl font-black text-white">99.4%</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400 font-medium">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Tailored Section */}
      <section id="audiences" className="py-20 bg-zinc-950 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Precision Tailoring</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-white">Built for Creators & Local Businesses</p>
            <p className="mt-4 text-zinc-400 text-sm">Two distinct client profiles. One shared outcome: unbeatable market relevance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Creators */}
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800 relative hover:border-emerald-500/50 transition-all group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                For Content Creators
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Stop spending 20 hours a week editing. Focus strictly on creating.
              </h3>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                We take your raw footage, podcasts, and daily ideas and transform them into high-converting Instagram Reels, YouTube Shorts, and TikToks engineered around retention mechanics and platform algorithms.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  Dynamic pacing, custom sound design & viral hook structuring
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  Multi-platform content repurposing across YouTube, IG & TikTok
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                  Cohesive personal branding that attracts premium brand sponsorships
                </li>
              </ul>
            </div>

            {/* For Local Businesses */}
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/70 border border-zinc-800 relative hover:border-teal-500/50 transition-all group">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-wider mb-6">
                For Local Businesses
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                Turn your local community into loyal walk-ins and customers.
              </h3>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                Standard flyers and boring corporate posts don't work anymore. We bring cinematic production to your storefront, telling stories that get shared across town and driving direct inquiries to your desk.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">✓</span>
                  Hyper-local visual content highlighting products, food, or services
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">✓</span>
                  Active social management, reputation care & DM lead handling
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs">✓</span>
                  Modern brand identity kits that make your business look like an industry leader
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Core Capabilities</h2>
          <p className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">Three Services. Flawless Execution.</p>
          <p className="mt-4 text-zinc-400 text-base">We don't offer 40 fragmented packages. We master the three pillars that actually generate organic reach and tangible brand equity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Social Media Management</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Strategic channel management designed to build community and cultivate loyal followers who buy.
              </p>
              <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Editorial calendar & daily scheduling
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Community moderation & DM response workflows
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Monthly in-depth analytics & growth reviews
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Focus: Community & Growth</span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-emerald-500/40 shadow-xl shadow-emerald-500/5 transition-all flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
              Most Requested
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Short-Form Video Production</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                High-retention Reels, TikToks, and YouTube Shorts planned, scripted, recorded, and edited for maximum watch time.
              </p>
              <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Pattern-interrupt hooks & dynamic subtitle styling
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Cinematic B-roll shooting & studio quality audio mixing
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Weekly batches delivered on automated turnaround
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Focus: Viral Retention & Reach</span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Branding & Visual Identity</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Creating memorable visual identities that stand out effortlessly in crowded social feeds and physical storefronts.
              </p>
              <div className="mt-6 space-y-2.5 pt-6 border-t border-zinc-800/60 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Brand mark, primary & secondary typography systems
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Social media asset kits & story templates
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Comprehensive brand guidelines & tone manual
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Focus: Identity & Authority</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section id="results" className="py-20 bg-zinc-950 border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Proof of Work</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-white">Recent Case Studies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Local Fitness Studio</div>
              <h4 className="text-lg font-bold text-white">From Zero Reels to 300% Inquiries</h4>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                Created a 30-day local spotlight reel campaign highlighting member transformations and trainer tips.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-500">Inbound Leads:</span>
                <span className="font-bold text-emerald-400">+312% in 60 Days</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Tech & Lifestyle Creator</div>
              <h4 className="text-lg font-bold text-white">15k to 140k Follower Scale</h4>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                Overhauled editing workflow with high-velocity sound design and custom hook templates across YouTube Shorts.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-500">Total Views:</span>
                <span className="font-bold text-emerald-400">42M+ Organically</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Artisan Cafe & Bakery</div>
              <h4 className="text-lg font-bold text-white">Full Rebrand & Viral Local Buzz</h4>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                Redesigned packaging, curated aesthetic TikTok content, and ran geo-targeted viral showcase videos.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
                <span className="text-zinc-500">Weekend Footfall:</span>
                <span className="font-bold text-emerald-400">Sold Out Every Weekend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The EPIC Process */}
      <section id="process" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Blueprint</h2>
          <p className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-white">How We Work With You</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">Phase 01</div>
            <h4 className="text-base font-bold text-white">Audit & Angle Discovery</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              We analyze your current profiles, identify viral content angles, and pinpoint gaps your competitors overlook.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">Phase 02</div>
            <h4 className="text-base font-bold text-white">Content Architecture</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              We write tested hooks, build monthly scripts, and provide shoot guides or coordinate on-site filming.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">Phase 03</div>
            <h4 className="text-base font-bold text-white">Cinematic Post-Production</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Our editors apply dynamic typography, motion cuts, SFX, and platform-specific audio balancing.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">Phase 04</div>
            <h4 className="text-base font-bold text-white">Distribution & Optimization</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              We publish at peak audience windows, engage with viewers, and double-down on the winning content styles.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Contact & Conversion Section */}
      <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              Get Started
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Ready to create something <span className="text-emerald-400">EPIC</span>?
            </h2>
            <p className="mt-4 text-zinc-400 text-base">
              Choose your preferred way to connect. Schedule a discovery call, message us directly on WhatsApp, or send a detailed project brief below.
            </p>
          </div>

          {/* Direct Quick Action Channels */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Discovery Call */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  🗓️
                </div>
                <h3 className="font-bold text-white text-base">15-Min Discovery Call</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Book a direct 1-on-1 strategy call with our agency team to map out your 90-day growth plan.
                </p>
              </div>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-emerald-300 transition-colors"
              >
                Schedule via Calendar →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  💬
                </div>
                <h3 className="font-bold text-white text-base">Instant WhatsApp Chat</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Prefer chatting immediately? Message our team directly for quick questions, rates, or custom scopes.
                </p>
              </div>
              <a
                href="https://wa.me/?text=Hello%20EPIC%20Media,%20I'm%20interested%20in%20scaling%20my%20content"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-2.5 px-4 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider text-emerald-400 transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* Direct Email */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
                  ✉️
                </div>
                <h3 className="font-bold text-white text-base">Direct Email Inquiry</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Send raw briefs, RFP documents, or collaborate directly via standard business email.
                </p>
              </div>
              <a
                href="mailto:contact@epicmedia.agency?subject=Inquiry%20from%20EPIC%20Media%20Website"
                className="mt-6 block text-center py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors"
              >
                Send Email →
              </a>
            </div>
          </div>

          {/* Project Brief Form */}
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 relative">
            <h3 className="text-xl font-bold text-white mb-2">Send Us a Project Brief</h3>
            <p className="text-xs text-zinc-400 mb-8">Fill out the quick questionnaire below and we'll reply with an actionable breakdown within 24 hours.</p>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl mb-4 font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="mt-2 text-sm text-zinc-400 max-w-md mx-auto">
                  Thank you for reaching out to EPIC Media! Our strategy team is reviewing your details and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-emerald-400 underline uppercase tracking-wider"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Client Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    I am representing:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setClientType('creator')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                        clientType === 'creator'
                          ? 'bg-emerald-400 text-black border-emerald-400'
                          : 'bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                      }`}
                    >
                      A Content Creator
                    </button>
                    <button
                      type="button"
                      onClick={() => setClientType('business')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                        clientType === 'business'
                          ? 'bg-emerald-400 text-black border-emerald-400'
                          : 'bg-zinc-800/60 text-zinc-300 border-zinc-700 hover:border-zinc-500'
                      }`}
                    >
                      A Local Business
                    </button>
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Services you are interested in:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'video', label: 'Short-Form Video Production' },
                      { id: 'social', label: 'Social Media Management' },
                      { id: 'branding', label: 'Branding & Visual Identity' },
                      { id: 'full', label: 'Full Agency Retainer' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleService(item.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedServices.includes(item.id)
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                            : 'bg-zinc-800/40 border-zinc-700/80 text-zinc-400 hover:border-zinc-500'
                        }`}
                      >
                        {selectedServices.includes(item.id) ? '✓ ' : '+ '}
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">
                      {clientType === 'creator' ? 'Channel / Social Handle' : 'Business Name'}
                    </label>
                    <input
                      type="text"
                      name="brandOrHandle"
                      required
                      placeholder={clientType === 'creator' ? '@yourhandle' : 'e.g. Downtown Coffee Co.'}
                      value={formData.brandOrHandle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Estimated Monthly Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-emerald-400 text-sm"
                  >
                    <option value="starter">$1,000 - $2,500 / month</option>
                    <option value="mid">$2,500 - $5,000 / month</option>
                    <option value="scale">$5,000 - $10,000+ / month</option>
                    <option value="one_time">Single Project / Rebrand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Project Details / Goals</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what you're looking to achieve (e.g. scale our Shorts to 5M monthly views, launch our local brand rebranding campaign)..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-400 text-black font-extrabold text-sm uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
                >
                  Send Inquiry to EPIC Media
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800/80 bg-black text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">EPIC MEDIA</span>
            <span>— Digital Marketing Agency</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-zinc-300 transition-colors">Services</a>
            <a href="#audiences" className="hover:text-zinc-300 transition-colors">Audiences</a>
            <a href="#results" className="hover:text-zinc-300 transition-colors">Results</a>
            <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
          <div>
            © {new Date().getFullYear()} EPIC Media. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
