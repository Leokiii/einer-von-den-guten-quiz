'use client';

import { Navigation, Footer } from '@/components/Navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-secondary to-dark text-white">
        {/* Epic Hero Section with Image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark opacity-70"></div>
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-10 right-10 w-32 h-32 bg-accent opacity-5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-10 left-10 w-40 h-40 bg-primary opacity-5 rounded-full blur-3xl"
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
            {/* Animated podcast image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-accent"
            >
              <img 
                src="/evdg-hero.jpg" 
                alt="Einer von den Guten - Hübi & Zeo" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl font-black mb-2 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-lg"
            >
              Einer von den Guten
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl text-accent font-bold mb-8 drop-shadow-lg"
            >
              ⚡ Quiz Arena ⚡
            </motion.p>
            
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl mx-auto mb-12 bg-white bg-opacity-10 rounded-2xl p-8 border-2 border-accent backdrop-blur-sm hover:bg-opacity-15 transition"
            >
              <p className="text-xl text-gray-100 mb-4 leading-relaxed font-semibold">
                Das inoffizielle Fan-Quiz über Memes, Zitate und kompletten Wahnsinn.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Willkommen in der Quiz Arena. Hier geht es <strong>nicht</strong> um Allgemeinwissen. Hier geht es um <strong>Running Gags</strong>, <strong>peinliche Storys</strong>, <strong>Community-Mythen</strong> und alles, was "Einer von den Guten" zu dem gemacht hat, was es ist.
              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-6"
            >
              <Link
                href="/quiz"
                className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-accent text-dark text-xl font-black rounded-xl hover:shadow-2xl transition-all transform hover:scale-110 shadow-lg"
              >
                🎮 QUIZ STARTEN 🎮
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-sm text-gray-300 italic"
            >
              Du musst erst antworten, bevor du siehst, ob du richtig lagst.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
          >
            ↓ Scrolle runter ↓
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="bg-dark py-20 border-t border-white border-opacity-10">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
            >
              📋 So funktioniert das Quiz
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '📋', title: '50 Fragen', desc: 'Jede Frage hat 2 oder 3 Antworten' },
                { icon: '🎯', title: 'Du wählst', desc: 'Eine Antwort — erst danach siehst du Feedback' },
                { icon: '✓', title: 'Richtig/Falsch', desc: 'Mit Erklärung und humorvollem Kommentar' },
                { icon: '🏆', title: 'Dein Ergebnis', desc: 'Score, Titel & Übersicht aller Antworten' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary/50 opacity-20 hover:opacity-30 rounded-xl p-6 border border-accent border-opacity-50 backdrop-blur-sm hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-accent">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Meme Resistance Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent rounded-xl p-8 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-black mb-2">
                ⚠️ Meme-Resistenz-Test ⚠️
              </p>
              <p className="text-lg italic text-gray-100">
                Dieses Quiz testet <strong>kein Wissen</strong>,
                sondern <strong>deine Meme-Resistenz</strong>.
              </p>
              <p className="text-sm text-gray-300 mt-4">
                Je länger du Fan bist, desto gefährlicher wird es.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Message for Hosts */}
        <section className="py-20 border-t border-white border-opacity-10">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary/30 to-accent/30 border-2 border-primary rounded-2xl p-10 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-black mb-8 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                🎙️ Falls ihr das hier selbst spielt...
              </h3>
              <div className="space-y-5 text-gray-100 text-center text-lg">
                <p><strong className="text-accent text-xl">Ja —</strong> das ist ein Fan-Projekt.</p>
                <p><strong className="text-primary text-xl">Nein —</strong> das ist nicht offiziell.</p>
                <p className="pt-4 text-xl font-semibold">
                  Aber: Jede Frage basiert auf Dingen, die <span className="text-accent">ihr selbst gesagt</span>,
                  <span className="text-primary"> die Community gememt</span> oder
                  <span className="text-accent"> das Internet nie wieder vergessen hat</span>.
                </p>
                <div className="pt-6 bg-black/30 rounded-lg p-6 border border-white border-opacity-10">
                  <p className="text-gray-300 mb-3">
                    Ihr müsst nichts erklären. Ihr müsst nichts verteidigen.
                  </p>
                  <p className="text-accent text-xl italic font-bold drop-shadow-lg">
                    Ihr müsst nur raten, lachen und akzeptieren, dass das Internet ein Gedächtnis hat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Bereit zum Wahnsinn?
            </h2>
            <p className="text-gray-300 mb-8">Teste jetzt, wie gut du den Podcast wirklich kennst!</p>
            <Link
              href="/quiz"
              className="inline-block px-10 py-5 bg-gradient-to-r from-primary to-accent text-dark text-lg font-black rounded-xl hover:shadow-2xl transition-all transform hover:scale-110 shadow-lg"
            >
              🚀 JETZT ZUM QUIZ 🚀
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
