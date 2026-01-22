'use client';

import { Navigation, Footer } from '@/components/Navigation';

export default function LeaderboardPage() {
  const mockLeaderboard = [
    { rank: 1, name: 'CrackerKing', score: 95, date: '2025-01-22' },
    { rank: 2, name: 'ZeosFan', score: 90, date: '2025-01-21' },
    { rank: 3, name: 'HuebiMeme', score: 88, date: '2025-01-20' },
    { rank: 4, name: 'BieneLover', score: 85, date: '2025-01-22' },
    { rank: 5, name: 'PodcastPro', score: 82, date: '2025-01-19' },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">🏆 Bestenliste</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
              <h2 className="text-xl font-bold">Top Scorer</h2>
              <p className="text-gray-200">Die besten Quiz-Spieler</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-6 py-4 text-left">Rang</th>
                    <th className="px-6 py-4 text-left">Spieler</th>
                    <th className="px-6 py-4 text-left">Score</th>
                    <th className="px-6 py-4 text-left">Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {mockLeaderboard.map((entry) => (
                    <tr key={entry.rank} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="text-2xl font-bold">{entry.rank}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold">{entry.name}</td>
                      <td className="px-6 py-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                          {entry.score}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{entry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold mb-2">💡 Tipp:</h3>
            <p className="text-gray-700">
              Melde dich an, um auf der Bestenliste zu erscheinen und deine Ergebnisse zu verfolgen!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
