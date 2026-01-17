import React from 'react';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Author Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-0.5 rounded-full bg-gradient-to-tr from-${post.authorColor}-400 to-${post.authorColor}-200`}>
            <img 
              src={post.authorAvatar} 
              alt={post.authorName} 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-slate-900 leading-tight">{post.authorName}</h3>
            <p className="text-xs text-slate-500">{post.authorTitle} • {post.timestamp}</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <span className="sr-only">Options</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>

      {/* Visual Content */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img 
          src={post.backgroundImage} 
          alt="Verse background" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors flex flex-col items-center justify-center p-6 text-center">
          <p className="font-serif text-white text-xl md:text-2xl font-medium leading-relaxed drop-shadow-lg">
            "{post.verseText}"
          </p>
          <div className="mt-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white text-xs font-bold tracking-wide uppercase">{post.verseReference}</span>
          </div>
        </div>
      </div>

      {/* Interactions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-slate-600 hover:text-red-500 transition-colors group">
              <Heart size={22} className="group-hover:fill-red-500 transition-colors" />
            </button>
            <button className="flex items-center gap-1.5 text-slate-600 hover:text-blue-500 transition-colors">
              <MessageCircle size={22} />
            </button>
            <button className="flex items-center gap-1.5 text-slate-600 hover:text-amber-500 transition-colors">
              <Share2 size={22} />
            </button>
          </div>
          <button className="text-slate-600 hover:text-slate-900">
            <Bookmark size={22} />
          </button>
        </div>

        <div className="text-sm font-semibold text-slate-800 mb-2">
          {post.likes.toLocaleString()} likes
        </div>

        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.authorName}</span>
          <span className="text-sm text-slate-700 line-clamp-2">{post.reflection}</span>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          View all {post.comments.length} comments
        </div>
      </div>
    </article>
  );
};