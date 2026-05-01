import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Guilds from './components/Guilds'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Final from './components/Final'
import Footer from './components/Footer'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function Home() {
  return (
    <div style={{ backgroundColor: '#1C1D23', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Guilds />
      <Card1 />
      <Card2 />
      <Final />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  )
}
