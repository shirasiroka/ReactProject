import { createSlice } from '@reduxjs/toolkit'

const initVal={
    tasks : [
    {
    id: 1,
    title: "Build Projects Page",
    description: "Create a component to display all projects",
    status: "To Do",
    priority: "High",
    dueDate: "2026-03-10",
    projectId: 1
  },
  {
    id: 2,
    title: "Connect to Redux",
    description: "Store tasks in the Redux store",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2026-03-12",
    projectId: 1
  },
  {
    id: 3,
    title: "Design Task Card",
    description: "Create a clear UI for tasks",
    status: "Done",
    priority: "Low",
    dueDate: "2026-03-05",
    projectId: 1
  },
  {
    id: 4,
    title: "Add Edit Feature",
    description: "Allow updating task details",
    status: "To Do",
    priority: "High",
    dueDate: "2026-03-18",
    projectId: 1
  },

  // Project 2: Mobile App Launch
  {
    id: 5,
    title: "Plan App Screens",
    description: "Create wireframes for main screens",
    status: "To Do",
    priority: "High",
    dueDate: "2026-03-08",
    projectId: 2
  },
  {
    id: 6,
    title: "Develop UI Components",
    description: "Build components according to design",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2026-03-15",
    projectId: 2
  },
  {
    id: 7,
    title: "Integration Testing",
    description: "Ensure system works with API",
    status: "To Do",
    priority: "High",
    dueDate: "2026-03-20",
    projectId: 2
  },

  // Project 3: Marketing Campaign
  {
    id: 8,
    title: "Write Campaign Content",
    description: "Create posts and publications for social media",
    status: "To Do",
    priority: "High",
    dueDate: "2026-03-07",
    projectId: 3
  },
  {
    id: 9,
    title: "Graphic Design",
    description: "Create graphics for campaign posts",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2026-03-12",
    projectId: 3
  },
  {
    id: 10,
    title: "Analyze Results",
    description: "Track campaign performance and metrics",
    status: "To Do",
    priority: "Low",
    dueDate: "2026-03-25",
    projectId: 3
  }
  ]
}
const tasksSlice=createSlice({
    name:"tasks",
    initialState: initVal,
    reducers: {
        add:(state,action)=>{
            state.tasks.push(action.payload)
            
        },
        remove:(state,action)=>{
            state.tasks=state.tasks.filter(t=>t.id!==action.payload)
        },
        changeStatus:(state,action)=>{
            const {id,status}=action.payload
            const task=state.tasks.find(t=>t.id===id )
            if(task)
                task.status=status
        },
        edit:(state,action)=>{
            const {id,title,description,priority,dueDate}=action.payload
            const task=state.tasks.find(t=>t.id===id )
            if(task){
                task.title=title
                task.description=description,
                task.priority=priority,
                task.dueDate=dueDate
             } 
        }
    }
    
})
export const {add,remove ,changeStatus,edit}=tasksSlice.actions
export default tasksSlice.reducer


