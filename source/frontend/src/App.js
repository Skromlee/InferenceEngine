// import Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import css
import './App.css';
// pages
import MyRule from './pages/MyRule';
import Home from './pages/Home'
import Header from './components/Header';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rules' element={<MyRule />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
