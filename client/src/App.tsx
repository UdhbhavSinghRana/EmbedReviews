import './App.css'
import HomeScreen from "./apps/screens/home/home.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignUp } from "./apps/screens/authentication/signUp/signUp.tsx"
import { SignIn } from "./apps/screens/authentication/login/signIn.tsx"
import { TopNavigation } from "./apps/shared/components/topNavigation/topNavigation.tsx"
function App() {

  return (
    <BrowserRouter>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
