import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Keyboard } from 'lucide-react';

const SlideController = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="footer-controls-container">
      <div className="slide-counter-badge">
        Slide {currentSlide + 1} of {totalSlides}
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="slide-controls-buttons">
        <div className="keyboard-shortcut-hint" style={{ marginRight: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Keyboard size={16} />
          <span>Arrows / Space</span>
        </div>
        
        <button
          className="control-btn"
          onClick={onPrev}
          disabled={currentSlide === 0}
          title="Previous Slide (Left Arrow)"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="control-btn"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          title="Next Slide (Right Arrow / Space)"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        <button
          className="control-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          style={{ marginLeft: '12px' }}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>
    </div>
  );
};

export default SlideController;
