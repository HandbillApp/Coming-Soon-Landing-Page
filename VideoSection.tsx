import React from 'react';
import { motion } from 'motion/react';
import { Youtube } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Handbill <span className="text-red-600">Song</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Watch our Handbill song on Youtube which creatively captures the vision behind the platform and what the concept "Handbill" is all about.
          </p>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/2_sEfXOZ4f8?si=sttick=0&start=25"
            title="Handbill Song for Handbill App"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          <div className="absolute inset-0 pointer-events-none border-2 border-red-600/20 rounded-3xl group-hover:border-red-600/40 transition-colors duration-500"></div>
        </div>

        <div className="mt-8 flex justify-center">
          <a 
            href="https://www.youtube.com/@HandbillApp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors font-semibold uppercase tracking-widest text-xs"
          >
            <Youtube className="w-5 h-5" />
            Subscribe to our Channel
          </a>
        </div>
      </motion.div>
    </section>
  );
};
