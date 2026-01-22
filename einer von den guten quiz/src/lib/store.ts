import { create } from 'zustand';
import { AuthState } from './types';

interface AuthStore {
  user: { id: string; email: string } | null;
  state: AuthState;
  isLoading: boolean;
  setUser: (user: { id: string; email: string } | null) => void;
  setState: (state: AuthState) => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  state: 'loading',
  isLoading: true,
  setUser: (user) => set({ user }),
  setState: (state) => set({ state }),
  setLoading: (isLoading) => set({ isLoading }),
}));

interface QuizStore {
  currentQuestionIndex: number;
  selectedAnswers: (number | null)[];
  setCurrentQuestion: (index: number) => void;
  setAnswer: (index: number, answer: number) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestionIndex: 0,
  selectedAnswers: [],
  setCurrentQuestion: (index) => set({ currentQuestionIndex: index }),
  setAnswer: (index, answer) =>
    set((state) => {
      const newAnswers = [...state.selectedAnswers];
      newAnswers[index] = answer;
      return { selectedAnswers: newAnswers };
    }),
  reset: () => set({ currentQuestionIndex: 0, selectedAnswers: [] }),
}));
