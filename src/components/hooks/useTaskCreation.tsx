import { useState } from "react";
import createTask from "../../domain/actions/task/createTask";

const useTaskCreation = (createTaskInState: Function) => {
  const [text, setText] = useState('');

  const createTaskItem = async () => {
    //validate todo
    if (!text) {
      alert('Please enter a todo!');
      return;
    }
    const newTask = { text };
    await createTask(newTask);
    createTaskInState(newTask);
    setText('');
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      createTaskItem();
    }
  };

  const handleInput = (e: any) => {
    setText(e.target.value);
  };

  return {
    text,
    createTaskItem,
    handleKeyPress,
    handleInput,
  };
};

export default useTaskCreation;
