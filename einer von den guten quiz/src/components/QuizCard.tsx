'use client';

import { Question } from '@/lib/types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  revealed: boolean;
  isCorrect?: boolean;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  isLoading?: boolean;
}

export function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  revealed,
  isCorrect,
  onSelectAnswer,
  onNext,
  isLoading = false,
}: QuizCardProps) {
  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer === null) {
      onSelectAnswer(index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-dark to-dark/90 rounded-2xl shadow-2xl border border-accent border-opacity-20"
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-accent">
            Frage {questionNumber} von {totalQuestions}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          transition={{ duration: 0.8 }}
          className="w-full bg-gradient-to-r from-primary to-accent h-3 rounded-full shadow-lg"
        />
      </div>

      {/* Question Image */}
      {question.image_url && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-xl overflow-hidden shadow-2xl border-2 border-accent border-opacity-30"
        >
          <img
            src={question.image_url}
            alt="Quiz Bild"
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </motion.div>
      )}

      {/* Question Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight"
      >
        {question.text}
      </motion.h2>

      {/* Answer Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => handleSelectAnswer(index)}
            disabled={selectedAnswer !== null || isLoading}
            className={clsx(
              'w-full p-5 text-left rounded-xl font-bold transition-all duration-300 border-2 text-white text-lg',
              selectedAnswer === null
                ? 'border-accent bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 hover:border-accent hover:shadow-xl cursor-pointer'
                : index === selectedAnswer && revealed && isCorrect
                ? 'bg-green-500/30 border-green-500 shadow-lg'
                : index === selectedAnswer && revealed && !isCorrect
                ? 'bg-red-500/30 border-red-500 shadow-lg'
                : index === question.correct_index && revealed
                ? 'bg-green-500/30 border-green-500 shadow-lg'
                : 'bg-gray-700/30 border-gray-600 opacity-50',
              selectedAnswer !== null && 'cursor-default'
            )}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-current mr-3 font-black bg-accent text-dark flex-shrink-0">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option}</span>
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      {revealed && selectedAnswer !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            'mb-8 p-6 rounded-xl border-2 backdrop-blur-sm',
            isCorrect
              ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/20'
              : 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/20'
          )}
        >
          <p
            className={clsx(
              'font-black mb-3 text-lg',
              isCorrect ? 'text-green-300' : 'text-red-300'
            )}
          >
            {isCorrect
              ? '✓✓✓ RICHTIG! Das Internet nickt zustimmend.'
              : '✗✗✗ FALSCH! Deine Meme-Lizenz wurde kurzzeitig entzogen.'}
          </p>
          {question.explanation && (
            <p className="text-sm text-gray-200 leading-relaxed">{question.explanation}</p>
          )}
        </motion.div>
      )}

      {/* Next Button */}
      {revealed && selectedAnswer !== null && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={onNext}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-primary to-accent text-dark py-4 rounded-xl font-black text-lg hover:shadow-2xl disabled:opacity-50 transition-all transform hover:scale-105"
        >
          {questionNumber === totalQuestions ? '🏁 ERGEBNISSE ANZEIGEN' : '➜ NÄCHSTE FRAGE'}
        </motion.button>
      )}

      {selectedAnswer === null && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-300 italic"
        >
          ⬆️ Wähle eine Antwort, dann erfährst du die Wahrheit. ⬆️
        </motion.p>
      )}
    </motion.div>
  );
}
