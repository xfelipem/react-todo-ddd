import React, { FC } from 'react';

import { Task } from '../../core/modules/task/domain/Task';
import { useTaskContext } from './state/useTaskContext';
import { TaskItem } from './TaskItem';

export const TaskList: FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="ToDo-Content">
      {tasks.map((task: Task, index: number) => {
        return <TaskItem key={index} task={task} />;
      })}
    </div>
  );
};
