import React from 'react';
import { H4 } from 'ui-neumorphism';

export default function Title({ title }) {
  return (
    <H4 style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>
      {title}
    </H4>
  );
}
