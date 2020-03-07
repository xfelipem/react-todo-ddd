import './TaskItem.css';

import React, { FC } from 'react';

import { Task } from '../../core/modules/task/domain/model/Task';
import { useTaskContext } from './state/useTaskContext';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: FC<TaskItemProps> = props => {
  const { deleteTask } = useTaskContext();
  const { task } = props;

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{task.text}</p>
      <button className="ToDoItem-Delete" onClick={() => deleteTask(task)}>
        -
      </button>
    </div>
  );
};
