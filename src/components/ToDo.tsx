import React from 'react';
import Logo from '../assets/logo.png';
import './ToDo.css';
import CreateTask from './CreateTask';
import TaskList from './TaskList';
import useTaskCollection from './hooks/useTaskCollection';

const ToDo = () => {
  const { tasks, deleteTask, createTask } = useTaskCollection();

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <TaskList tasks={tasks} deleteItem={deleteTask} />
        <CreateTask createTask={createTask} />
      </div>
    </div>
  );
};

export default ToDo;
