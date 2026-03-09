import { useForm, Controller } from "react-hook-form"
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({

    defaultValues: {
      firstName: "",
      lastName: "",
      email: ""
   },
  })
  const user=useSelector((state)=>state.userSlice)
  const navigate=useNavigate()
  const onSubmit = (data)=>{
      if(data.firstName===user.firstName&&
      data.lastName===user.lastName&&
      data.email===user.email
    ){
    navigate('/AllProjects')}
    else{
      alert("User does not exist.")
    }

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
        textAlign:"center",
        margin:'auto',
        marginTop:'100px'
      }} >
        <Typography variant="h3">Log In</Typography>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "First Name is required" }}
          render={({ field }) => <TextField {...field}
            label="First Name"
            margin="normal" />}
        />
        {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Last Name is required" }}
          render={({ field }) => <TextField {...field}
            label="Last Name"
            margin="normal" />}
        />
        {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => <TextField {...field}
            label="Email"
            type="email"
            margin="normal" />
          }
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <Button variant="contained" endIcon={<LoginIcon />} type="submit">
          Log in
        </Button></Box>

    </form ></>
  )
}
export default Login