import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

const MarketingSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="slide-subtitle" style={{ fontSize: '2.5rem' }}>
        The <span className="highlight-magenta">Friction-Free</span> Virality Loop
      </h2>
      <p className="slide-paragraph">
        In marketing psychology, removing friction creates instant gratification. Zepto shifted customers from planned weekly chores to spontaneous cravings.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="cart-comparison-grid"
      >
        <motion.div variants={itemVariants} className="cart-card glass-card traditional">
          <div className="cart-card-header">
            <ShoppingBag className="cart-card-icon" />
            <h3 className="cart-card-title">Traditional Weekly Cart</h3>
          </div>
          <ul className="cart-list">
            <li className="cart-list-item">
              <span className="cart-item-name">Aashirvaad Atta (Flour) 10kg</span>
              <span className="cart-item-meta">Planned</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Fortune Sunflower Oil 5L</span>
              <span className="cart-item-meta">Planned</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Surf Excel Detergent 3kg</span>
              <span className="cart-item-meta">Planned</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Potatoes & Onions 5kg</span>
              <span className="cart-item-meta">Planned</span>
            </li>
          </ul>
          <div className="cart-total-bar" style={{ color: 'var(--text-muted)' }}>
            <span>Frequency: Bi-weekly</span>
            <span>Margins: Low (8-12%)</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="cart-card glass-card zepto">
          <div className="cart-card-header">
            <Sparkles className="cart-card-icon" style={{ color: 'var(--zepto-yellow)' }} />
            <h3 className="cart-card-title" style={{ color: 'var(--zepto-yellow)' }}>Zepto Spontaneous Cart</h3>
          </div>
          <ul className="cart-list">
            <li className="cart-list-item">
              <span className="cart-item-name">Amul Ice Cream (1 Tub)</span>
              <span className="cart-item-meta">Midnight Snacking</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Fresh Coriander (1 Bunch)</span>
              <span className="cart-item-meta">Forgot for dinner</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Coca-Cola (2 Cans)</span>
              <span className="cart-item-meta">Sudden guests</span>
            </li>
            <li className="cart-list-item">
              <span className="cart-item-name">Red Bull (1 Can)</span>
              <span className="cart-item-meta">Late night work</span>
            </li>
          </ul>
          <div className="cart-total-bar" style={{ color: 'var(--zepto-yellow)' }}>
            <span>Frequency: 3-4x / Week</span>
            <span>Margins: High (25-35%)</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ marginTop: '25px', color: 'var(--text-muted)', maxWidth: '750px', fontSize: '1.05rem', lineHeight: '1.5' }}
      >
        🔄 **The Marketing Engine:** Delighting customers with sub-10 minute deliveries creates intense positive reinforcement. This drives organic word-of-mouth, slashing Customer Acquisition Cost (CAC) while driving up Lifetime Value (LTV).
      </motion.p>
    </div>
  );
};

export default MarketingSlide;
