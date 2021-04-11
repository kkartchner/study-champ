import { Grid } from '@material-ui/core';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import {
  Body1,
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  Dialog,
  H6,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism';

export default function PlanForm({ plan, ...rest }) {
  const [open, setOpen] = useState(false);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton rounded text={false} onClick={() => setOpen(true)}>
        <Icon path={mdiPlus} size={1} />
      </IconButton>
      <Dialog maxWidth={500} width='90%' visible={open} onClose={onCancel}>
        <Card>
          <CardHeader title='Add Plan' />
          <CardContent>
            <Grid container justify='center'>
              <Grid item>
                <TextField name='title' label='Title' />
              </Grid>
              <Grid item>
                <TextField
                  name='points'
                  label='Number of Points'
                  type='number'
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ textAlign: 'center', marginBottom: 10 }}
              >
                <Body1>Study Days</Body1>
                <ToggleButtonGroup multiple>
                  {'S M T W R F S'.split(' ').map((day, index) => (
                    <ToggleButton value={index + 1}>{day}</ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </Grid>
              <Grid item>
                <TextField name='startDate' label='Start Date' />
              </Grid>
              <Grid item>
                <TextField name='endDate' label='End Date' />
              </Grid>
            </Grid>
          </CardContent>
          <CardAction>
            <Grid container justify='flex-end' spacing={1}>
              <Grid item>
                <Button onClick={onCancel}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button>Submit</Button>
              </Grid>
            </Grid>
          </CardAction>
        </Card>
      </Dialog>
    </>
  );
}
