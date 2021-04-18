import { useMutation } from '@apollo/client';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import React from 'react';
import { Body1, ToggleButton } from 'ui-neumorphism';
import StudyPlanRequests from '../../graphql/study_plan_requests';
import { NTextField, NToggleButtonGroup } from '../FormComponent';
import Modal from '../Modal';

const formatStudyDays = studyDays => {
  if (typeof studyDays === 'string') {
    return _.chain(studyDays)
      .split('')
      .map((num, index) => (num === '1' ? index + 1 : null))
      .compact()
      .value();
  } else if (Array.isArray(studyDays)) {
    return _.times(7, i => (studyDays.includes(i + 1) ? 1 : 0)).join('');
  }
};

export default function PlanForm({
  plan,
  children,
  action = plan ? 'Edit' : 'Add',
  ...rest
}) {
  const [addStudyPlan, { loading, error, data }] = useMutation(
    StudyPlanRequests.CREATE
  );

  const onSubmit = values => {
    const formattedValues = {
      ...values,
      points: parseInt(values.points),
      studyDaysString: formatStudyDays(values.studyDays)
    };
    delete formattedValues.studyDays;

    addStudyPlan({ variables: formattedValues });
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
            studyDays: plan && formatStudyDays(plan.studyDaysString)
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
          <Grid item style={{ textAlign: 'center' }}>
            <label>
              Start Date
              <NTextField name='startDate' type='date' />
            </label>
          </Grid>
          <Grid item style={{ textAlign: 'center' }}>
            <label>
              End Date
              <NTextField name='endDate' type='date' />
            </label>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}
