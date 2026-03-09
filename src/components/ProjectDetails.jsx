import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TaskColumn from "./TaskColumn"
import { ListItemText, Typography } from "@mui/material"
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';


const projectDetials = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const allTasks = useSelector((state) => state.tasksSlice.tasks.filter(p => p.projectId === parseInt(id)))
    const projName = useSelector((state) => state.projectsSlice.projects.find(p => p.id === parseInt(id)))
    const To_Do = allTasks.filter(t => t.status === "To Do")
    const In_Progress = allTasks.filter(t => t.status === "In Progress")
    const Done = allTasks.filter(t => t.status === "Done")
    return (
        <>
            <Typography sx={{ mb: 5, fontWeight: "bold" }}>
                {projName.name}
            </Typography>
            <div style={{ display: "flex", gap: "20px" }}>
                <TaskColumn icon={<AssignmentOutlinedIcon />} id={id} status="To Do" title="To-Do" tasks={To_Do} />
                <TaskColumn icon={<LoopOutlinedIcon />} id={id} status="In Progress" title="In Progress" tasks={In_Progress} />
                <TaskColumn icon={<DoneAllOutlinedIcon />} id={id} status="Done" title="Done" tasks={Done} />
            </div>
        </>

    )
}
export default projectDetials

