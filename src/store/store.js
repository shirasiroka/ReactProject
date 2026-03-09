// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import TasksSlice from './TasksSlice';
import ProjectsSlice from './ProjectsSlice';
import PIdSlice from './PIdSlice.js';
import TIdSlice from './TIdSlice.js';

export const store = configureStore({
  reducer: {
    userSlice: UserSlice,
    tasksSlice: TasksSlice,
    projectsSlice: ProjectsSlice,
    pIdSlice: PIdSlice,
    tIdSlice: TIdSlice
  }
});