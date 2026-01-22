'use client';

import { Question } from '@/lib/types';
import clsx from 'clsx';

interface ResultCardProps {
  score: number;
  total: number;
  answers: Array<{
    question: Question;
    selectedIndex: number;
    isCorrect: boolean;
  }>;
  onRestart: () => void;
  onShare?: () => void;
  isAuthenticated: boolean;
}

export function ResultCard({
  score,
  total,
  answers,
  onRestart,
  onShare,
  isAuthenticated,
}: ResultCardProps) {
  const percentage = Math.round((score / total) * 100);

  const getTitleByScore = (pct: number): string => {
    if (pct === 100) return 'Zeo\'s Albtraum 👑';
    if (pct >= 80) return 'Zertifizierter Cracker 🍘';
    if (pct >= 60) return 'Meme-Azubi 🚀';
    if (pct >= 40) return 'Podcast-Rookie 📻';
    return 'Komplett Lost 🌪️';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-xl text-white animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Ergebnisse!</h1>
        <h2 className="text-3xl font-bold mb-4">{getTitleByScore(percentage)}</h2>
        <div className="text-6xl font-bold mb-4">{percentage}%</div>
        <p className="text-xl">
          {score} von {total} Fragen richtig
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">✓</div>
          <p className="text-sm mt-2">{score} Richtig</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">✗</div>
          <p className="text-sm mt-2">{total - score} Falsch</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">{percentage}%</div>
          <p className="text-sm mt-2">Score</p>
        </div>
      </div>

      {/* Answer Details (only for authenticated users) */}
      {isAuthenticated && (
        <div className="mb-8 bg-white bg-opacity-10 rounded-lg p-4 max-h-64 overflow-y-auto">
          <h3 className="font-bold mb-4">Deine Antworten:</h3>
          <div className="space-y-2">
            {answers.map((answer, idx) => (
              <div
                key={idx}
                className={clsx(
                  'p-2 rounded text-sm',
                  answer.isCorrect
                    ? 'bg-green-500 bg-opacity-30'
                    : 'bg-red-500 bg-opacity-30'
                )}
              >
                <p className="font-semibold">
                  {idx + 1}. {answer.question.text}
                </p>
                <p className="text-xs opacity-80">
                  Deine Antwort: {answer.question.options[answer.selectedIndex]}
                </p>
                {!answer.isCorrect && (
                  <p className="text-xs opacity-80">
                    Richtig: {answer.question.options[answer.question.correct_index]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <div className="mb-8 bg-white bg-opacity-10 rounded-lg p-4 text-center">
          <p className="text-sm">
            Melde dich an, um deine detaillierten Ergebnisse zu sehen und zu speichern!
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onRestart}
          className="w-full bg-white text-secondary py-3 rounded-lg font-semibold hover:bg-opacity-90"
        >
          Nochmal spielen
        </button>
        {onShare && (
          <button
            onClick={onShare}
            className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90"
          >
            Teilen
          </button>
        )}
      </div>
    </div>
  );
}
