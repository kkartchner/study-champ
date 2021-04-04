import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core';
import React from 'react';
import { Card, CardContent, Checkbox, Chip } from 'ui-neumorphism';

export default function Task({
  id,
  startPoint,
  endPoint,
  dueDate,
  studyPlan: { id: studyPlanId, title }
}) {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText>
        {`${title} p. ${startPoint} - ${endPoint} (due: ${dueDate})`}
      </ListItemText>
    </ListItem>
  );
}
