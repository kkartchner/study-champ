import React from 'react';
import { Card, CardContent, ListItem } from 'ui-neumorphism';

export default function Task({
  id,
  startPoint,
  endPoint,
  dueDate,
  studyPlan: { id: studyPlanId, title }
}) {
  return (
    <Card>
      <CardContent>
        <ListItem title={`${title} p. ${startPoint} - ${endPoint}`} />
      </CardContent>
    </Card>
  );
}
