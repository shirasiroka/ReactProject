import { useForm, Controller } from "react-hook-form"
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { add, remove, edit } from '../store/TasksSlice.js';
import { addt } from '../store/TIdSlice.js'
import { data, useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
const AddTask = () => {
    // debugger
    const {id,status}=useParams()
    console.log("projId from useParams:",id);
    const navigate = useNavigate()
    const nextId = useSelector((state) => state.tIdSlice.id)
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: "",
            description: "",
            priority: "",
            dueDate: "",
            status:status,
            projectId:parseInt(id) 
        },
    })
    const onSubmit = (data) => {
        const taskWithId =
        {
            ...data,
            id: nextId,
        }
        
        dispatch(addt())
        dispatch(add(taskWithId)) 
        navigate(`/AllProjects/ProjectDetails/${id}`)
        console.log("Ok")
        console.log("taskWithId:", taskWithId);

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
                <Typography variant="h3">Add Task</Typography>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Task Name is required" }}
                    render={({ field }) => <TextField {...field}
                        label="Task Name"
                        margin="normal" />}
                />
                {errors.title && <p role="alert">{errors.title.message}</p>}
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: "description is required" }}
                    render={({ field }) => <TextField {...field}
                        label="Description"
                        margin="normal" />}
                />
                {errors.description && <p role="alert">{errors.description.message}</p>}
                <Controller
                    name="priority"
                    control={control}
                    rules={{ required: "Priority is required" }}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="priority-label">Priority</InputLabel>
                            <Select
                                labelId="priority-label"
                                {...field}
                                label="Priority"
                            >
                                <MenuItem value="High">High</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="Low">Low</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                    />
                    {errors.priority && <p role="alert">{errors.priority.message}</p>}
                <Controller
                    name="dueDate"
                    control={control}
                    rules={{ required: "dueDate is required" }}
                    render={({ field }) => <TextField {...field}
                        // label="CreationDate"
                        type="date"
                        margin="normal" />
                    }
                />
                {errors.dueDate && <p role="alert">{errors.dueDate.message}</p>}
                <Button variant="contained" endIcon={<AddIcon />} type="submit">
                    Add
                </Button></Box>

        </form > </>
    )
}
export default AddTask
