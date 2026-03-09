import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import {Box,Typography, Grid, Card,CardContent,CardActions, IconButton,Button} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { remove,changeStatus } from "../store/TasksSlice"

const TaskColumn = ({ icon, id, status, title, tasks }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 350,
                minHeight: "500px",
                border: "2px solid #1976D2",
                backgroundColor: "#e6e6e689",
                borderRadius: 3,
                p: 2,
                alignItems: 'center'
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="h6">
                    <span style={{ verticalAlign: 'middle', marginRight: 4 }}>{icon}</span>
                    {title}
                </Typography>
                <Button
                    size="small"
                    onClick={() => navigate(`/AllProjects/ProjectDetails/${id}/AddTask/${status}`)}
                >
                    <AddIcon />
                </Button>
            </Box>

            <Grid container spacing={2} direction="column">
                {tasks.map((p) => (
                    <Grid item xs={12} key={p.id}>
                        <Card sx={{ width: "90%", margin: "0 auto" }}>
                            <CardContent>
                                <Typography variant="h6">
                                    {p.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    {p.description}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                    {p.priority}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    onClick={() => navigate(`/AllProjects/ProjectDetails/EditTask/${p.id}`)}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(remove(p.id))}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="change priority" onClick={() => {
                                    const nextStatus = {
                                        "To Do": "In Progress",
                                        "In Progress": "Done",
                                        "Done": NaN
                                    };
                                    dispatch(changeStatus({ id: p.id, status: nextStatus[p.status] }));
                                }}>
                                    <KeyboardDoubleArrowRightIcon />
                                </IconButton>

                            </CardActions>

                        </Card>

                    </Grid>

                ))}

            </Grid>

        </Box>

    )

}

export default TaskColumn

