import React, { useContext } from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Application from './pages/Application';
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/Appcontext';
import DashBoard from './pages/DashBoard';
import AddJobs from './pages/AddJobs';
import ManageJobs from './pages/ManageJobs';
import ViewApplication from './pages/ViewApplication';
import 'quill/dist/quill.snow.css'

const App = () => {
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      { showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Application/>}/>
        <Route path='/dashboard' element={<DashBoard/>}>
        <Route path='add-job' element={<AddJobs/>}/>
        <Route path='manage-jobs' element={<ManageJobs/>}/>
        <Route path='view-applications' element={<ViewApplication/>}/>
        </Route>
    
      </Routes>
    </div>
  )
}

export default App
