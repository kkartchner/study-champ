import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';
import { ListItemGroup, ProgressCircular } from 'ui-neumorphism';
import { gql, useQuery } from '@apollo/client';
import { mdiTranslate } from '@mdi/js';
import CenterLoader from '../CenterLoader';

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
  const [tasks, setTasks] = useState([]);

  const { loading, error, data } = useQuery(STUDY_TASKS);

  if (loading) return <CenterLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.studyTasks.map(task => (
        <Task key={`task-${task.id}`} {...task} />
      ))}
    </div>
  );
}
