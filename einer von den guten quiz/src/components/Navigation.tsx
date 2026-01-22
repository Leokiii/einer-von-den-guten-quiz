'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth, signOut } from '@/hooks/useAuth';
import { AuthModal } from '@/components/AuthModal';

export function Navigation() {
  const { user, state } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="bg-dark text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-accent">
            🎙️ Einer von den Guten
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-accent transition">
              Start
            </Link>
            <Link href="/quiz" className="hover:text-accent transition">
              Quiz
            </Link>
            <Link href="/leaderboard" className="hover:text-accent transition">
              Bestenliste
            </Link>

            {state === 'authenticated' ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">{user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
                >
                  Abmelden
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
              >
                Anmelden
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark text-white mt-16 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-3 text-accent">ℹ️ Über dieses Projekt</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ein reines <strong>Fan-Projekt</strong> für den Podcast &quot;Einer von den Guten&quot;.
              <br /><br />
              Keine offizielle Verbindung. Alle Inhalte sind satirisch gemeint und basieren auf öffentlich erzählten Geschichten und Community-Memes.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-accent">🔗 Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/impressum" className="hover:text-accent transition">
                  → Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-accent transition">
                  → Datenschutz
                </Link>
              </li>
              <li>
                <a href="https://open.spotify.com/show/6zzULDWPdNynkfYXohphg3" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  🎵 Spotify Podcast
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/r/einervondenguten/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  🔴 Reddit Community
                </a>
              </li>
              <li>
                <a href="https://einer-von-den-guten.fandom.com/de/wiki/Einer_von_den_Guten_Wiki" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  📖 Fandom Wiki
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-accent">💡 Hinweis</h3>
            <p className="text-gray-400 text-sm italic">
              &quot;Wenn du hier alles richtig hast, solltest du vielleicht mal rausgehen.&quot;
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg p-4 mb-8">
          <p className="text-gray-400 text-xs text-center">
            <strong>Disclaimer:</strong> Dies ist ein Fan-Projekt und nicht offiziell mit dem Podcast &quot;Einer von den Guten&quot; verbunden.
            Alle Fragen basieren auf öffentlich verfügbaren Informationen aus Podcast-Episoden, Memes und Community-Inhalten.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          <p>© 2026 Quiz Arena. Ein Fan-Projekt. Made with ❤️ von Fans, für Fans.</p>
        </div>
      </div>
    </footer>
  );
}
