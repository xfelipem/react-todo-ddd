import React, { FC } from 'react';
import './ToDoItem.css';
import Task from '../domain/models/task/Task';

interface ToDoProps {
  item: Task;
  deleteItem: Function;
}

const ToDoItem: FC<ToDoProps> = props => {
  const { item, deleteItem } = props;

  return (
    <div className="ToDoItem">
      <p className="ToDoItem-Text">{item.text}</p>
      <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
        -
      </button>
    </div>
  );
};

export default ToDoItem;
