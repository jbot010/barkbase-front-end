// NPM
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'

// PAGES
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AllDogs from './pages/AllDogs/AllDogs'
// import DogList from './pages/DogList/DogList'
import NewDog from './pages/NewDog/NewDog'
import EditDog from './pages/EditDog/EditDog'
import DogDetails from './pages/DogDetail/DogDetail'
import EditComment from './pages/EditComment/EditComment'
import NewReportCard from './components/NewReportCard/NewReportCard'
import EditReport from './pages/EditReport/EditReport'
import AdminHome from './pages/AdminHome/AdminHome'
import ProfileDetails from './pages/ProfileDetail/ProfileDetail'

// COMPONENTS
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// SERVICES
import * as authService from './services/authService'
import * as dogService from './services/dogService'
import * as reportService from './services/reportService'
import * as profileService from './services/profileService'

// STYLES
import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [dogs, setDogs] = useState([])
  const { dogId, reportId } = useParams()
  const [profile, setProfile] = useState([])

  console.log(profile, '<< PROFILE')
  console.log(user, '<<< USER')
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfile(profileData)
    }
    fetchProfiles()
  }, [])

  useEffect(() => {
    const fetchDogs = async () => {
      const dogData = user && await dogService.index()
      setDogs(dogData)
    }
    fetchDogs()
  }, [user])

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
    setProfile((prevProfiles) => {
      const updatedProfile = prevProfiles.map((profile) => {
        if (profile._id === user.profile) {
          return { ...profile, dogs: [newDog, ...profile.dogs] }
        }
        return profile
      })
      return updatedProfile
    })
    navigate(`/profiles/${user.profile}`)
  }

  const handleUpdateDog = async (dogFormData) => {
    const updatedDog = await dogService.update(dogFormData)
    setDogs(dogs.map(dog => {
      if (dog._id === updatedDog._id) {
        return updatedDog
      } else {
        return dog
      }
    }))
    navigate(`/dogs/${dogFormData._id}`)
  }

  const handleDeleteDog = async (dogId) => {
    const deletedDog = await dogService.deleteDog(dogId)
    setDogs(dogs.filter(d => d._id !== deletedDog._id))
    navigate(`/profiles/${user.profile}`)
  }

  const handleAddReport = async (dogId, reportFormData) => {
    const newReport = await reportService.create(dogId, reportFormData)
    setDogs((prevDogs) => {
    const updatedDog = prevDogs && prevDogs.map((dog) => {
      if (dog._id === dogId) {
        return { ...dog, reports: [newReport, ...dog.reports] }
      } else {
        return dog
      }
    })
    setDogs(updatedDog)
    })
  }

  const handleUpdateReport = async (reportFormData) => {
    try {
      const updatedReport = await reportService.updateReport(reportId, reportFormData)
      setDogs((prevDogs) => {
        const updatedDogs = prevDogs.map((dog) => {
          if (dog._id === dogId) {
            const updatedReports = dog.reports.map((report) => {
              if (report._id === reportId) {
                return updatedReport
              }
              return report
            })
            return { ...dog, reports: updatedReports }
          }
          return dog
        })
        return updatedDogs
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <Landing user={user} />
        } />
        <Route path="/dogs" element={
          <ProtectedRoute profile={profile}>
            <AllDogs dogs={dogs} />
          </ProtectedRoute>
        } />
        <Route path="/new" 
          element={
          <NewDog handleAddDog={handleAddDog}/>
        } />
        <Route path="/dogs/:dogId" element={
          <ProtectedRoute user={user}>
            <DogDetails user={user} handleDeleteDog={handleDeleteDog} />
          </ProtectedRoute>
        } />
        <Route path="/dogs/:dogId/edit" element={
          <ProtectedRoute user={user}>
            <EditDog user={user} handleUpdateDog={handleUpdateDog} />
          </ProtectedRoute>
        } />
        <Route path="/dogs/:dogId/reports/newReport" 
          element={
            <ProtectedRoute user={user}>
              <NewReportCard dogId={dogId} handleAddReport={handleAddReport}/>
          </ProtectedRoute>
          }
        />
        <Route path="/dogs/:dogId/reports/:reportId" element={
          <ProtectedRoute user={user}>
            <EditReport user={user} handleUpdateReport={handleUpdateReport} dogId={dogId} reportId={reportId} />
            </ProtectedRoute>
          }
        />
        <Route path="/dogs/:dogId/comments/:commentId" element={
          <ProtectedRoute user={user}>
            <EditComment />
          </ProtectedRoute>
        } />
        {/* ADMIN AND USERS */}
        <Route 
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <AdminHome dogs={dogs}/>
            </ProtectedRoute>
          }
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
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails handleAddDog={handleAddDog} />
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
