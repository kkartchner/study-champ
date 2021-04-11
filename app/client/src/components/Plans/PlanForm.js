import { Grid } from '@material-ui/core';
import React from 'react';
import { Field } from 'react-final-form';
import {
  Body1,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from 'ui-neumorphism';
import { NTextField } from '../FormComponent';
import Modal from '../Modal';

export default function PlanForm({
  plan,
  children,
  action = plan ? 'Edit' : 'Add',
  ...rest
}) {
  const onSubmit = values => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Modal title={`${action} Plan`} openButton={children} onSubmit={onSubmit}>
        <Grid container justify='center'>
          <Grid item>
            <NTextField name='title' label='Title' />
          </Grid>
          <Grid item>
            <NTextField name='points' label='Points' type='number' />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginBottom: 10 }}>
            <Body1>Study Days</Body1>
            <ToggleButtonGroup multiple>
              {'S M T W R F S'.split(' ').map((day, index) => (
                <ToggleButton key={`toggle-btn-${index}`} value={index + 1}>
                  {day}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item>
            <NTextField name='startDate' label='Start Date' />
          </Grid>
          <Grid item>
            <NTextField name='endDate' label='End Date' />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
