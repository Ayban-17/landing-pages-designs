'use client'
import React, { useState, useEffect } from 'react';
import { Star, Users, ChevronDown, Trophy, Swords, Activity, Gamepad2, Headphones, Monitor, Twitch, Youtube, Clock, Zap } from 'lucide-react';
import GameCategories from "./GameCategories"
import ActiveTournaments from "./ActiveTournaments"

const GamingLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveGameIndex(prev => (prev + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredGames = [
    {
      title: "Cyber Legends",
      genre: "MOBA",
      players: "50K",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920",
      description: "A futuristic MOBA where champions battle in neo-Tokyo",
      features: ["5v5 Ranked Matches", "50+ Unique Champions", "Weekly Tournaments"],
      category: "competitive"
    },
    {
      title: "Neon Raiders",
      genre: "Battle Royale",
      players: "120K",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1920",
      description: "Drop into a cyberpunk world where only one team survives",
      features: ["100 Player Matches", "Dynamic Weather", "Vehicle Combat"],
      category: "action"
    },
    {
      title: "Space Warriors",
      genre: "FPS",
      players: "80K",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1920",
      description: "Intense multiplayer space combat with destructible environments",
      features: ["Zero Gravity Combat", "Customizable Ships", "Clan Wars"],
      category: "shooter"
    }
  ];

  const tournaments = [
    {
      title: "Cyber League Season 5",
      game: "Cyber Legends",
      prize: "$100,000",
      date: "June 15, 2024",
      participants: "256 Teams",
      status: "Registering"
    },
    {
      title: "Neon Championship",
      game: "Neon Raiders",
      prize: "$50,000",
      date: "July 1, 2024",
      participants: "500 Players",
      status: "Coming Soon"
    },
    {
      title: "Space Warriors World Cup",
      game: "Space Warriors",
      prize: "$75,000",
      date: "June 30, 2024",
      participants: "128 Teams",
      status: "Registering"
    }
  ];

  const streamers = [
    {
      name: "CyberNinja",
      platform: "Twitch",
      game: "Cyber Legends",
      viewers: "15.2K",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=400"
    },
    {
      name: "NeonQueen",
      platform: "YouTube",
      game: "Neon Raiders",
      viewers: "12.8K",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400"
    },
    {
      name: "SpaceWarrior",
      platform: "Twitch",
      game: "Space Warriors",
      viewers: "10.5K",
      image: "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-overlay" />
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920" 
            alt="Gaming Setup"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NEXUS GAMING
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Welcome to the future of gaming. Experience stunning graphics, 
              immersive worlds, and competitive gameplay like never before.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-lg font-semibold hover:scale-105 transition-transform">
                Play Now
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-lg font-semibold hover:bg-white/20 transition-colors">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8 text-white/50" />
      </section>

      {/* Featured Game Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A1B] to-[#16162D]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Games
          </h2>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={featuredGames[activeGameIndex].image}
                alt={featuredGames[activeGameIndex].title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400">
                    {featuredGames[activeGameIndex].genre}
                  </span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    {featuredGames[activeGameIndex].players} Playing
                  </span>
                </div>
                <h3 className="text-4xl font-bold mb-4">{featuredGames[activeGameIndex].title}</h3>
                <p className="text-xl text-gray-300 mb-6">{featuredGames[activeGameIndex].description}</p>
                <div className="flex gap-6 mb-8">
                  {featuredGames[activeGameIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="px-8 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors">
                  Play Now
                </button>
              </div>
            </div>
          </div>

          {/* Game Category Tabs */}
          <div className="mt-12">
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
              {['all', 'competitive', 'action', 'shooter'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full capitalize whitespace-nowrap transition-colors ${
                    activeTab === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Section */}
      {/* <section className="py-20 bg-[#16162D]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Active Tournaments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{tournament.title}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tournament.status}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Gamepad2 className="w-4 h-4" />
                      {tournament.game}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Trophy className="w-4 h-4" />
                      {tournament.prize}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {tournament.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      {tournament.participants}
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <ActiveTournaments/>

      {/* Top Streamers Section */}
      <section className="py-20 bg-gradient-to-b from-[#16162D] to-[#0A0A1B]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Top Streamers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streamers.map((streamer, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group hover:scale-105 transition-transform">
                <div className="relative">
                  <img 
                    src={streamer.image}
                    alt={streamer.name}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {streamer.platform === 'Twitch' ? (
                      <Twitch className="w-6 h-6 text-purple-500" />
                    ) : (
                      <Youtube className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-red-500 rounded-full flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    {streamer.viewers}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{streamer.name}</h3>
                  <p className="text-gray-400 mb-4">Playing {streamer.game}</p>
                  <button className="w-full py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    Watch Stream
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A0A1B] to-[#16162D]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen Gaming Experience
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Monitor, title: "4K Ultra HD", desc: "Experience stunning visuals with ray-tracing and DLSS" },
                  { icon: Gamepad2, title: "Advanced Controls", desc: "Full controller support with haptic feedback" },
                  { icon: Headphones, title: "3D Audio", desc: "Immersive spatial audio with Dolby Atmos support" },
                  { icon: Zap, title: "Low Latency", desc: "Optimized netcode for responsive gameplay" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 group hover:bg-white/5 p-4 rounded-xl transition-colors">
                    <feature.icon className="w-8 h-8 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1920" 
                alt="Gaming Setup"
                className="relative rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
                <GameCategories/>
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Gaming Community</h2>
          <p className="text-xl text-gray-300 mb-10">
            Subscribe to get exclusive access to beta releases, tournaments, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-lg font-semibold hover:scale-105 transition-transform whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0A1B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Games</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coming Soon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free to Play</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tournaments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EULA</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 Nexus Gaming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamingLandingPage;