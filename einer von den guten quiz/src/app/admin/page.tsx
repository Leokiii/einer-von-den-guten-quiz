'use client';

import { Navigation, Footer } from '@/components/Navigation';
import { AdminQuestionForm } from '@/components/AdminQuestionForm';
import { useState, useEffect } from 'react';
import { Question } from '@/lib/types';
import questionsData from '@/data/questions.json';

export default function AdminPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setQuestions(questionsData as Question[]);
  }, []);

  const handleAddQuestion = async (newQuestion: Omit<Question, 'id'>) => {
    // In einer echten Implementierung würde dies zur DB gehen
    const question: Question = {
      ...newQuestion,
      id: Math.max(...questions.map((q) => q.id), 0) + 1,
    };
    setQuestions([...questions, question]);
    setShowForm(false);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Admin-Panel</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Admin-Menu</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
                  >
                    + Neue Frage
                  </button>
                  <button className="w-full px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90">
                    📥 CSV Importieren
                  </button>
                  <button className="w-full px-4 py-2 bg-accent text-dark rounded-md hover:bg-opacity-90">
                    📤 CSV Exportieren
                  </button>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold mb-2">📊 Statistiken</p>
                  <p className="text-sm text-gray-700">
                    Fragen gesamt: <strong>{questions.length}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {showForm && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Neue Frage erstellen</h2>
                  <AdminQuestionForm onSubmit={handleAddQuestion} />
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold mb-4">Fragen ({questions.length})</h2>
                <div className="space-y-4">
                  {questions.map((question) => (
                    <div
                      key={question.id}
                      className="bg-white rounded-lg shadow p-4 border-l-4 border-primary"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{question.text}</h3>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200">
                            Edit
                          </button>
                          <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200">
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        {question.options.map((option, idx) => (
                          <p key={idx}>
                            <span
                              className={
                                idx === question.correct_index
                                  ? 'font-bold text-green-600'
                                  : ''
                              }
                            >
                              {String.fromCharCode(65 + idx)}) {option}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
