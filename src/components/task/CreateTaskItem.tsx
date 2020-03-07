import React, { FC, useState } from 'react';

import { useTaskContext } from './state/useTaskContext';

export const CreateTaskInput: FC = () => {
  const { createTask } = useTaskContext();
  const [text, setText] = useState('');

  const createTaskFromInput = () => {
    createTask(text);
    setText('');
  };

  const handleInput = (e: any) => {
    setText(e.target.value);
  };
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      createTaskFromInput();
    }
  };

  return (
    <div className="ToDoInput">
      <input
        type="text"
        value={text}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <button className="ToDo-Add" onClick={() => createTaskFromInput()}>
        +
      </button>
    </div>
  );
};
