import Hero from './Hero'
import Products from './Products'
import Products2 from './Products2'
import Progress from './Progress'
import Worldwide from './Worldwide'
import Serve from './Serve'
import Certifiation from './Certi'
import Connect from './Connect'
import Ribbon from './Ribbon'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <>
      <div className="w-[95%] mx-auto mt-8 rounded-[3rem] overflow-hidden">
        <Hero />
        <Products />
        <Products2 />
        <Progress />
        <Worldwide />
        {/* Start background image here */}
        <div style={{ position: "relative", width: "100%" }}>
          {/* Background image layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: "url('/back1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "0 -40px",
              opacity: 0.7, // only background is faded
              pointerEvents: "none",
            }}
          />
          {/* Foreground content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Serve />
            <Certifiation />
          </div>
        </div>
        {/* End background image here */}
        {/* Start second background image here */}
        <div style={{ position: "relative", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: "url('/back2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "0 0",
              opacity: 1,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <Connect />
            <Ribbon />
            <Footer />
          </div>
        </div>
        {/* End second background image here */}
      </div>
      {/* Removed Footer from outside, now included above */}
    </>
  )
}

export default LandingPage
