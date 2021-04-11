import { Grid } from '@material-ui/core';
import React from 'react';
import {
  Body1,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism';
import Modal from '../Modal';

export default function PlanForm({
  plan,
  children,
  action = plan ? 'Edit' : 'Add',
  ...rest
}) {
  return (
    <>
      <Modal title={`${action} Plan`} openButton={children}>
        <Grid container justify='center'>
          <Grid item>
            <TextField name='title' label='Title' />
          </Grid>
          <Grid item>
            <TextField name='points' label='Number of Points' type='number' />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginBottom: 10 }}>
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
      </Modal>
    </>
  );
}
