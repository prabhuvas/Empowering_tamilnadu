import './App.css';
import { UserLogin } from "./pages/login/UserLogin";
import { AdminLogin } from "./pages/adminpage/AdminLogin";
import { SignUp } from "./pages/createAccount/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { ContentPage } from './pages/userpage/ContentPage';
import { LoginPage } from './pages/login/LoginPage';
import { SignupOptions } from './pages/createAccount/SignupOptions';
import { AddComplaint } from './pages/userpage/AddComplaint';
import { UserDashboard } from './pages/userpage/UserDashboard';
import { AdminContent } from './pages/adminpage/AdminContent';
import { Help } from './pages/userpage/Help';
import { NoComplaint } from './pages/userpage/NoComplaint';
import { useState, createContext } from 'react';
import AdminDashboard from './pages/adminpage/AdminDashboard';
import ComplaintDetails from './pages/adminpage/ComplaintDetails';
import UrgentComplaint from './pages/adminpage/UrgentComplaint';
import AdminComplaints from './pages/adminpage/AdminComplaints';
import ReviewSuggestion from './pages/adminpage/ReviewSuggestion';
import { AskingUser } from './pages/createAccount/AskingUser';

export const AppContext = createContext();

function App() {
 
const [city, setCity] = useState(null);
const [loading, setLoading] = useState(null);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [id, setId] = useState("");

return (
  <div className="App">
    <AppContext.Provider value={{city, setCity, loading, setLoading, email, setEmail, password, setPassword, id, setId}}>

    <Router>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contentpage' element={<ContentPage />} />
        <Route path='/loginContainer' element={<LoginPage />} />
        <Route path='/signupOptions' element={<SignupOptions />} />
        <Route path='/addComplaint' element={<AddComplaint />} />
        <Route path='/userDashboard' element={<UserDashboard />} />
        <Route path='/adminContent' element={<AdminContent />} />
        <Route path='/help' element={<Help />} />
        <Route path='/noComplaint' element={<NoComplaint />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/complaintDetails' element={<ComplaintDetails />} />
        <Route path='/admin/urgentComplaint' element={<UrgentComplaint />} />
        <Route path='/admin/reviewSuggestion' element={<ReviewSuggestion />} />
        <Route path='/askinguser' element={<AskingUser />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
    
    </AppContext.Provider>
      
  </div>
);
}

export default App;