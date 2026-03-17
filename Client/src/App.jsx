import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import CardPreview from './Pages/CardPreview.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card/:id' element={<CardPreview />} />
      </Routes>

    </>
  )
}

export default App
