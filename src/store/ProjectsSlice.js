import { createSlice } from '@reduxjs/toolkit'

const initVal = {
    projects: [{
        id: 1,
        name: "Website Redesign",
        description: "Redesign the company website for better UX",
        creationDate: "2026-02-15"
    },
    {
        id: 2,
        name: "Mobile App Launch",
        description: "Develop and launch the new mobile application",
        creationDate: "2026-01-20"
    },
    {
        id: 3,
        name: "Marketing Campaign",
        description: "Run a social media marketing campaign",
        creationDate: "2026-03-01"
    }]
}
const projectsSlice = createSlice({
    name: "projects",
    initialState: initVal,
    reducers: {
        add: (state, action) => {
            state.projects.push(action.payload)
        },
        remove: (state, action) => {
            state.projects = state.projects.filter(t => t.id !== action.payload)
        },
        edit: (state, action) => {
            const { id, name ,description,creationDate} = action.payload
            const project = state.projects.find(t => t.id === id)
            if (project){
                project.name = name,
                project.description=description,
                project.creationDate=creationDate
            }
                

                

        }
    }

})
export const { add, remove, edit } = projectsSlice.actions
export default projectsSlice.reducer


