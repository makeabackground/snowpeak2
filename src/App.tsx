/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Snowflake, 
  Wind, 
  Mountain, 
  Calendar, 
  Users, 
  ChevronRight, 
  X,
  CheckCircle2,
  MapPin,
  Clock
} from 'lucide-react';
import { ACTIVITIES } from './constants';
import { Activity, Booking } from './types';
import heroImage from './Gemini_Generated_Image_2fof5j2fof5j2fof.png';

const IconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Mountain: <Mountain className="w-5 h-5" />
};

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState<Partial<Booking>>({
    participants: 1,
    date: new Date().toISOString().split('T')[0]
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedActivity(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Snowy Mountain" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-white uppercase bg-blue-600 rounded-full">
              Winter Paradise
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              SnowPeak
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Create unforgettable winter memories with our curated selection of adventures.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Activities Section */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Winter Adventures</h2>
            <p className="text-slate-500 max-w-md">
              From first-time skiers to thrill-seekers, we have something for every explorer.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
            <MapPin className="w-4 h-4" />
            <span>North Slope Base Camp</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-sm">
                  {IconMap[activity.icon]}
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  ${activity.price}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {activity.duration}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span>{activity.ageRange}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                
                <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {activity.description}
                </p>
                
                <button 
                  onClick={() => setSelectedActivity(activity)}
                  className="mt-auto w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-[0.98]"
                >
                  Book Activity
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">SnowPeak</h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              We believe every person deserves a magical winter experience. 
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-slate-500">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>123 Alpine Way, Summit County</li>
              <li>hello@snowpeak.com</li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-slate-500">Hours</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat - Sun: 7:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[32px] shadow-2xl overflow-hidden"
            >
              {bookingSuccess ? (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-slate-500 mb-8">
                    We've sent the details for <strong>{selectedActivity.title}</strong> to your email. Get ready for adventure!
                  </p>
                </div>
              ) : (
                <>
                  <div className="relative h-48">
                    <img 
                      src={selectedActivity.image} 
                      alt={selectedActivity.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={() => setSelectedActivity(null)}
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white to-transparent">
                      <h2 className="text-3xl font-bold text-slate-900">{selectedActivity.title}</h2>
                    </div>
                  </div>
                  
                  <form onSubmit={handleBook} className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="date" 
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={bookingForm.date}
                            onChange={e => setBookingForm({...bookingForm, date: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Participants</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input 
                            type="number" 
                            min="1" 
                            max="10"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={bookingForm.participants}
                            onChange={e => setBookingForm({...bookingForm, participants: parseInt(e.target.value)})}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        value={bookingForm.email || ''}
                        onChange={e => setBookingForm({...bookingForm, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Price</p>
                        <p className="text-2xl font-bold text-slate-900">
                          ${selectedActivity.price * (bookingForm.participants || 1)}
                        </p>
                      </div>
                      <button 
                        type="submit"
                        className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
