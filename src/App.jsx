// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'



// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import DogList from './pages/DogList/DogList'
import NewDog from './pages/NewDog/NewDog'
import EditDog from './pages/EditDog/EditDog'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as dogService from './services/dogService'

// styles
import './App.css'


function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const fetchDogs = async () => {
      const dogData = await dogService.index()
      setDogs(dogData)
    }
    fetchDogs()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddDog = async (dogFormData) => {
    const newDog = await dogService.create(dogFormData)
    setDogs([newDog, ...dogs])
    navigate('/dogs')
  }

  const handleUpdateDog = async (dogFormData) => {
    const updatedDog = await dogService.update(dogFormData)
    setDogs(dogs.map(d => dogFormData._id === d._id ? updatedDog : d))
    navigate('/dogs')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/dogs" element={
          <ProtectedRoute user={user}>
            <DogList dogs={dogs} />
          </ProtectedRoute>
        }
        />
        <Route path="/new" 
          element={<NewDog handleAddDog={handleAddDog}/>} 
          />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
