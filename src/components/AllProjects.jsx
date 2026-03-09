import { useSelector } from "react-redux"
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { add, remove, edit } from '../store/ProjectsSlice.js';
import { Box, Button, CardHeader } from "@mui/material";
import AddProject from "./AddProject.jsx";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardActions } from "@mui/material"

const AllProjects = () => {
    const allProjects = useSelector((state) => state.projectsSlice.projects)
    const dispatch = useDispatch()
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 2 }}>
                <Button aria-label="add" onClick={() => navigate('/AllProjects/AddProject')}>
                    <AddIcon />
                    <Typography sx={{ ml: 1 }}>add project</Typography>
                </Button>

            </Box>
            <Typography sx={{ mt: 4, mb: 2, color: "#1976D2" }} variant="h6" component="div">
                AllMyProjects
            </Typography>

            <Box sx={{
                width: "100%",
                // maxWidth:1500,
                minHeight: "450px",
                border: "2px solid #1976D2",
                backgroundColor: "#e6e6e689",
                borderRadius: 3,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',


            }}>
                <Grid container spacing={3}>
                    {allProjects.map((p) =>
                        <Grid item xs={12} md={4} key={p.id} sx={{ display: 'flex' }}>
                            <Card sx={{
                                width: '300px',
                                height: 220,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>

                                <CardHeader
                                    avatar={
                                        <Avatar>
                                            <FolderIcon
                                                style={{ cursor: "pointer" }}
                                                onClick={() => navigate(`/AllProjects/ProjectDetails/${p.id}`)}
                                            />
                                        </Avatar>
                                    }
                                />
                                <CardContent>

                                    <Typography variant="h6" noWrap>
                                        {p.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical"
                                        }}
                                    >
                                        {p.description}
                                    </Typography>

                                </CardContent>


                                <CardActions>
                                    <IconButton
                                        aria-label="edit"
                                        onClick={() => navigate(`/AllProjects/EditProject/${p.id}`)}
                                    >
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => dispatch(remove(p.id))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>

                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Box>


        </>
    )
}
export default AllProjects