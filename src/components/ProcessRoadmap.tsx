"use client";

import { motion } from "framer-motion";

const steps = [
  "Book your trial class",
  "Get a personalized plan",
  "Start weekly sessions",
  "Get feedback & grow",
];

export default function ProcessRoadmap() {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Process</h2>
      <div className="flex flex-col items-center space-y-12 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: false }}
            className="bg-gray-800 px-6 py-4 rounded-xl shadow w-full"
          >
            <span className="text-lg font-semibold">Step {index + 1}</span>
            <p className="text-xl mt-2">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
