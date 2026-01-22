export interface Question {
  id: number;
  text: string;
  options: string[];
  correct_index: number;
  explanation?: string;
  image_url?: string;
  source?: {
    episode: string;
    timestamp: string;
  };
}

export interface Quiz {
  id: number;
  slug: string;
  title: string;
  description: string;
}

export interface Attempt {
  id: number;
  user_id?: string;
  quiz_id: number;
  score: number;
  total: number;
  created_at: string;
}

export interface Answer {
  id: number;
  attempt_id: number;
  question_id: number;
  selected_index: number;
  correct: boolean;
}

export interface UserProfile {
  id: string;
  display_name: string;
  avatar_url?: string;
  created_at: string;
}

export type AuthState = 'authenticated' | 'anonymous' | 'loading';
