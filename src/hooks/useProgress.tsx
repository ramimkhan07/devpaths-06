import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface UserProgress {
  id: string;
  roadmap_id: string;
  topic_id?: string;
  progress_percentage: number;
  completed_at?: string;
  time_spent_minutes: number;
  streak_days: number;
  last_accessed: string;
}

export interface UserEnrollment {
  id: string;
  roadmap_id: string;
  enrolled_at: string;
  status: 'active' | 'paused' | 'completed';
}

export const useProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [enrollments, setEnrollments] = useState<UserEnrollment[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user progress and enrollments
  const fetchProgress = async () => {
    if (!user) {
      setProgress([]);
      setEnrollments([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // Fetch progress
      const { data: progressData, error: progressError } = await supabase
        .from('learning_progress')
        .select('*')
        .eq('user_id', user.id);

      if (progressError) throw progressError;

      // Fetch enrollments
      const { data: enrollmentData, error: enrollmentError } = await supabase
        .from('user_enrollments')
        .select('*')
        .eq('user_id', user.id);

      if (enrollmentError) throw enrollmentError;

      setProgress(progressData || []);
      setEnrollments((enrollmentData || []) as UserEnrollment[]);
    } catch (error) {
      console.error('Error fetching progress:', error);
      toast.error('Failed to load progress data');
    } finally {
      setLoading(false);
    }
  };

  // Enroll in a roadmap
  const enrollInRoadmap = async (roadmapId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_enrollments')
        .insert([{
          user_id: user.id,
          roadmap_id: roadmapId,
          status: 'active'
        }]);

      if (error) throw error;

      toast.success('Successfully enrolled in roadmap!');
      fetchProgress(); // Refresh data
    } catch (error: any) {
      console.error('Error enrolling in roadmap:', error);
      if (error.code === '23505') {
        toast.error('You are already enrolled in this roadmap');
      } else {
        toast.error('Failed to enroll in roadmap');
      }
    }
  };

  // Update progress for a roadmap/topic
  const updateProgress = async (
    roadmapId: string,
    topicId: string | null,
    progressPercentage: number,
    timeSpentMinutes: number = 0
  ) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('learning_progress')
        .upsert([{
          user_id: user.id,
          roadmap_id: roadmapId,
          topic_id: topicId,
          progress_percentage: progressPercentage,
          time_spent_minutes: timeSpentMinutes,
          completed_at: progressPercentage === 100 ? new Date().toISOString() : null,
          last_accessed: new Date().toISOString()
        }]);

      if (error) throw error;

      fetchProgress(); // Refresh data
    } catch (error) {
      console.error('Error updating progress:', error);
      toast.error('Failed to update progress');
    }
  };

  // Get progress for a specific roadmap
  const getRoadmapProgress = (roadmapId: string) => {
    return progress.filter(p => p.roadmap_id === roadmapId);
  };

  // Get overall progress for a roadmap
  const getRoadmapOverallProgress = (roadmapId: string) => {
    const roadmapProgress = getRoadmapProgress(roadmapId);
    if (roadmapProgress.length === 0) return 0;
    
    const totalProgress = roadmapProgress.reduce((sum, p) => sum + p.progress_percentage, 0);
    return Math.round(totalProgress / roadmapProgress.length);
  };

  // Check if user is enrolled in a roadmap
  const isEnrolledInRoadmap = (roadmapId: string) => {
    return enrollments.some(e => e.roadmap_id === roadmapId);
  };

  // Get total time spent across all learning
  const getTotalTimeSpent = () => {
    return progress.reduce((total, p) => total + p.time_spent_minutes, 0);
  };

  // Get completed items count
  const getCompletedItemsCount = () => {
    return progress.filter(p => p.progress_percentage === 100).length;
  };

  useEffect(() => {
    fetchProgress();
  }, [user]);

  return {
    progress,
    enrollments,
    loading,
    enrollInRoadmap,
    updateProgress,
    getRoadmapProgress,
    getRoadmapOverallProgress,
    isEnrolledInRoadmap,
    getTotalTimeSpent,
    getCompletedItemsCount,
    fetchProgress
  };
};