import React from 'react';
import { Home, BookOpen, User, Bell, Search, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: 'feed' | 'bible' | 'detail';
  onNavigate: (view: 'feed' | 'bible') => void;
  onBack: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20 md:pb-0">
      {/* Desktop/Tablet Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('feed')}>
            <div className="w-8 h-8 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg">
              B
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-slate-800">BibleVerse</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:text-slate-800 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-800 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="hidden md:block p-2 text-slate-500 hover:text-slate-800">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto min-h-screen">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      {currentView !== 'detail' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center z-50 md:hidden pb-safe">
          <button 
            onClick={() => onNavigate('feed')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'feed' ? 'text-amber-600' : 'text-slate-400'}`}
          >
            <Home size={24} strokeWidth={currentView === 'feed' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">Feed</span>
          </button>
          
          <button 
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Search size={24} />
            <span className="text-[10px] font-medium">Discover</span>
          </button>

          <button 
            onClick={() => onNavigate('bible')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'bible' ? 'text-amber-600' : 'text-slate-400'}`}
          >
            <BookOpen size={24} strokeWidth={currentView === 'bible' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">Bible</span>
          </button>

          <button 
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <User size={24} />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </nav>
      )}
    </div>
  );
};