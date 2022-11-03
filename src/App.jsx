import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ContextUser from "./components/ContextUser";
import ProtactedProfile from "./components/ProtactedProfile";
function App() {
  return (
    <ContextUser>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile"
            element={
              <ProtactedProfile>
                <Profile />
              </ProtactedProfile>
            } />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ContextUser>
  );
}

export default App;
