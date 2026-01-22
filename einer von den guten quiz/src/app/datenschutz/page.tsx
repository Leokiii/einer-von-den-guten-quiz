'use client';

import { Navigation, Footer } from '@/components/Navigation';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Verantwortlicher</h2>
              <p>
                Diese Quiz-Webseite ist ein Fan-Projekt und nicht offiziell mit dem Podcast
                "Einer von den Guten" verbunden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Datenerfassung</h2>
              <p>
                Wir erfassen folgende Daten:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>E-Mail-Adresse (bei Registrierung)</li>
                <li>Quiz-Ergebnisse und Antworten</li>
                <li>Authentifizierungsdaten (über Supabase)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Datenschutz</h2>
              <p>
                Deine Daten werden verschlüsselt übertragen und sicher gespeichert. Wir geben
                deine Daten nicht an Dritte weiter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Deine Rechte</h2>
              <p>
                Du hast das Recht, dein Konto und alle Daten zu löschen. Kontaktiere uns für
                mehr Informationen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">5. Cookies</h2>
              <p>
                Diese Website verwendet optionale Analytics-Cookies. Du kannst deine
                Cookie-Einstellungen jederzeit ändern.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
