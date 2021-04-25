import { useMutation } from '@apollo/client';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import { mdiCheck } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { IconButton } from 'ui-neumorphism';
import StudyTaskRequests from '../../graphql/study_task_requests';
import CenterLoader from '../CenterLoader';

export default function Task({
  id,
  startPoint,
  endPoint,
  dueDate,
  studyPlan: { id: studyPlanId, title },
  isComplete,
  ...rest
}) {
  const [updateStudyTask, { loading, error }] = useMutation(
    StudyTaskRequests.UPDATE
  );
  const toggleIsComplete = e => {
    e.preventDefault();
    updateStudyTask({ variables: { id, isComplete: !isComplete } });
  };
  return (
    <>
      <ListItem>
        <ListItemText
          style={{ textDecoration: isComplete ? 'line-through' : '' }}
        >
          {`${title} p. ${startPoint} - ${endPoint} (${
            endPoint - startPoint + 1
          } pages)`}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            className='ma-12'
            size='small'
            color='var(--primary)'
            text={false}
            onClick={toggleIsComplete}
          >
            <Icon path={isComplete ? mdiCheck : undefined} size={1} />
          </IconButton>
          {loading && <CenterLoader />}
          {error && <p>Error :(</p>}
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}
