import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      {/* <Header /> */}
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/signin' exact element={<SignIn />} />
      </Routes>
     
    </UserContextProvider>
  );
}

export default App;
