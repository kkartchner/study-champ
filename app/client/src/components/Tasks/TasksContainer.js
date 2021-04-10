import { useQuery } from '@apollo/client';
import _ from 'lodash';
import React, { useMemo } from 'react';
import StudyTaskRequests from '../../graphql/study_task_requests';
import CenterLoader from '../CenterLoader';
import TaskGroup from './TaskGroup';

export default function TasksContainer() {
  const { loading, error, data } = useQuery(StudyTaskRequests.GET_ALL);

  const groupedTasks = useMemo(
    () => data && _.groupBy(data.studyTasks, 'dueDate'),
    [data]
  );

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {_.map(groupedTasks, (tasks, dueDate) => (
        <TaskGroup
          key={`taskgroup-${dueDate}`}
          dueDate={dueDate}
          tasks={tasks}
        />
      ))}
    </div>
  );
}
