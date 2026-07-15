import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import SlideWrapper from './components/SlideWrapper';
import SlideController from './components/SlideController';

import TitleSlide from './components/slides/TitleSlide';
import HookSlide from './components/slides/HookSlide';
import OriginSlide from './components/slides/OriginSlide';
import OperationsSlide from './components/slides/OperationsSlide';
import MarketingSlide from './components/slides/MarketingSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    <TitleSlide />,
    <HookSlide />,
    <OriginSlide />,
    <OperationsSlide />,
    <MarketingSlide />,
    <ConclusionSlide />,
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevents spacebar scrolling the page
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Handle Fullscreen state change (e.g. if user presses Esc key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Background Glowing Ambience */}
      <div className="bg-glow-container">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
      </div>

      {/* Presentation Shell */}
      <div className="presentation-container">
        {/* Main Content Area */}
        <main style={{ flexGrow: 1, position: 'relative', width: '100%' }}>
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <SlideWrapper key={currentSlide} direction={direction}>
              {slides[currentSlide]}
            </SlideWrapper>
          </AnimatePresence>
        </main>

        {/* Navigation Bar */}
        <SlideController
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      </div>
    </>
  );
}

export default App;
