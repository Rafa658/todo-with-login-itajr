import './App.css';
import Navbar from './components/navbar/Navbar';
import LoginArea from './components/login-area/LoginArea';
import Todo from './components/todo/Todo';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<LoginArea/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
