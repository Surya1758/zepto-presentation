import React from 'react';
import { motion as motionHtml } from 'framer-motion';
import { ShoppingCart, TrendingUp } from 'lucide-react';

const TitleSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <motionHtml.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <motionHtml.div variants={itemVariants} className="title-badge">
        Case Study: Quick Commerce Disruption
      </motionHtml.div>

      <motionHtml.div variants={itemVariants} className="title-logo-container">
        <h1 className="zepto-logo-text">
          zepto<span>.</span>
        </h1>
        <div className="zepto-logo-timer">10 Min</div>
      </motionHtml.div>

      <motionHtml.h2 variants={itemVariants} className="slide-subtitle" style={{ maxWidth: '800px', margin: '20px auto' }}>
        How two teenagers turned an <span className="highlight-magenta">"impossible" promise</span> into a multi-billion dollar empire.
      </motionHtml.h2>

      <motionHtml.p variants={itemVariants} className="slide-paragraph" style={{ maxWidth: '650px', fontSize: '1.35rem' }}>
        An inside look at Zepto's engineering-first operations, brilliant psychological positioning, and the logistics that changed consumer habits forever.
      </motionHtml.p>

      <motionHtml.div 
        variants={itemVariants} 
        style={{ display: 'flex', gap: '30px', marginTop: '40px' }}
      >
        <div className="glass-card" style={{ padding: '15px 25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShoppingCart size={20} className="highlight-magenta" />
          <span style={{ fontWeight: 600 }}>Ultra-Fast Commerce</span>
        </div>
        <div className="glass-card" style={{ padding: '15px 25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrendingUp size={20} className="highlight-yellow" />
          <span style={{ fontWeight: 600 }}>Exponential Growth</span>
        </div>
      </motionHtml.div>
    </motionHtml.div>
  );
};

export default TitleSlide;
