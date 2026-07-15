import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Store, Package, Bike, Home } from 'lucide-react';

const OperationsSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isSimulating) {
      timer = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= 3) {
            setIsSimulating(false);
            clearInterval(timer);
            return 3;
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const startSimulation = () => {
    setActiveStep(0);
    setIsSimulating(true);
  };

  const steps = [
    {
      title: "Order Placed",
      icon: <Store size={18} />,
      desc: "Algorithm assigns the order to the closest Dark Store (always under 2km). Real-time inventory matching ensures items are 100% in stock.",
      time: "0:00"
    },
    {
      title: "60-Sec Packing",
      icon: <Package size={18} />,
      desc: "Dark stores are closed to the public. Items are arranged strictly by demand frequency. Packers use tablets with optimal route mapping to pack items in under 60 seconds.",
      time: "0:50"
    },
    {
      title: "Safe Dispatch",
      icon: <Bike size={18} />,
      desc: "Rider is assigned automatically via geo-fencing. They pick up the bag and travel a safe, short route. No speeding required, as the average delivery radius is only 1.8 kilometers.",
      time: "6:00"
    },
    {
      title: "10-Min Brand Truth",
      icon: <Home size={18} />,
      desc: "Customer gets groceries in under 10 minutes. The operational success validates the bold brand promise, generating instant user trust and virality.",
      time: "9:20"
    }
  ];

  // Calculate rider position percentage based on activeStep
  const riderLeft = activeStep === 0 ? 5 : activeStep === 1 ? 33 : activeStep === 2 ? 66 : 95;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 className="slide-subtitle" style={{ fontSize: '2.5rem' }}>
        Operations is the Brand: <span className="highlight-yellow">Aligned Logistics</span>
      </h2>
      <p className="slide-paragraph">
        Zepto's primary marketing asset is operational truth. They deliver on the 10-minute promise by aligning micro-warehouses and software, rather than forcing riders to speed.
      </p>

      <div className="operations-container">
        <div className="simulation-track glass-card">
          <div className="track-line"></div>
          <div
            className="track-progress-line"
            style={{ width: `${(activeStep / 3) * 85}%` }}
          ></div>
          
          <motion.div
            className="rider-avatar"
            animate={{ left: `${riderLeft}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            style={{ position: 'absolute', transform: 'translateX(-50%)' }}
          >
            <Bike size={32} />
          </motion.div>

          {steps.map((step, idx) => (
            <div key={idx} className="simulation-step">
              <div
                className={`step-node ${
                  idx === activeStep
                    ? 'active'
                    : idx < activeStep
                    ? 'completed'
                    : ''
                }`}
              >
                {step.icon}
              </div>
              <div className={`step-label ${idx === activeStep ? 'active' : ''}`}>
                {step.title}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                {step.time}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', width: '100%', alignItems: 'stretch' }}>
          <div className="glass-card sim-details-card" style={{ flex: 1 }}>
            <h3 className="sim-details-title">{steps[activeStep].title}</h3>
            <p className="sim-details-desc">{steps[activeStep].desc}</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <button
              className={`timer-button ${isSimulating ? 'running' : ''}`}
              onClick={startSimulation}
              disabled={isSimulating}
              style={{ width: '180px', height: '55px', margin: 0, justifyContent: 'center' }}
            >
              <Play size={18} fill="white" />
              {isSimulating ? 'Simulating...' : 'Simulate Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSlide;
