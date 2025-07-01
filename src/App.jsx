import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import '@fontsource/krona-one/400.css'

// Preload components for instant navigation
import LandingPage from './components/Landingpage/LandingPage'
import Contact from './components/Contact'
import IndustriesWeServe from './components/IndustriesWeServe'
import Study from './components/Study'
import Choose from './components/Choose'
import Global from './components/Global'
import VM from './components/V&M'
import Stories from './components/Stories'
import Eco from './components/Eco'
import Study2 from './components/Study2'
import BackButton from './components/BackButton'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={
          <>
            <BackButton />
            <Contact />
          </>
        } />
        <Route path="/industries" element={
          <>
            <BackButton />
            <IndustriesWeServe />
          </>
        } />
        <Route path="/custom-solutions" element={
          <>
            <BackButton />
            <Study />
          </>
        } />
        <Route path="/why-choose-us" element={
          <>
            <BackButton />
            <Choose />
          </>
        } />
        <Route path="/global-footprint" element={
          <>
            <BackButton />
            <Global />
          </>
        } />
        <Route path="/vision-mission" element={
          <>
            <BackButton />
            <VM />
          </>
        } />
        <Route path="/testimonials" element={
          <>
            <BackButton />
            <Stories />
          </>
        } />
        <Route path="/eco-sustainability" element={
          <>
            <BackButton />
            <Eco />
          </>
        } />
        <Route path="/our-story" element={
          <>
            <BackButton />
            <Study2 />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
