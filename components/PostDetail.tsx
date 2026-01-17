import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Bookmark, Share2, Send } from 'lucide-react';
import { Post } from '../types';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20 animate-in slide-in-from-right duration-300">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 h-14 flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 flex items-center gap-2">
          <img src={post.authorAvatar} alt="" className="w-8 h-8 rounded-full" />
          <span className="font-semibold text-sm">{post.authorName}</span>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-8 md:p-6 md:max-w-4xl md:mx-auto">
        {/* Left Col (Desktop): Image */}
        <div className="relative aspect-[4/5] md:aspect-square w-full bg-slate-900 md:rounded-2xl md:overflow-hidden">
          <img 
            src={post.backgroundImage} 
            alt="Verse" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-black/10 via-transparent to-black/60">
            <h2 className="font-serif text-2xl md:text-4xl text-white font-medium leading-relaxed drop-shadow-md mb-6">
              {post.verseText}
            </h2>
            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-bold text-sm border border-white/40">
              {post.verseReference}
            </span>
          </div>
        </div>

        {/* Right Col (Desktop): Content */}
        <div className="p-5 md:p-0 md:h-[600px] md:overflow-y-auto hide-scrollbar">
          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-5">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`transition-colors ${isLiked ? 'text-red-500' : 'text-slate-800'}`}
              >
                <Heart size={28} fill={isLiked ? "currentColor" : "none"} />
              </button>
              <button className="text-slate-800 hover:text-blue-500">
                <MessageCircle size={28} />
              </button>
              <button className="text-slate-800 hover:text-amber-500">
                <Share2 size={28} />
              </button>
            </div>
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`transition-colors ${isSaved ? 'text-slate-900' : 'text-slate-800'}`}
            >
              <Bookmark size={28} fill={isSaved ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="text-sm font-bold mb-4">
            {isLiked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()} likes
          </div>

          {/* Reflection Body */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
               <div className={`w-1 h-6 bg-${post.authorColor}-500 rounded-full`}></div>
               <h3 className="font-serif text-xl font-bold text-slate-900">Author's Reflection</h3>
            </div>
            <div className="prose prose-slate prose-p:text-slate-700 prose-p:leading-relaxed">
              <p className="text-lg first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-[-4px]">
                {post.reflection}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">#{tag}</span>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 my-6" />

          {/* Comments Section */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Comments ({post.comments.length})</h4>
            <div className="space-y-4">
              {post.comments.map(comment => (
                <div key={comment.id} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                    {comment.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold text-slate-900 mr-2">{comment.user}</span>
                      <span className="text-slate-700">{comment.text}</span>
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-slate-400">{comment.timeAgo}</span>
                      <button className="text-xs font-medium text-slate-500">Reply</button>
                    </div>
                  </div>
                  <button className="text-slate-300 h-4">
                    <Heart size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mock Comment Input */}
          <div className="flex items-center gap-3 mt-6 border-t border-slate-100 pt-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold">
              You
            </div>
            <input 
              type="text" 
              placeholder="Add a comment..." 
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
            <button className="text-amber-600 font-semibold text-sm">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};