import React, { FC } from 'react';
import useTaskCreation from './hooks/useTaskCreation';

interface CreateTaskProps {
  createTask: Function;
}

const CreateTask: FC<CreateTaskProps> = ({ createTask }) => {
  const { text, createTaskItem, handleKeyPress, handleInput } = useTaskCreation(
    createTask
  );

  return (
    <div className="ToDoInput">
      <input
        type="text"
        value={text}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <button className="ToDo-Add" onClick={createTaskItem}>
        +
      </button>
    </div>
  );
};

export default CreateTask;
