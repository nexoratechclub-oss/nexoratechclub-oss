import './index.css'
import { Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Community from "./components/Community";
import CommunityShowcase from "./components/CommunityShowcase";
import JoinUs from "./components/JoinUs";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import OngoingEvent from "./components/OngoingEvent";
import Resources from "./components/Resources";
import UpcomingEvents from "./components/UpcomingEvents";

function HomePage() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Community />
      <OngoingEvent />
      <UpcomingEvents />
      <Resources />
      <CommunityShowcase />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join-us" element={<JoinUs />} />
    </Routes>
  )
}

export default App