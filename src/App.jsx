import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  SignUp,
  About,
  Contact,
  Pricing,
  Login,
  ForgotPassword,
  Auth,
  Dashboard,
  DashboardHome,
  DashboardProjects,
  DashboardTasks,
  DashboardMessages,
} from "./pages";
import { MainContent } from "./components";
import LogOut from "./components/container/LogOut";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<MainContent />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="logout" element={<LogOut />} />
      </Route>
      <Route path="/auth/" element={<Auth />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/dashboard/" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="projects" element={<DashboardProjects />} />
        <Route path="tasks" element={<DashboardTasks />} />
        <Route path='messages' element={<DashboardMessages/>}/>
      </Route>
    </Routes>
  );
}

export default App;
