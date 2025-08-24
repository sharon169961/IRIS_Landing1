"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function joinWaitlist(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setMessage("You're on the list. See you soon!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ThreeBackground />
      <Header />

      <section className="relative w-full max-w-6xl mx-auto px-6 pt-10 pb-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            IRIS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-gray-300"
        >
          Minimal. Futuristic. Powerful. IRIS is your gateway to next‑gen technology — built with performance, privacy, and a vision for tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex gap-4"
        >
          <a href="#join" className="px-6 py-3 rounded-full bg-gradient-to-r from-irisPurple to-irisIndigo shadow-glow hover:scale-105 transition-transform">
            Join the Waitlist
          </a>
          <a href="#features" className="px-6 py-3 rounded-full glass hover:scale-105 transition-transform">
            Explore Features
          </a>
        </motion.div>
      </section>

      <section id="features" className="relative w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="⚡ Fast" icon="⚡">
            Lightning-speed performance with a lean, modern stack.
          </FeatureCard>
          <FeatureCard title="🔒 Secure" icon="🔒">
            Privacy-first design and robust security best practices.
          </FeatureCard>
          <FeatureCard title="🌌 Futuristic" icon="🌌">
            Dark violet aesthetic, subtle glass, and smooth motion.
          </FeatureCard>
        </div>
      </section>

      <section id="about" className="relative w-full max-w-5xl mx-auto px-6 pb-24">
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-violet-300">About IRIS</h2>
          <p className="text-gray-300">
            IRIS is a platform born from the belief that technology should be calm, minimal, and empowering. 
            We craft experiences that feel like the future—without the noise.
          </p>
        </div>
      </section>

      <section id="join" className="relative w-full max-w-md mx-auto px-6 pb-24">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-violet-300 mb-2">Join the Waitlist</h3>
          <p className="text-gray-300 mb-4">Be the first to know when IRIS launches.</p>
          <form onSubmit={joinWaitlist} className="flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none focus:border-violet-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-irisPurple to-irisIndigo shadow-glow disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join"}
            </button>
          </form>
          {status !== "idle" && (
            <p className={`mt-3 text-sm ${status === "success" ? "text-green-300" : status === "error" ? "text-red-300" : "text-gray-300"}`}>
              {message}
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
