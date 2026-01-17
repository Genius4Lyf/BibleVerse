import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Feed } from './components/Feed';
import { PostDetail } from './components/PostDetail';
import { BiblePlaceholder } from './components/BiblePlaceholder';
import { Post } from './types';
import { initialPosts } from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState<'feed' | 'bible' | 'detail'>('feed');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedPost]);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setCurrentView('detail');
  };

  const handleBackToFeed = () => {
    setSelectedPost(null);
    setCurrentView('feed');
  };

  const handleRefresh = () => {
    // Shuffle posts to simulate new content
    const shuffled = [...posts].sort(() => Math.random() - 0.5);
    setPosts(shuffled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView} onBack={handleBackToFeed}>
      {currentView === 'feed' && (
        <Feed 
          posts={posts} 
          onPostClick={handlePostClick} 
          onRefresh={handleRefresh} 
        />
      )}
      
      {currentView === 'detail' && selectedPost && (
        <PostDetail 
          post={selectedPost} 
          onBack={handleBackToFeed} 
        />
      )}

      {currentView === 'bible' && (
        <BiblePlaceholder />
      )}
    </Layout>
  );
}