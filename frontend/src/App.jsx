import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage/LandingPage'
import Auth from './pages/Auth/Auth'
import Dashboard from './pages/Dashboard/Dashboard'
import GenerateRoadmap from './pages/GenerateRoadmap/GenerateRoadmap'
import DiagnosticTest from './pages/DiagnosticTest/DiagnosticTest'
import RoadmapView from './pages/RoadmapView/RoadmapView'
import RoadmapWorkspace from './pages/RoadmapWorkspace/RoadmapWorkspace'
import DocumentAnalyzer from './pages/DocumentAnalyzer/DocumentAnalyzer'
import StudyRoom from './pages/StudyRoom/StudyRoom'
import ResourceDiscovery from './pages/ResourceDiscovery/ResourceDiscovery'
import CommunityZone from './pages/CommunityZone/CommunityZone'
import UserProfile from './pages/UserProfile/UserProfile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate-roadmap" element={<GenerateRoadmap />} />
        <Route path="/diagnostic-test" element={<DiagnosticTest />} />
        <Route path="/roadmap-view" element={<RoadmapView />} />
        <Route path="/roadmap-workspace" element={<RoadmapWorkspace />} />
        <Route path="/document-analyzer" element={<DocumentAnalyzer />} />
        <Route path="/study-room" element={<StudyRoom />} />
        <Route path="/resources" element={<ResourceDiscovery />} />
        <Route path="/community" element={<CommunityZone />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
