import { Grid } from '@material-ui/core';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  H4,
  IconButton
} from 'ui-neumorphism';
import BottomNav from '../components/BottomNav';

export default function MainPage({ title, action, children }) {
  return (
    <Card flat style={{ margin: 10, paddingTop: 2 }}>
      <CardHeader>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item>
            <H4>{title}</H4>
          </Grid>
          {action && <Grid item>{action}</Grid>}
        </Grid>
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
