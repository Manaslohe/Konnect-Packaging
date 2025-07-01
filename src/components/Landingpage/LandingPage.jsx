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
    <div className="w-[95%] mx-auto mt-8 rounded-[3rem] overflow-hidden">
      <Hero />
      <Products />
      <Products2 />
      <Progress />
      <Worldwide />
      <Serve />
      <Certifiation />
      <Connect />
      <Ribbon />
      <Footer />
    </div>
  )
}

export default LandingPage
