import { Grid } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { Body1, ToggleButton } from 'ui-neumorphism';
import { NTextField, NToggleButtonGroup } from '../FormComponent';
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
      <Modal
        title={`${action} Plan`}
        openButton={children}
        onSubmit={onSubmit}
        formProps={{
          initialValues: {
            ...plan,
            studyDays:
              plan &&
              _.chain(plan.studyDaysString)
                .split('')
                .map((num, index) => (num === '1' ? index + 1 : null))
                .compact()
                .value()
          }
        }}
      >
        <Grid container justify='center'>
          <Grid item>
            <NTextField name='title' label='Title' />
          </Grid>
          <Grid item>
            <NTextField name='points' label='Points' type='number' />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center', marginBottom: 10 }}>
            <Body1>Study Days</Body1>
            <NToggleButtonGroup name='studyDays' multiple>
              {'S M T W R F S'.split(' ').map((day, index) => (
                <ToggleButton key={`toggle-btn-${index}`} value={index + 1}>
                  {day}
                </ToggleButton>
              ))}
            </NToggleButtonGroup>
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
