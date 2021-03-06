import React from 'react';
import { Logo as LogoWrapper } from './styled/logo';

export const Logo = () => (
    <svg
      width="115"
      height="30"
      fill="none"
      viewBox="0 0 115 30"
    >
      <circle
        cx="15"
        cy="15"
        r="15"
        fill="black"
        fillOpacity="0.2"
      />
      <circle
        cx="70"
        cy="15"
        r="15"
        fill="black"
        fillOpacity="0.2"
      />
      <rect
        x="35"
        width="15"
        height="30"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M100 0H115L100 30H85L100 0Z"
        fill="black"
        fillOpacity="0.2"
      />
    </svg>
);
