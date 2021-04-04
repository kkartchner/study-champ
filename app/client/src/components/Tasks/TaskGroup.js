import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  H6,
  ListItem
} from 'ui-neumorphism';
import dayjs from 'dayjs';
import { Box, List } from '@material-ui/core';
import Task from './Task';

export default function TaskGroup({ dueDate, tasks }) {
  const today = dayjs();
  const date = dayjs(dueDate);

  return (
    <Card>
      <CardHeader>
        <Box display='flex'>
          <Box flexGrow={1} style={{ fontWeight: 'bold' }}>
            <H6>
              {date.isSame(today, 'date') ? 'Today' : date.format('dddd')}
            </H6>
          </Box>
          <Box>
            <H6 secondary>{date.format('MM/DD/YY')}</H6>
          </Box>
        </Box>
        <Divider dense />
      </CardHeader>
      <CardContent>
        <List style={{ marginTop: -15 }}>
          {tasks.map(task => (
            <Task key={`task-${task.id}`} {...task} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
