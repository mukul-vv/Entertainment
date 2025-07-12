import { Login } from '../../pages/formdata/login';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../../pages/homepage';

export const AllRoutes = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/auth-login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
    
    </div>
  );
}

