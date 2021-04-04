import React from 'react';
import { Card, CardContent, ListItem } from 'ui-neumorphism';

export default function Task({ task }) {
  return (
    <Card>
      <CardContent>
        <ListItem title={`${task.start_point} - ${task.end_point}`} />
      </CardContent>
    </Card>
  );
}
