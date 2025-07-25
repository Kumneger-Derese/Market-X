import { useTheme } from './context/ThemeContext'
import { AboutUs, Blog, Hero, Navbar, Pricing, Services, Solutions, Stats,Testimonials,
  CTA,
  Footer,
  FooterEnd, } from './components'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div className={`${isDark ? 'dark' : ''} px-2 transition-colors duration-500 sm:px-8 bg-[#f4f7fc] text-slate-800 dark:bg-slate-900 dark:text-white pt-3`}>

      <Navbar />
      <div className='px-8 sm:px-0'>
        <Hero />
        <Services />
        <AboutUs />
        <Solutions />
        <Stats />
        <Pricing />
        <Blog />
        <Testimonials/>
        <CTA/>
        <Footer/>
      </div>
        <FooterEnd/>
    </div>

  )
}
export default App  