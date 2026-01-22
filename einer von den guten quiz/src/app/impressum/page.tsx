'use client';

import { Navigation, Footer } from '@/components/Navigation';

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Impressum</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold mb-3">Disclaimer</h2>
              <p>
                Dies ist ein Fan-Projekt für den Podcast "Einer von den Guten". Die Webseite
                ist nicht offiziell mit den Podcast-Hosts verbunden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Inhalt</h2>
              <p>
                Die Quiz-Fragen basieren auf öffentlich verfügbaren Informationen und Memes
                aus der Podcast-Community.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Bildrechte</h2>
              <p>
                Alle verwendeten Bilder sind entweder lizenzfrei (Unsplash, Pexels) oder
                wurden mit Genehmigung verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Haftung</h2>
              <p>
                Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte
                externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">Kontakt</h2>
              <p>
                Bei Fragen, Beschwerden oder Anmerkungen kontaktiere uns bitte über die
                Webseite.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
