import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';
import { ListItemGroup } from 'ui-neumorphism';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/study_tasks').then(res => {
      const {
        data: { status, message, data: tasks }
      } = res;
      console.log(`${status}: ${message}`);
      setTasks(tasks);
    });
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <Task key={`task-${task.id}`} task={task} />
      ))}
    </div>
  );
}
