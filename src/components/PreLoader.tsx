import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

const PreLoader: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (preloaderRef.current) {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power3.inOut',
            onComplete: onLoadingComplete
          });
        }
      }
    });

    tl.to(counterRef.current, {
      innerText: 100,
      duration: 3,
      snap: { innerText: 1 },
      ease: 'power1.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [onLoadingComplete]);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <Logo />
      <div ref={counterRef} className="absolute bottom-4 right-4 text-white text-9xl">
        0
      </div>
    </div>
  );
};

export default PreLoader;

