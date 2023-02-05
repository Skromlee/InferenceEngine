// import Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import css
import './App.css';
// pages
import Header from './components/Header';
import MyRule from './pages/MyRule';
import MyFact from './pages/MyFact';
import Home from './pages/Home'
import Member from './pages/Member';
import Advisor from './pages/Advisor';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facts' element={<MyFact />} />
          <Route path='/rules' element={<MyRule />} />
          <Route path='/team-members' element={<Member />}/>
          <Route path='/our-adviser' element={<Advisor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
