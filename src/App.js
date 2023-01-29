import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/signin' exact element={<SignIn />} />
      </Routes>
     
    </div>
  );
}

export default App;
