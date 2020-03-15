import React, { FC, useState } from 'react';

import { useTaskContext } from './state/useTaskContext';

export const CreateTaskInput: FC = () => {
  const { createTask } = useTaskContext();
  const [text, setText] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const createTaskFromInput = () => {
    if (isValid) {
      createTask(text);
      setText('');
    }
  };

  const handleInput = (e: any) => {
    const inputText = e.target.value;

    if (inputText.length >= 1) {
      setText(inputText);
      setIsValid(true);
      return;
    }

    setIsValid(false);
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
        style={isValid ? {} : { border: '1px solid red' }}
      />
      <button className="ToDo-Add" onClick={() => createTaskFromInput()}>
        +
      </button>
    </div>
  );
};
