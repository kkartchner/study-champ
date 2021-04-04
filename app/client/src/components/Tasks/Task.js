import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import React from 'react';
import { Checkbox } from 'ui-neumorphism';

export default function Task({
  id,
  startPoint,
  endPoint,
  dueDate,
  studyPlan: { id: studyPlanId, title }
}) {
  return (
    <ListItem>
      <ListItemText>
        {`${title} p. ${startPoint} - ${endPoint} (${
          endPoint - startPoint + 1
        } pages)`}
      </ListItemText>
      <ListItemSecondaryAction>
        <Checkbox />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
