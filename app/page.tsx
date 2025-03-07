"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import BioPage from "./components/BioPage";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"landing" | "bio">("landing");

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-white text-gray-900">
      <AnimatePresence mode="wait">
        {activeSection === "landing" && (
          <motion.div
            key="landing"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <LandingPage />
            <button
              onClick={() => setActiveSection("bio")}
              className="absolute bottom-10 flex flex-1 max-w-fit max-h-fit rounded-md p-2 outline-1 items-center transition-all duration-300 text-xs bg-white hover:outline-white hover:text-white hover:bg-gray-900"
            >
              Next Section
            </button>
          </motion.div>
        )}

        {activeSection === "bio" && (
          <motion.div
            key="bio"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <BioPage />
            <button
              onClick={() => setActiveSection("landing")}
              className="absolute bottom-10 px-6 py-2 bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
