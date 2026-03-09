import { useForm, Controller } from "react-hook-form";
import { TextField, Stack, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/ProjectsSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();
  const project = useSelector(state =>
    state.projectsSlice.projects.find(p => p.id === parseInt(id)));
  console.log(project);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: project?.name || "",
      description: project?.description || "",
      creationDate: project?.creationDate || "",
    }
  });

  const onSubmit = (data) => {
    const updatedProject = {
      ...project,
      name: data.name,
      description: data.description,
      creationDate: data.creationDate
    };
    dispatch(edit(updatedProject));
    navigate("/AllProjects");
  };

  if (!project) return <p>Project not found</p>;

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
          Edit Project
        </Typography>
        <Controller
          name="name"
          control={control}
          rules={{ required: "name is required" }}
          render={({ field }) => <TextField {...field} label="Project name" margin="normal" />}
        />
        {errors.name && <p role="alert">{errors.name.message}</p>}

        <Controller
          name="description"
          control={control}
          rules={{ required: "description is required" }}
          render={({ field }) => <TextField {...field} label="Description" margin="normal" />}
        />
        {errors.description && <p role="alert">{errors.description.message}</p>}
        <Controller
          name="creationDate"
          control={control}
          rules={{ required: "creationDate is required" }}
          render={({ field }) => <TextField {...field} label="Creation Date" type="date" margin="normal" />}
        />
        {errors.creationDate && <p role="alert">{errors.creationDate.message}</p>}



        <Button variant="contained" endIcon={<AddIcon />} type="submit">
          Save Project
        </Button>
      </Stack>
    </form>
  );
};

export default EditProject;
