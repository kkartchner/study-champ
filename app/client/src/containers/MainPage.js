import React from 'react';
import { Card, CardAction, CardContent, CardHeader, H4 } from 'ui-neumorphism';
import BottomNav from '../components/BottomNav';

export default function MainPage({ title, children }) {
  return (
    <Card flat style={{ margin: 10 }}>
      <CardHeader>
        <H4 style={{ textAlign: 'center', width: '100%', paddingTop: 20 }}>
          {title}
        </H4>
      </CardHeader>
      <CardContent
        style={{ overflowY: 'auto', height: '77vh', marginTop: -10 }}
      >
        {children}
      </CardContent>
      <CardAction>
        <BottomNav />
      </CardAction>
    </Card>
  );
}
