import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
import React, { useMemo } from 'react';
import CenterLoader from '../CenterLoader';
import TaskGroup from './TaskGroup';

const STUDY_TASKS = gql`
  query GetStudyTasks {
    studyTasks {
      id
      startPoint
      endPoint
      dueDate
      studyPlan {
        id
        title
      }
    }
  }
`;

export default function Tasks() {
  const { loading, error, data } = useQuery(STUDY_TASKS);

  const groupedTasks = useMemo(
    () => data && _.groupBy(data.studyTasks, 'dueDate'),
    [data]
  );

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {_.map(groupedTasks, (tasks, dueDate) => (
        <TaskGroup dueDate={dueDate} tasks={tasks} />
      ))}
    </div>
  );
}
