'use client';

import { useState, useEffect } from 'react';
import { Navigation, Footer } from '@/components/Navigation';
import { QuizCard } from '@/components/QuizCard';
import { ResultCard } from '@/components/ResultCard';
import { AuthModal } from '@/components/AuthModal';
import { useAuth } from '@/hooks/useAuth';
import { Question } from '@/lib/types';
import questionsData from '@/data/questions-optimized.json';

export default function QuizPage() {
  const { user, state } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingAnswer, setPendingAnswer] = useState<number | null>(null);

  useEffect(() => {
    setQuestions(questionsData as Question[]);
  }, []);

  const handleAnswerSelect = (index: number) => {
    if (state === 'anonymous') {
      setPendingAnswer(index);
      setAuthModalOpen(true);
    } else {
      submitAnswer(index);
    }
  };

  const submitAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setRevealed(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setRevealed(false);
    setShowResults(false);
    setPendingAnswer(null);
  };

  const handleAuthSuccess = () => {
    if (pendingAnswer !== null) {
      submitAnswer(pendingAnswer);
      setPendingAnswer(null);
    }
  };

  if (questions.length === 0) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-600">Quiz wird geladen...</p>
          </div>
        </main>
      </>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isCorrect =
    answers[currentIndex] !== null &&
    answers[currentIndex] === currentQuestion.correct_index;
  const score = answers.filter(
    (answer, idx) =>
      answer !== null && answer === questions[idx].correct_index
  ).length;

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {showResults ? (
            <ResultCard
              score={score}
              total={questions.length}
              answers={answers.map((answer, idx) => ({
                question: questions[idx],
                selectedIndex: answer || 0,
                isCorrect:
                  answer !== null && answer === questions[idx].correct_index,
              }))}
              onRestart={handleRestart}
              isAuthenticated={state === 'authenticated'}
            />
          ) : (
            <QuizCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={answers[currentIndex] || null}
              revealed={revealed}
              isCorrect={isCorrect}
              onSelectAnswer={handleAnswerSelect}
              onNext={handleNext}
            />
          )}
        </div>
      </main>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => {
          setAuthModalOpen(false);
          setPendingAnswer(null);
        }}
        onSuccess={handleAuthSuccess}
      />

      <Footer />
    </>
  );
}
