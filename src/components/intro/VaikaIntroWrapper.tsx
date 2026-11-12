'use client';

// src/components/intro/VaikaIntroWrapper.tsx
// Next.js React Bridge for the VaikaIntro Orchestrator

import React, { useEffect } from 'react';
import '../../styles/intro.css';
import '../../styles/wordmark.css';

export function VaikaIntroWrapper() {
  useEffect(() => {
    let introInstance: { dispose?: () => void } | null = null;
    let active = true;

    import('./VaikaIntro').then(({ VaikaIntro }) => {
      if (!active) return;
      introInstance = new VaikaIntro({
        onStart: () => {
          document.body.style.overflow = 'hidden';
        },
        onComplete: () => {
          document.body.style.overflow = '';
        }
      });
    });

    return () => {
      active = false;
      document.body.style.overflow = '';
      if (introInstance && typeof introInstance.dispose === 'function') {
        introInstance.dispose();
      }
    };
  }, []);

  return (
    <div
      id="vaika-intro-root"
      aria-hidden="true"
      role="presentation"
    />
  );
}

