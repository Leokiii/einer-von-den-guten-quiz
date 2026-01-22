'use client';

import { useState } from 'react';
import { Question } from '@/lib/types';

interface AdminQuestionFormProps {
  onSubmit: (question: Omit<Question, 'id'>) => Promise<void>;
  initialData?: Question;
  isLoading?: boolean;
}

export function AdminQuestionForm({
  onSubmit,
  initialData,
  isLoading = false,
}: AdminQuestionFormProps) {
  const [text, setText] = useState(initialData?.text || '');
  const [options, setOptions] = useState<string[]>(
    initialData?.options || ['', '', '']
  );
  const [correctIndex, setCorrectIndex] = useState(
    initialData?.correct_index || 0
  );
  const [explanation, setExplanation] = useState(initialData?.explanation || '');
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '');
  const [error, setError] = useState('');

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!text.trim()) {
      setError('Frage ist erforderlich');
      return;
    }

    if (options.some((opt) => !opt.trim())) {
      setError('Alle Optionen sind erforderlich');
      return;
    }

    try {
      await onSubmit({
        text,
        options,
        correct_index: correctIndex,
        explanation,
        image_url: imageUrl,
      });
      setText('');
      setOptions(['', '', '']);
      setCorrectIndex(0);
      setExplanation('');
      setImageUrl('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Frage
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          rows={3}
          placeholder="Gib die Frage ein..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Optionen
        </label>
        {options.map((option, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={`Option ${String.fromCharCode(65 + idx)}`}
            />
            <select
              value={correctIndex === idx ? 'correct' : ''}
              onChange={(e) => {
                if (e.target.value === 'correct') setCorrectIndex(idx);
              }}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">-</option>
              <option value="correct">Richtig</option>
            </select>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Erklärung (optional)
        </label>
        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          rows={2}
          placeholder="Erkläre die korrekte Antwort..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bild-URL (optional)
        </label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-white py-2 rounded-md font-semibold hover:bg-opacity-90 disabled:opacity-50"
      >
        {isLoading ? 'Wird gespeichert...' : 'Frage speichern'}
      </button>
    </form>
  );
}
