import React from 'react';
import { ProgressCircular } from 'ui-neumorphism';

export default function CenterLoader() {
  return (
    <ProgressCircular
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      indeterminate
      size={64}
      color='var(--primary)'
    />
  );
}
