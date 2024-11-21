'use client'
import React, { useState, useEffect } from 'react';

const GameCategories = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredGames, setFilteredGames] = useState([]);

  const games = [
    {
      title: "Cyber Legends",
      genre: "MOBA",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920",
      category: "competitive",
      players: "50K",
      description: "5v5 competitive MOBA"
    },
    {
      title: "Neon Raiders",
      genre: "Battle Royale",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1920",
      category: "action",
      players: "120K",
      description: "Battle Royale action"
    },
    {
      title: "Space Warriors",
      genre: "FPS",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1920",
      category: "shooter",
      players: "80K",
      description: "Competitive FPS"
    },
    {
        title: "Dragon Quest",
        genre: "RPG",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1920",
        category: "action",
        players: "30K",
        description: "Action RPG adventure"
      },
      {
        title: "Street Fighters Pro",
        genre: "Fighting",
        image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1920",
        category: "competitive",
        players: "45K",
        description: "Competitive fighting game"
      }
  ];

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.category === activeTab));
    }
  }, [activeTab]);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Game Categories
        </h2>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 justify-center">
          {['all', 'competitive', 'action', 'shooter'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full capitalize whitespace-nowrap transition-all ${
                activeTab === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game, idx) => (
            <div 
              key={idx}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={game.image}
                  alt={game.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm">
                        {game.genre}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {game.players} players
                      </span>
                    </div>
                    <p className="text-white/80">{game.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No games found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCategories;