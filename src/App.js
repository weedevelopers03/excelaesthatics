import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SellayaLandingPage from './SellayaLandingPage'
import ThankYouPage from './ThankYouPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SellayaLandingPage />} />
        <Route path='/thank-you' element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}

export default App
