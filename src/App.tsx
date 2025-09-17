
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from '@/pages/Index';
import Roadmaps from '@/pages/Roadmaps';
import Topics from '@/pages/Topics';
import RoadmapDetail from '@/pages/RoadmapDetail';
import TopicDetail from '@/pages/TopicDetail';
import Quiz from '@/pages/Quiz';
import Auth from '@/pages/Auth';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/roadmaps/:roadmapId" element={<RoadmapDetail />} />
            <Route path="/topics/:topicId" element={<TopicDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
