import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Award } from 'lucide-react';

const HookSlide = () => {
  const [seconds, setSeconds] = useState(600); // 10 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getMilestone = (time) => {
    if (time === 600) return "Ready to start the 10-minute clock...";
    if (time > 570) return "🚀 Order received. Route algorithm selects dark store.";
    if (time > 540) return "🧺 Packer collects items (Target packing time: <60 seconds).";
    if (time > 510) return "📦 Order sealed and handed to the waiting delivery rider.";
    if (time > 300) return "🏍️ Rider traversing a short, safe 1.5km local radius.";
    if (time > 60) return "🏢 Rider arrives, enters building, and heads up the elevator.";
    if (time > 0) return "🚪 Ringing bell. Knock knock! Order is at the door.";
    return "🏆 Delivered! Total time taken: Under 10 minutes.";
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="slide-subtitle" style={{ fontSize: '2.5rem' }}>
        What can you actually do in <span className="highlight-yellow">10 Minutes</span>?
      </h2>
      <p className="slide-paragraph" style={{ marginBottom: '30px' }}>
        In most countries, 10 minutes is barely enough to brew coffee. In India, it's enough to get fresh groceries at your doorstep.
      </p>

      <div className="timer-container">
        <div className={`big-stopwatch ${isRunning ? 'active' : ''}`}>
          {formatTime(seconds)}
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            className={`timer-button ${isRunning ? 'running' : ''}`}
            onClick={() => setIsRunning(!isRunning)}
          >
            <Play size={18} fill={!isRunning ? 'white' : 'transparent'} />
            {isRunning ? 'Pause Timer' : 'Start Countdown'}
          </button>
          
          <button
            className="timer-button"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', boxShadow: 'none' }}
            onClick={resetTimer}
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>

      <div className="milestone-container glass-card" style={{ padding: '20px 40px' }}>
        <motion.div
          key={seconds}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="milestone-text"
        >
          {getMilestone(seconds)}
        </motion.div>
      </div>
    </div>
  );
};

export default HookSlide;
