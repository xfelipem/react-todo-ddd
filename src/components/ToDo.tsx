import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import ToDoItem from './ToDoItem';
import './ToDo.css';
import fetchTasks from '../domain/actions/task/fetchTasks';
import createTask from '../domain/actions/task/createTask';
import removeTask from '../domain/actions/task/removeTask';
import Task from '../domain/models/task/Task';

const ToDo = () => {
  const [list, setList] = useState<Task[]>([]);
  const [toDo, setToDo] = useState('');

  const createNewToDoItem = async () => {
    //validate todo
    if (!toDo) {
      alert('Please enter a todo!');
      return;
    }
    await createTask({ text: toDo, checked: false });
    setToDo('');
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      createNewToDoItem();
    }
  };

  const handleInput = (e: any) => {
    setToDo(e.target.value);
  };

  const deleteItem = (id: number) => {
    removeTask(id);
    fetchTasks().then(tasks => setList(tasks));
  };

  useEffect(() => {
    fetchTasks().then(tasks => setList(tasks));
  }, [setList]);

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {list.map((task: Task) => {
            return (
              <ToDoItem key={task.id} item={task} deleteItem={deleteItem} />
            );
          })}
        </div>

        <div className="ToDoInput">
          <input
            type="text"
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
          />
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
