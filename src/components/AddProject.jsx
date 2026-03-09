import { useForm, Controller } from "react-hook-form"
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { add, remove, edit } from '../store/ProjectsSlice.js';
import { addp } from '../store/PIdSlice.js'
import { data, useNavigate } from "react-router-dom";


const AddProject = () => {
    const navigate=useNavigate()
    const nextId = useSelector((state) => state.pIdSlice.id)
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            description: "",
            creationDate: ""
        },
    })
    const onSubmit = (data) => {
        const projWithId =
        {
            ...data,
            id: nextId
        }
        dispatch(addp())
        dispatch(add(projWithId))
        navigate('/AllProjects')


        console.log("Ok")
        console.log(projWithId)
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Box component="section" sx={{
                width: '25vw',
                borderRadius: 2,
                p: 2,
                  border: "2px solid #1976D2",
                backgroundColor: "#e6e6e689",
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                textAlign: "center",
                margin: 'auto',
                marginTop: '100px'
            }} >
                <Typography variant="h3">Add Project</Typography>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Project Name is required" }}
                    render={({ field }) => <TextField {...field}
                        label="Project Name"
                        margin="normal" />}
                />
                {errors.name && <p role="alert">{errors.name.message}</p>}
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: "Last Name is required" }}
                    render={({ field }) => <TextField {...field}
                        label="Description"
                        margin="normal" />}
                />
                {errors.description && <p role="alert">{errors.description.message}</p>}
                <Controller
                    name="creationDate"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => <TextField {...field}
                        // label="CreationDate"
                        type="date"
                        margin="normal" />
                    }
                />
                {errors.creationDate && <p role="alert">{errors.creationDate.message}</p>}
                <Button variant="contained" endIcon={<AddIcon />} type="submit">
                    Add
                </Button></Box>

        </form > </>
    )
}
export default AddProject
// ProjectDetails=()=>{
// const navigate=useNavigate()
// const {id}=useParams()
// const allTasks=useSelector(state=>state.tasks.tasks)
// const progectTask=allTasks.filter(t=>t.projectId===parseInt(id))
// const To_Do=progectTask.filter(t=>t.status==="To Do")
// const In_Progress=progectTask.filter(t=>t.status==="In Progress")
// const Done=progectTask.filter(t=>t.status==="Done")

// return(
//    <div style={{ display: "flex", gap: "20px" }}>
//     <TaskColumn id={id} status="To Do"title="To Do" tasks={To_Do} />
//     <TaskColumn id={id} status="In Progress" title="In Progress" tasks={In_Progress} />
//     <TaskColumn id={id}  status="Done" title="Done" tasks={Done} />
//   </div>
// )
// }
// export default ProjectDetails


// const TaskColumn = ({id,status, title, tasks }) => {
// const dense=true
// const navigate=useNavigate()
// const dispatch=useDispatch()
//     return(
//         <>
//    <Box sx={{ p: 2, border: '1px solid ' }}>
//     <Button color="primary" aria-label="add" onClick={()=>navigate(`/AllProjects/ProjectDetails/${id}/AddTask/${status}`)}  >
//                 <AddIcon />
//             </Button>
//      <Typography>{title}</Typography> 
//         <List sx={{width:'50%',margin:'0 auto'}} dense={dense}>
//                 {tasks.map((t) =>
//                  <ListItem
//                     key={t.id}
//                     secondaryAction={<>
//                       <IconButton edge="end" aria-label="edit" onClick={() => navigate(`/AllProjects/ProjectDetails/EditTask/${t.id}`)}>
//                             <EditIcon/>
//                         </IconButton>
//                         <IconButton edge="end" aria-label="delete" onClick={()=>dispatch(remove(t.id))}>
//                             <DeleteIcon/>
//                         </IconButton>
//                         </>
                       
//                     }
                     
//                 >
//                     <ListItemAvatar>
//                         <Avatar>
//                             <FolderIcon />
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText
//                         primary={t.title}
//                         secondary={t.description}
//                     />
//                 </ListItem>

//                 )}
                
//             </List>
//     </Box></>)
   
// }
// export default TaskColumn

// const AddTask = () => {
//     const {projid,status}= useParams()
//     const { control, handleSubmit, formState: { errors }, setError } = useForm({
//         defaultValues: {

//             title: "",
//             description: "",
//             priority: "",
//             dueDate: "",
//             status:status,
//             projectId: parseInt(projid)

//         },
//     })
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const nextId = useSelector((state) => state.tid.id)
//     const onSubmit = (data) => {

//         const taskWithId = {
//             ...data,
//             id: nextId
//         }
// console.log(taskWithId);

//         dispatch(addt());
//         dispatch(add(taskWithId))
//         navigate(`/AllProjects/ProjectDetails/${projid}`)
//     };


//     return (

//         <form onSubmit={handleSubmit(onSubmit)}>

//             <Stack spacing={2} direction="column" sx={{
//                 border: '2px solid #ccc',
//                 borderRadius: 2,
//                 padding: 3,
//                 maxWidth: 400,
//                 margin: 'auto',
//                 width: '50vw',
//                 marginTop: '150px'

//             }}
//             >
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Add Task        </Typography>
//                 <Controller
//                     name="title"
//                     control={control}
//                     rules={{
//                         required: "title is required"
//                     }}
//                     render={({ field }) => <TextField {...field}
//                         label="Task title"
//                         margin="normal" />}
//                 />
//                 {errors.title && <p role="alert">{errors.title.message}</p>}
//                 <Controller
//                     name="description"
//                     control={control}
//                     rules={{
//                         required: "description is required"
//                     }}
//                     render={({ field }) => <TextField {...field}
//                         label="description"

//                         margin="normal" />}
//                 />
//                 {errors.description && <p role="alert">{errors.description.message}</p>}
//                 <Controller
//                     name="dueDate"
//                     control={control}
//                     rules={{
//                         required: "dueDate is required"
//                     }}
//                     render={({ field }) => <TextField {...field}
//                         label=" dueDate"
//                         type="date"
//                         margin="normal" />
//                     }
//                 />
//                 {errors.dueDate && <p role="alert">{errors.dueDate.message}</p>}
//                 <Controller
//                     name="priority"
//                     control={control}
//                     rules={{ required: "Priority is required" }}
//                     render={({ field }) => (
//                         <FormControl fullWidth margin="normal">
//                             <InputLabel id="priority-label">Priority</InputLabel>
//                             <Select
//                                 {...field}
//                                 labelId="priority-label"
//                                 label="Priority"
//                             >
//                                 <MenuItem value={"High"}>High</MenuItem>
//                                 <MenuItem value={"Medium"}>Medium</MenuItem>
//                                 <MenuItem value={"Low"}>Low</MenuItem>
//                             </Select>
//                         </FormControl>
//                     )}
//                 />

//                 {errors.priority && <p role="alert">{errors.priority.message}</p>}
//                 <Button variant="contained" endIcon={<AddIcon />} type="submit">
//                     Add Task
//                 </Button>

//             </Stack>
//         </form>
//     )
// }
// export default AddTask









