import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Home from './components/Home'
import Main from './components/Main'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
