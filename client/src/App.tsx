import './App.css'
import HomeScreen from "./apps/screens/home/home.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from "./apps/screens/authentication/signUp/signUp.tsx"
import { SignIn } from "./apps/screens/authentication/login/signIn.tsx"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
