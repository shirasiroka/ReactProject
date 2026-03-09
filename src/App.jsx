import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import AllProjects from './components/AllProjects.jsx';  // אם קיים
import Home from './components/Home.jsx'
import AllProjects from './components/AllProjects.jsx';
import AddProject from './components/AddProject.jsx';
import EditProject from './components/EditProject.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import AddTask from './components/AddTask.jsx';
import EditTask from './components/EditTask.jsx';



//import AddTask from './components/AddTask.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AllProjects" element={<AllProjects/>}/>
            <Route path="/AllProjects/AddProject" element={<AddProject/>}/>
            <Route path="/AllProjects/EditProject/:id" element={<EditProject/>}/>
            <Route path="/AllProjects/ProjectDetails/:id" element={<ProjectDetails/>}/>
           <Route path="/AllProjects/ProjectDetails/:id/AddTask/:status" element={<AddTask/>}/>
           <Route path="/AllProjects/ProjectDetails/EditTask/:id" element={<EditTask/>}/>
            
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
