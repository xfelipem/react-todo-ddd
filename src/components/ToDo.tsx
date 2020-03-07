import './ToDo.css';

import React from 'react';

import Logo from '../assets/logo.png';
import { CreateTaskInput } from './task/CreateTaskItem';
import { TaskContextProvider } from './task/TaskContextProvider';
import { TaskList } from './task/TaskList';

export const ToDo = () => (
  <div className="ToDo">
    <img className="Logo" src={Logo} alt="React logo" />
    <h1 className="ToDo-Header">React To Do</h1>
    <div className="ToDo-Container">
      <TaskContextProvider>
        <TaskList />
        <CreateTaskInput />
      </TaskContextProvider>
    </div>
  </div>
);
