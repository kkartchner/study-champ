import { useQuery } from '@apollo/client';
import _ from 'lodash';
import React, { useMemo } from 'react';
import { Card } from 'ui-neumorphism';
import StudyTaskRequests from '../../graphql/study_task_requests';
import CenterLoader from '../CenterLoader';
import TaskGroup from './TaskGroup';

export default function TasksView() {
  const { loading, error, data } = useQuery(StudyTaskRequests.GET_ALL, {
    fetchPolicy: 'network-only'
  });

  const groupedTasks = useMemo(
    () => data && _.groupBy(data.studyTasks, 'dueDate'),
    [data]
  );

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {_.map(groupedTasks, (tasks, dueDate) => (
        <TaskGroup
          key={`taskgroup-${dueDate}`}
          dueDate={dueDate}
          tasks={tasks}
        />
      ))}
    </>
  );
}
