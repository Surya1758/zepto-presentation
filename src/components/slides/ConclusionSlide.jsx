import React from 'react';
import { motion } from 'framer-motion';

const ConclusionSlide = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const rowVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="slide-subtitle" style={{ fontSize: '2.5rem' }}>
        Key Marketing Takeaways
      </h2>
      <p className="slide-paragraph">
        Zepto's success teaches us three core lessons about modern brand positioning and growth loops.
      </p>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="conclusion-grid"
      >
        <motion.div variants={rowVariants} className="conclusion-row glass-card">
          <div className="conclusion-number">1</div>
          <div className="conclusion-text">
            Category Design Wins
            <span>To beat entrenched incumbents, don't play their game. Create a new category. Zepto didn't sell commodities; they sold Time.</span>
          </div>
        </motion.div>

        <motion.div variants={rowVariants} className="conclusion-row glass-card">
          <div className="conclusion-number">2</div>
          <div className="conclusion-text">
            Operations is Brand
            <span>A bold claim is only as powerful as the execution truth. Aligning operations and marketing builds massive, unbreakable customer trust.</span>
          </div>
        </motion.div>

        <motion.div variants={rowVariants} className="conclusion-row glass-card">
          <div className="conclusion-number">3</div>
          <div className="conclusion-text">
            Frictionless is Viral
            <span>Reducing friction from hours to minutes triggers dopamine hits. This drives organic word-of-mouth, dramatically lowering CAC while maximizing LTV.</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;
