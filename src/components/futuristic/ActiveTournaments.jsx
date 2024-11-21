'use client'
{/* Tournament Section */}

import React from 'react';
import { Trophy, Clock, Users, Gamepad2 } from 'lucide-react';

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
  
  const TournamentSection = () => (
    <section className="py-20 bg-[#16162D]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Active Tournaments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{tournament.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {tournament.status}
                  </span>
                </div>
                
                <div className="space-y-4 flex-grow">
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
    </section>
  );
  
  export default TournamentSection;