import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<SignIn/>} />
<Route path='/signup' element={<SignUp/>} />
<Route path='/create' element={<CreatePost/>} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
