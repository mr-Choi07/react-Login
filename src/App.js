import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/SignIn.tsx';
import Register from './pages/Login/SignUp.tsx';
import Home from './pages/Home/Home.tsx';
import Terms from './pages/Login/Terms.tsx';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/signin' element={< Login />} />
        <Route path='/signup' element={< Register />}/>
        <Route path='/' element={< Home />} />
        <Route path='/terms' element={< Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
