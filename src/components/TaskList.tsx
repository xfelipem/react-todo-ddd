import React, { FC } from 'react';
import Task from '../domain/models/task/Task';
import ToDoItem from './ToDoItem';

interface TaskList {
  tasks: Task[];
  deleteItem: Function;
}

const TaskList: FC<TaskList> = ({ tasks, deleteItem }) => {
  return (
    <div className="ToDo-Content">
      {tasks.map((task: Task, index: number) => {
        return <ToDoItem key={index} item={task} deleteItem={deleteItem} />;
      })}
    </div>
  );
};

export default TaskList;
