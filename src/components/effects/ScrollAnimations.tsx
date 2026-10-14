import { useEffect } from 'react';

interface ScrollAnimationsProps {
  selector?: string;
}

const ScrollAnimations = ({ selector = '[data-scroll]' }: ScrollAnimationsProps) => {
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    // Import the library dynamically to avoid SSR issues
    const initScrollAnimations = async () => {
      try {
        // Add the scroll-out script to the document
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/scroll-out/dist/scroll-out.min.js';
        script.async = true;
        script.onload = () => {
          // @ts-ignore - ScrollOut is loaded from CDN
          if (window.ScrollOut) {
            // @ts-ignore
            window.ScrollOut({
              targets: selector,
              once: false,
              threshold: 0.2,
              onShown: (element: HTMLElement) => {
                element.classList.add('is-visible');
              },
              onHidden: (element: HTMLElement) => {
                element.classList.remove('is-visible');
              }
            });
          }
        };
        document.body.appendChild(script);

        // Add the necessary styles
        const style = document.createElement('style');
        style.textContent = `
          [data-scroll] {
            transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
            opacity: 0;
            transform: translateY(30px) perspective(1000px) rotateX(5deg);
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
          
          [data-scroll].is-visible {
            opacity: 1;
            transform: translateY(0) perspective(1000px) rotateX(0);
          }
          
          [data-scroll][data-scroll-delay] {
            transition-delay: var(--delay);
          }
          
          [data-scroll][data-scroll-speed] {
            transition-duration: var(--speed);
          }
          
          [data-scroll][data-scroll-direction="left"] {
            transform: translateX(-30px) perspective(1000px) rotateY(-5deg);
          }
          
          [data-scroll][data-scroll-direction="left"].is-visible {
            transform: translateX(0) perspective(1000px) rotateY(0);
          }
          
          [data-scroll][data-scroll-direction="right"] {
            transform: translateX(30px) perspective(1000px) rotateY(5deg);
          }
          
          [data-scroll][data-scroll-direction="right"].is-visible {
            transform: translateX(0) perspective(1000px) rotateY(0);
          }
          
          [data-scroll][data-scroll-scale] {
            transform: scale(0.9) perspective(1000px);
          }
          
          [data-scroll][data-scroll-scale].is-visible {
            transform: scale(1) perspective(1000px);
          }
          
          [data-scroll][data-scroll-rotate] {
            transform: rotate(5deg) perspective(1000px);
          }
          
          [data-scroll][data-scroll-rotate].is-visible {
            transform: rotate(0) perspective(1000px);
          }
        `;
        document.head.appendChild(style);

        return () => {
          document.body.removeChild(script);
          document.head.removeChild(style);
        };
      } catch (error) {
        console.error('Error initializing scroll animations:', error);
      }
    };

    initScrollAnimations();
  }, [selector]);

  return null; // This is a utility component with no UI
};

export default ScrollAnimations;