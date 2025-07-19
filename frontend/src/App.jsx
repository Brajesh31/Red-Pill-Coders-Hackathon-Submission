import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PageLayout from "./layouts/pageLayout";

// PAGES
import Home from "./pages/home";
import About from "./pages/About";
import EventsPage from "./pages/EventsPage.jsx";
import Project from "./pages/Project.jsx";
import Login from "./pages/UserLogin";
import Signup from "./pages/UserSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PageLayout>
            <Home />
          </PageLayout>
        }/>
        <Route path="/about" element={
          <PageLayout>
            <About />
          </PageLayout>
        }/>
        <Route
          path="/events"
          element={
            <PageLayout>
              <EventsPage />
            </PageLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PageLayout>
              <Project />
            </PageLayout>
          }
        />
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }/>
        <Route path="/signup" element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }/>
        <Route path="/admin/login" element={
          <AuthLayout>
            <AdminLogin />
          </AuthLayout>
        }/>
        <Route path="/dashboard" element={
          <PageLayout>
            <AdminDashboard />
          </PageLayout>
        }/>
        <Route path="/add-event" element={
          <PageLayout>
            <AddEvent />
          </PageLayout>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
