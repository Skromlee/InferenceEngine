// import Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import css
import './App.css';
// pages
import Header from './components/Header';
import MyRule from './pages/MyRule';
import Home from './pages/Home'
import Member from './pages/Member';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rules' element={<MyRule />} />
          <Route path='/team-members' element={<Member />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
