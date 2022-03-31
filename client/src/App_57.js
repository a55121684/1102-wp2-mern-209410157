import './App.css';
import { Landing_57, Dashboard, Regster, Error_57 } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App_57() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing_57 />} />
        <Route path='regster' element={<Regster />} />
        <Route path='*' element={<Error_57 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_57;
