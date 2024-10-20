
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-gray-700 text-white font-semibold text-3xl py-2 my-6'>Hello There!!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
      
    
  )
}

export default App
