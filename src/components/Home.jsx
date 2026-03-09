import img from '../image/img.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login'
import Login from './Login.jsx';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';


const Home = () => {
    const navigator=useNavigate()
    return (
           <>
           <Typography sx={{color:'#C04596',mt:'190px', fontSize:'50px', fontFamily: 'Trebuchet MS',
  textShadow: '2px 2px 3px gray',WebkitTextStroke: '1px white'}}>
            Project and task 
            management website
           </Typography>
            <Box
                component="img"
                src={img}
                alt="My Image"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1, // רקע
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Button variant="contained" endIcon={<LoginIcon />} sx={{ backgroundColor: '#D597CD', color: '#002456'}} onClick={()=>navigator('/Login')} type="submit">
                    Log in
                </Button>

            </Box>
            
        </>
    )
}
export default Home