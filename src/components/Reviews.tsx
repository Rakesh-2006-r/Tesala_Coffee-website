"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "The only thing faster than a Model S is my morning routine now.",
      author: "Alex H.",
      role: "Tech Entrepreneur"
    },
    {
      text: "It's not just a coffee maker. It's a precision engineering masterpiece sitting on my counter.",
      author: "Sarah J.",
      role: "Lead Designer"
    },
    {
      text: "Autopilot brewing changed my life. Waking up to the smell of perfectly extracted coffee is unmatched.",
      author: "Marcus T.",
      role: "Software Engineer"
    }
  ];

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-white fill-white" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 font-light italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold border border-neutral-700">
                  {review.author[0]}
                </div>
                <div>
                  <div className="text-white font-medium">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
