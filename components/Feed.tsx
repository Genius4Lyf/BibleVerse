import React from 'react';
import { RefreshCw, Sun } from 'lucide-react';
import { PostCard } from './PostCard';
import { Post } from '../types';

interface FeedProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
  onRefresh: () => void;
}

export const Feed: React.FC<FeedProps> = ({ posts, onPostClick, onRefresh }) => {
  const verseOfTheDay = posts[0]; // Just taking the first one for the demo banner

  return (
    <div className="pb-8">
      {/* Verse of the Day Banner */}
      <div className="mx-4 mt-6 mb-6 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 shadow-sm relative overflow-hidden group cursor-pointer" onClick={() => onPostClick(verseOfTheDay)}>
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sun size={120} className="text-amber-500" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-amber-700 mb-2">
            <Sun size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Verse of the Day</span>
          </div>
          <p className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed mb-3">
            "{verseOfTheDay.verseText.substring(0, 80)}..."
          </p>
          <p className="text-sm font-medium text-amber-700">— {verseOfTheDay.verseReference}</p>
        </div>
      </div>

      {/* Feed Controls */}
      <div className="px-4 mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">Latest Reflections</h2>
        <button 
          onClick={onRefresh}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 transition-colors bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
        >
          <RefreshCw size={14} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Posts List */}
      <div className="flex flex-col gap-6 px-4 md:px-0">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className="animate-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <PostCard post={post} onClick={() => onPostClick(post)} />
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-slate-400 text-sm pb-8">
        <p>You've caught up on all reflections.</p>
      </div>
    </div>
  );
};