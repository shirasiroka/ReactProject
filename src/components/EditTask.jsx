
import { useForm, Controller } from "react-hook-form";
import { TextField, Stack, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/TasksSlice";
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


const EditTask = () => {
    const { id } = useParams();
    const task = useSelector(state =>
        state.tasksSlice.tasks.find(t => t.id === parseInt(id)));
    console.log(task);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: task?.title || "",
            description: task?.description || "",
            status: task?.status || "",
            priority: task?.priority || "",
            dueDate: task?.dueDate || "",
        }
    });

    const onSubmit = (data) => {
        const updatedTask = {
            ...task,
            title: data.title,
            description: data.description,
            status: data.status,
            priority: data.priority,
            dueDate: data.dueDate,
        };
        dispatch(edit(updatedTask));
      
        navigate(`/AllProjects/ProjectDetails/${task.projectId}`);
    };

    if (!task) return <p>Task not found</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} direction="column" sx={{
                 border: "2px solid #1976D2",
                backgroundColor: "#e6e6e689",
                borderRadius: 2,
                padding: 3,
                maxWidth: 400,
                margin: 'auto',
                width: '25vw',
                marginTop: '100px'
            }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Edit Task
                </Typography>
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: "name is required" }}
                    render={({ field }) => <TextField {...field} label="Task name" margin="normal" />}
                />
                {errors.title && <p role="alert">{errors.title.message}</p>}

                <Controller
                    name="description"
                    control={control}
                    rules={{ required: "description is required" }}
                    render={({ field }) => <TextField {...field} label="Description" margin="normal" />}
                />
                {errors.description && <p role="alert">{errors.description.message}</p>}
                <Controller
                    name="priority"
                    rules={{ required: "priority is required" }}
                    control={control}
                    render={({ field }) => (<FormControl fullWidth margin="normal">
                        <InputLabel id="priority-label">Priority</InputLabel>
                        <Select
                            {...field}
                            labelId="priority-label"
                            label="Priority"
                        >
                            <MenuItem value={"High"}>High</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"Low"}>Low</MenuItem>
                        </Select>
                    </FormControl>
                    )}
                />
                <Controller
                    name="dueDate"
                    control={control}
                    rules={{ required: "dueDate is required" }}
                    render={({ field }) => <TextField {...field} label="Due Date" type="date" margin="normal" />}
                />
                {errors.dueDate && <p role="alert">{errors.dueDate.message}</p>}



                <Button variant="contained" endIcon={<AddIcon />} type="submit">
                    Save Task
                </Button>
            </Stack>
        </form>
    );
}
export default EditTask