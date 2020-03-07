import React, { FC, useReducer, createContext } from 'react';
import { taskReducer, initialTaskState } from './state/taskState';

export const TaskContext = (() => {
  const TaskContext = createContext(initialTaskState);
  TaskContext.displayName = 'TaskContext';

  return TaskContext;
})();

interface TaskContextProviderProps {
  children: any;
}

export const TaskContextProvider: FC<TaskContextProviderProps> = props => {
  const { children } = props;
  const [contextState, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    <TaskContext.Provider value={{ ...contextState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
