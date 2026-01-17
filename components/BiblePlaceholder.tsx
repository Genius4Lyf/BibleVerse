import React from 'react';
import { BookOpen, Hammer } from 'lucide-react';

export const BiblePlaceholder: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
      <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
        <BookOpen size={40} className="text-amber-500" />
      </div>
      <h2 className="font-serif text-3xl font-bold text-slate-800 mb-4">Full Bible Reader</h2>
      <p className="text-slate-500 max-w-xs mx-auto leading-relaxed mb-8">
        We are currently building a distraction-free, beautiful Bible reading experience. Stay tuned for the update!
      </p>
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-500 text-sm font-medium">
        <Hammer size={16} />
        <span>Under Construction</span>
      </div>
    </div>
  );
};