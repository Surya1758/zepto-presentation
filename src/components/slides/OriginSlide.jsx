import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Target, Lightbulb } from 'lucide-react';

const OriginSlide = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        delay: customDelay,
      },
    }),
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="slide-subtitle" style={{ fontSize: '2.5rem' }}>
        Category Design vs. <span className="highlight-magenta">The Positioning Trap</span>
      </h2>
      <p className="slide-paragraph">
        In marketing, trying to be "better" is a trap. To dominate a crowded market, you must create a new category.
      </p>

      <div className="founders-grid">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="founder-card glass-card"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <h3 className="founder-name">Vague Superiority</h3>
            <AlertTriangle size={24} className="highlight-magenta" />
          </div>
          <div className="founder-title" style={{ color: 'var(--text-muted)' }}>The Incumbent Giants</div>
          <p className="founder-desc">
            Swiggy Instamart and Blinkit promised **"Fast Delivery"**. In marketing, "fast" is a vague, commoditized claim. It lacks clarity, leaving users with delivery times ranging from 30 minutes to 2 hours.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="founder-card glass-card vohra"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <h3 className="founder-name">Extreme Clarity</h3>
            <Target size={24} className="highlight-yellow" />
          </div>
          <div className="founder-title">Category Creation</div>
          <p className="founder-desc">
            Zepto carved out a hyper-specific, ownable metric: **"10 Minutes. Period."** 
            By defining a clear boundaries-driven category, they anchored their brand name directly to the concept of **Time**.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ marginTop: '35px', display: 'flex', alignItems: 'center', gap: '10px', color: '#ff688e' }}
      >
        <Lightbulb size={18} />
        <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>
          Zepto's campaign was bold because it was simple. They did not sell groceries—they sold time.
        </span>
      </motion.div>
    </div>
  );
};

export default OriginSlide;
